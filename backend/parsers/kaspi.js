const puppeteer = require('puppeteer');

class KaspiParser {
  constructor() {
    this.baseUrl = 'https://kaspi.kz';
    this.searchUrl = 'https://kaspi.kz/shop/search/';
  }

  async search(query) {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--window-size=1920,1080'
      ]
    });

    try {
      const page = await browser.newPage();
      
      await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      );
      await page.setViewport({ width: 1920, height: 1080 });

      const searchUrl = `${this.searchUrl}?text=${encodeURIComponent(query)}`;
      console.log(`[Kaspi] Открываем: ${searchUrl}`);

      await page.goto(searchUrl, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });

      await this.waitForProducts(page);

      const products = await this.extractProducts(page);
      console.log(`[Kaspi] Найдено: ${products.length}`);
      
      return products;

    } catch (error) {
      console.error('[Kaspi] Ошибка:', error.message);
      return [];
    } finally {
      await browser.close();
    }
  }

  async waitForProducts(page) {
    const selectors = [
      '[data-test-id="product-card"]',
      '.product-card',
      '[data-product-id]',
      '.item-card',
      '.product-item',
      '.goods-tile'
    ];

    for (const selector of selectors) {
      try {
        await page.waitForSelector(selector, { timeout: 5000 });
        return selector;
      } catch {
        continue;
      }
    }
    
    await page.waitForTimeout(3000);
    return null;
  }

  async extractProducts(page) {
    return await page.evaluate(() => {
      const products = [];
      
      const cards = document.querySelectorAll([
        '[data-test-id="product-card"]',
        '.product-card',
        '[data-product-id]',
        '.item-card',
        '.product-item',
        '.goods-tile',
        '.product'
      ].join(', '));

      cards.forEach((card) => {
        try {
          const name = 
            card.querySelector('[data-test-id="product-title"]')?.textContent?.trim() ||
            card.querySelector('.product-card__title')?.textContent?.trim() ||
            card.querySelector('h3, .title, [data-test-id="product-name"]')?.textContent?.trim() ||
            card.querySelector('a span')?.textContent?.trim() ||
            'Без названия';

          const priceText = 
            card.querySelector('[data-test-id="product-price"]')?.textContent ||
            card.querySelector('.product-card__price')?.textContent ||
            card.querySelector('.price, [data-price]')?.textContent ||
            card.querySelector('[class*="price"]')?.textContent ||
            '';
          
          const priceMatch = priceText.replace(/\s/g, '').match(/(\d+)/);
          const price = priceMatch ? parseInt(priceMatch[1]) : null;

          const linkEl = card.querySelector('a[href]');
          let link = null;
          if (linkEl) {
            const href = linkEl.getAttribute('href');
            link = href?.startsWith('http') ? href : `https://kaspi.kz${href}`;
          }

          const imgEl = card.querySelector('img');
          const image = imgEl?.src || imgEl?.dataset?.src || null;

          const seller = 
            card.querySelector('[data-test-id="seller-name"]')?.textContent?.trim() ||
            card.querySelector('.seller-name')?.textContent?.trim() ||
            'Kaspi Shop';

          if (name && price && price > 1000) {
            products.push({
              name: name.substring(0, 150),
              price: price,
              delivery: 0,
              seller: seller,
              link: link,
              image: image
            });
          }
        } catch (e) {}
      });

      return products;
    });
  }
}

module.exports = new KaspiParser();
