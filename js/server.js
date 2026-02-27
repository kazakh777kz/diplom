const express = require('express');
const cors = require('cors');
const path = require('path');

const kaspiParser = require('./parsers/kaspi');
const ozonParser = require('./parsers/ozon');
const wildberriesParser = require('./parsers/wildberries');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS - разрешаем все источники
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

app.use(express.json());

// Дополнительные заголовки для всех ответов
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
  next();
});

// Главная страница API
app.get('/', (req, res) => {
  res.json({
    name: 'PriceCompare KZ API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      search: 'GET /api/search?query=iphone&markets=kaspi,ozon,wildberries',
      kaspi: 'GET /api/parse/kaspi?query=iphone',
      ozon: 'GET /api/parse/ozon?query=iphone',
      wildberries: 'GET /api/parse/wildberries?query=iphone'
    }
  });
});

// Универсальный поиск
app.get('/api/search', async (req, res) => {
  const { query, markets = 'kaspi,ozon,wildberries' } = req.query;
  
  if (!query || query.trim().length < 2) {
    return res.status(400).json({ 
      success: false, 
      error: 'Укажите query (минимум 2 символа)' 
    });
  }

  const marketList = markets.split(',').map(m => m.trim().toLowerCase()).filter(m => m);
  const results = [];
  const errors = [];

  console.log(`\n🔍 ПОИСК: "${query}" в [${marketList.join(', ')}]`);
  const startTime = Date.now();

  const promises = marketList.map(async (market) => {
    try {
      let products = [];
      
      switch(market) {
        case 'kaspi':
          products = await kaspiParser.search(query);
          break;
        case 'ozon':
          products = await ozonParser.search(query);
          break;
        case 'wildberries':
        case 'wb':
          products = await wildberriesParser.search(query);
          break;
        default:
          throw new Error(`Неизвестный магазин: ${market}`);
      }
      
      const withMeta = products.map(p => ({
        ...p,
        marketplace: market === 'wb' ? 'wildberries' : market,
        searchQuery: query,
        parsedAt: new Date().toISOString()
      }));
      
      results.push(...withMeta);
      console.log(`  ✅ ${market}: ${withMeta.length} товаров`);
      
    } catch (error) {
      console.error(`  ❌ ${market}: ${error.message}`);
      errors.push({ market, error: error.message });
    }
  });

  await Promise.all(promises);

  results.sort((a, b) => {
    const totalA = (a.price || 0) + (a.delivery || 0);
    const totalB = (b.price || 0) + (b.delivery || 0);
    return totalA - totalB;
  });

  const duration = Date.now() - startTime;

  console.log(`✅ ГОТОВО: ${results.length} товаров за ${duration}ms\n`);

  res.json({
    success: true,
    query: query.trim(),
    duration: `${duration}ms`,
    total: results.length,
    markets: marketList,
    errors: errors.length > 0 ? errors : undefined,
    results: results.slice(0, 50)
  });
});

// Отдельные эндпоинты
app.get('/api/parse/kaspi', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ success: false, error: 'Укажите query' });
    
    const products = await kaspiParser.search(query);
    res.json({ success: true, marketplace: 'kaspi', count: products.length, results: products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/parse/ozon', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ success: false, error: 'Укажите query' });
    
    const products = await ozonParser.search(query);
    res.json({ success: true, marketplace: 'ozon', count: products.length, results: products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/parse/wildberries', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ success: false, error: 'Укажите query' });
    
    const products = await wildberriesParser.search(query);
    res.json({ success: true, marketplace: 'wildberries', count: products.length, results: products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Статические файлы фронтенда
app.use(express.static(path.join(__dirname, '../frontend')));

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.url });
});

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════╗
║                                                ║
║     🚀 PriceCompare KZ API v1.0.0               ║
║                                                ║
║     Сервер: http://localhost:${PORT}              ║
║                                                ║
╚════════════════════════════════════════════════╝
`);
});
