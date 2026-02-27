const puppeteer = require('puppeteer');

class OzonParser {
  constructor() {
    this.baseUrl = 'https://www.ozon.kz';
  }

  async search(query) {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]
    });

    try {
      const page = await browser.newPage();
      
      await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      );
      await page.setViewport({ width: 1920, height: 1080 });

      const searchUrl = `${this.baseUrl}/search/?text=${encodeURIComponent(query)}&from_global=true`;
      console.log(`[Ozon] Открываем: ${searchUrl}`);

      await page.goto(searchUrl, { 
        waitUntil: 'networkidle2', 
        timeout: 30000 
      });

      await this.handleRegionPopup(page);

      await page.waitForSelector(
        '[data-widget="searchResultsV2"] .tile, .product-card, [data-testid="tile"], .tile-root, [data-testid="product-card"]', 
        { timeout: 10000 }
      ).catch(() => {});

      await page.waitForTimeout(2000);

      const products = await this.extractProducts(page);
      console.log(`[Ozon] Найдено: ${products.length}`);
      
      return products;

    } catch (error) {
      console.error('[Ozon] Ошибка:', error.message);
      return [];
    } finally {
      await browser.close();
    }
  }

  async handleRegionPopup(page) {
    try {
      const confirmBtn = await page.$('[data-testid="region-confirm"], .region-confirm, button:has-text("Алматы"), button:has-text("Подтвердить")');
      if (confirmBtn) {
        await confirmBtn.click();
        await page.waitForTimeout(1000);
      }
    } catch {}
  }

  async extractProducts(page) {
    return await page.evaluate(() => {
      const products = [];
      
      const tiles = document.querySelectorAll([
        '[data-widget="searchResultsV2"] .tile',
        '.product-card',
        '[data-testid="tile"]',
        '.tile-root',
        '[data-testid="product-card"]',
        '.tile'
      ].join(', '));

      tiles.forEach((tile) => {
        try {
          const name = 
            tile.querySelector('.tsBody500Medium, .tile-title, [data-testid="tile-title"]')?.textContent?.trim() ||
            tile.querySelector('span[class*="title"]')?.textContent?.trim() ||
            tile.querySelector('a span')?.textContent?.trim() ||
            'Без названия';

          const priceEl = 
            tile.querySelector('.tsHeadline500Medium, .tile-price, [data-testid="tile-price"]') ||
            tile.querySelector('[class*="price"]');
          const priceText = priceEl?.textContent || '';
          const price = parseInt(priceText.replace(/\D/g, '')) || null;

          const linkEl = tile.querySelector('a[href]');
          let link = null;
          if (linkEl) {
            const href = linkEl.getAttribute('href');
            link = href?.startsWith('http') ? href : `https://www.ozon.kz${href}`;
          }

          const imageEl = tile.querySelector('img');
          const image = imageEl?.src || imageEl?.dataset?.src || null;

          const deliveryText = 
            tile.querySelector('.tsBody400Small, [data-testid="delivery-info"]')?.textContent || '';
          const delivery = deliveryText.toLowerCase().includes('бесплатно') ? 0 : null;

          if (name && price && price > 1000) {
            products.push({
              name: name.substring(0, 150),
              price: price,
              delivery: delivery,
              seller: 'Ozon',
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

module.exports = new OzonParser();
