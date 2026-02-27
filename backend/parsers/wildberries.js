const axios = require('axios');

class WildberriesParser {
  constructor() {
    this.baseUrl = 'https://www.wildberries.kz';
    this.apiUrl = 'https://search.wb.ru/exactmatch/ru/common/v4/search';
  }

  async search(query) {
    try {
      console.log(`[Wildberries] Поиск: "${query}"`);
      
      const response = await axios.get(this.apiUrl, {
        params: {
          query: query,
          resultset: 'catalog',
          limit: 100,
          sort: 'popular',
          page: 1,
          appType: 1,
          curr: 'kzt',
          lang: 'ru',
          locale: 'ru',
          prune: 0
        },
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'ru-RU,ru;q=0.9',
          'Origin': 'https://www.wildberries.kz',
          'Referer': 'https://www.wildberries.kz/'
        },
        timeout: 15000
      });

      const data = response.data;
      
      if (!data?.data?.products || !Array.isArray(data.data.products)) {
        console.log('[Wildberries] Пустой ответ от API');
        return [];
      }

      const products = data.data.products.map(item => {
        const price = Math.round((item.salePriceU || item.priceU || 0) / 100);
        const originalPrice = item.priceU && item.priceU !== item.salePriceU 
          ? Math.round(item.priceU / 100) 
          : null;
        
        const link = `https://www.wildberries.kz/catalog/${item.id}/detail.aspx`;
        
        const vol = Math.floor(item.id / 100000);
        const part = Math.floor(item.id / 1000);
        const basket = (vol >= 0 && vol <= 143) ? '01' : 
                       (vol >= 144 && vol <= 287) ? '02' : 
                       (vol >= 288 && vol <= 431) ? '03' : '04';
        
        const image = item.pics && item.pics[0] 
          ? `https://basket-${basket}.wbbasket.ru/vol${vol}/part${part}/${item.id}/images/c246x328/1.webp`
          : null;

        return {
          name: item.name || 'Без названия',
          price: price,
          originalPrice: originalPrice,
          delivery: 0,
          seller: item.brand || 'Wildberries',
          link: link,
          image: image,
          rating: item.rating,
          feedbacks: item.feedbacks
        };
      }).filter(p => p.price > 1000);

      console.log(`[Wildberries] Найдено: ${products.length}`);
      return products;

    } catch (error) {
      console.error('[Wildberries] Ошибка API:', error.message);
      return this.fallbackPuppeteer(query);
    }
  }

  async fallbackPuppeteer(query) {
    console.log('[Wildberries] Fallback на Puppeteer');
    const puppeteer = require('puppeteer');
    
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
      
      const searchUrl = `${this.baseUrl}/catalog/0/search.aspx?search=${encodeURIComponent(query)}`;
      await page.goto(searchUrl, { waitUntil: 'networkidle2' });
      
      await page.waitForTimeout(3000);

      const products = await page.evaluate(() => {
        const items = [];
        document.querySelectorAll('.product-card, .j-card-item, [data-card-index]').forEach(card => {
          const name = card.querySelector('.goods-name, .j-name, [class*="name"]')?.textContent?.trim();
          const priceText = card.querySelector('.price-now, .j-price, [class*="price"]')?.textContent || '';
          const price = parseInt(priceText.replace(/\D/g, ''));
          
          if (name && price && price > 1000) {
            const link = card.querySelector('a')?.href;
            items.push({
              name: name.substring(0, 150),
              price: price,
              delivery: 0,
              seller: 'Wildberries',
              link: link,
              image: null
            });
          }
        });
        return items;
      });

      return products;

    } catch (error) {
      console.error('[Wildberries] Fallback ошибка:', error.message);
      return [];
    } finally {
      await browser.close();
    }
  }
}

module.exports = new WildberriesParser();
