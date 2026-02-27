const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Парсинг Kaspi (упрощённый пример)
app.get('/api/parse/kaspi', async (req, res) => {
  const { query } = req.query;
  
  try {
    // В реальности нужно использовать их API или эмулировать браузер
    const response = await axios.get(
      `https://kaspi.kz/shop/search/?text=${encodeURIComponent(query)}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    );
    
    const $ = cheerio.load(response.data);
    const products = [];
    
    // Селекторы зависят от структуры сайта
    $('.product-card').each((i, el) => {
      products.push({
        name: $(el).find('.product-card__title').text().trim(),
        price: $(el).find('.product-card__price').text().trim(),
        link: 'https://kaspi.kz' + $(el).find('a').attr('href')
      });
    });
    
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Парсинг Ozon
app.get('/api/parse/ozon', async (req, res) => {
  const { query } = req.query;
  // Аналогичная логика для Ozon
  // ...
});

// Объединённый поиск
app.get('/api/search', async (req, res) => {
  const { query, markets } = req.query;
  const results = [];
  
  const parsers = {
    kaspi: parseKaspi,
    ozon: parseOzon,
    wildberries: parseWildberries
    // ...
  };
  
  for (const market of markets.split(',')) {
    if (parsers[market]) {
      try {
        const data = await parsers[market](query);
        results.push(...data.map(p => ({ ...p, marketplace: market })));
      } catch (e) {
        console.error(`Ошибка парсинга ${market}:`, e.message);
      }
    }
  }
  
  // Сортировка по цене
  results.sort((a, b) => a.price - b.price);
  
  res.json({ success: true, results });
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});
