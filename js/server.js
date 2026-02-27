const express = require('express');
const cors = require('cors');
const path = require('path');

const kaspiParser = require('./parsers/kaspi');
const ozonParser = require('./parsers/ozon');
const wildberriesParser = require('./parsers/wildberries');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Логирование запросов
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
  next();
});

// ======== API МАРШРУТЫ ========

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

// Универсальный поиск по всем выбранным магазинам
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

  // Параллельный парсинг всех магазинов
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
      
      // Добавляем marketplace к каждому товару
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

  // Сортировка по итоговой цене
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

// Отдельный парсер Kaspi
app.get('/api/parse/kaspi', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ success: false, error: 'Укажите параметр query' });
    }
    
    const products = await kaspiParser.search(query);
    res.json({ 
      success: true, 
      marketplace: 'kaspi', 
      count: products.length, 
      results: products 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Отдельный парсер Ozon
app.get('/api/parse/ozon', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ success: false, error: 'Укажите параметр query' });
    }
    
    const products = await ozonParser.search(query);
    res.json({ 
      success: true, 
      marketplace: 'ozon', 
      count: products.length, 
      results: products 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Отдельный парсер Wildberries
app.get('/api/parse/wildberries', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ success: false, error: 'Укажите параметр query' });
    }
    
    const products = await wildberriesParser.search(query);
    res.json({ 
      success: true, 
      marketplace: 'wildberries', 
      count: products.length, 
      results: products 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Статические файлы фронтенда
app.use(express.static(path.join(__dirname, '../frontend')));

// 404 обработчик
app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.url });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════╗
║                                                ║
║     🚀 PriceCompare KZ API v1.0.0               ║
║                                                ║
║     Сервер запущен: http://localhost:${PORT}      ║
║                                                ║
╚════════════════════════════════════════════════╝

API Endpoints:
• GET /api/search?query=iphone&markets=kaspi,ozon,wildberries
• GET /api/parse/kaspi?query=iphone
• GET /api/parse/ozon?query=iphone  
• GET /api/parse/wildberries?query=iphone

Пример запроса:
curl "http://localhost:${PORT}/api/search?query=iphone%2015&markets=kaspi,ozon,wildberries"
`);
});
