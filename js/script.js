const productsDB = [
  /* ================= SMARTPHONES ================= */
  { name:"iPhone 15 Pro", marketplace:"Kaspi", seller:"Kaspi Official", price:629000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"iPhone 15 Pro", marketplace:"Wildberries", seller:"WB Store", price:615000, delivery:2000, term:"4 дня", url:"https://wildberries.kz" },
  { name:"iPhone 15 Pro", marketplace:"Ozon", seller:"Ozon Seller", price:610000, delivery:3000, term:"5 дней", url:"https://ozon.kz" },

  { name:"iPhone 14 Pro", marketplace:"Kaspi", seller:"Kaspi Official", price:575000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"iPhone 14 Pro", marketplace:"Ozon", seller:"Ozon Seller", price:560000, delivery:2500, term:"4 дня", url:"https://ozon.kz" },

  { name:"iPhone 14", marketplace:"Kaspi", seller:"Kaspi Store", price:420000, delivery:4000, term:"1-2 дня", url:"https://kaspi.kz" },
  { name:"iPhone 14", marketplace:"Technodom", seller:"Technodom", price:435000, delivery:0, term:"Самовывоз", url:"https://technodom.kz" },

  { name:"Samsung Galaxy S24", marketplace:"Sulpak", seller:"Sulpak", price:485000, delivery:6000, term:"2-3 дня", url:"https://sulpak.kz" },
  { name:"Samsung Galaxy S24", marketplace:"Ozon", seller:"Ozon Tech", price:478000, delivery:6500, term:"3-5 дней", url:"https://ozon.kz" },

  { name:"Samsung Galaxy S23", marketplace:"Kaspi", seller:"Samsung Store", price:540000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Samsung Galaxy S23", marketplace:"Ozon", seller:"Ozon", price:535000, delivery:2500, term:"3 дня", url:"https://ozon.kz" },
  { name:"Samsung Galaxy S23", marketplace:"Technodom", seller:"Technodom", price:548000, delivery:1500, term:"2 дня", url:"https://technodom.kz" },

  { name:"Samsung Galaxy A55", marketplace:"Kaspi", seller:"Mobile Market", price:210000, delivery:3500, term:"1-2 дня", url:"https://kaspi.kz" },
  { name:"Samsung Galaxy A55", marketplace:"Wildberries", seller:"WB Seller", price:205000, delivery:5000, term:"3-6 дней", url:"https://wildberries.kz" },

  { name:"Samsung Galaxy A54", marketplace:"Kaspi", seller:"Samsung Store", price:245000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Samsung Galaxy A54", marketplace:"Wildberries", seller:"WB Mobile", price:238000, delivery:2000, term:"4 дня", url:"https://wildberries.kz" },

  { name:"Xiaomi 13", marketplace:"Kaspi", seller:"Xiaomi Official", price:320000, delivery:4000, term:"1-3 дня", url:"https://kaspi.kz" },
  { name:"Xiaomi 13", marketplace:"Ozon", seller:"Ozon Xiaomi", price:315000, delivery:6000, term:"2-4 дня", url:"https://ozon.kz" },

  { name:"Xiaomi 13 Pro", marketplace:"Kaspi", seller:"Xiaomi Official", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Xiaomi 13 Pro", marketplace:"Ozon", seller:"Ozon", price:410000, delivery:3000, term:"5 дней", url:"https://ozon.kz" },

  /* ================= LAPTOPS ================= */
  { name:"MacBook Air M2", marketplace:"Kaspi", seller:"Apple Store", price:820000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"MacBook Air M2", marketplace:"Sulpak", seller:"Sulpak", price:835000, delivery:3000, term:"2 дня", url:"https://sulpak.kz" },
  { name:"MacBook Air M2", marketplace:"Ozon", seller:"Ozon Tech", price:810000, delivery:4000, term:"5 дней", url:"https://ozon.kz" },

  { name:"MacBook Pro M3", marketplace:"Kaspi", seller:"Apple Store", price:1150000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"MacBook Pro M3", marketplace:"Ozon", seller:"Ozon Tech", price:1135000, delivery:5000, term:"6 дней", url:"https://ozon.kz" },

  { name:"ASUS TUF Gaming F15", marketplace:"Kaspi", seller:"ASUS Official", price:520000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"ASUS TUF Gaming F15", marketplace:"Technodom", seller:"Technodom", price:535000, delivery:2000, term:"2 дня", url:"https://technodom.kz" },

  { name:"HP Pavilion 15", marketplace:"Kaspi", seller:"HP Store", price:390000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"HP Pavilion 15", marketplace:"Ozon", seller:"Ozon", price:380000, delivery:3000, term:"4 дня", url:"https://ozon.kz" },

  /* ================= AUDIO ================= */
  { name:"AirPods Pro 2", marketplace:"Kaspi", seller:"Apple Official", price:145000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"AirPods Pro 2", marketplace:"Wildberries", seller:"WB Audio", price:139000, delivery:1500, term:"3 дня", url:"https://wildberries.kz" },

  { name:"Sony WH-1000XM5", marketplace:"Kaspi", seller:"Sony Official", price:215000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Sony WH-1000XM5", marketplace:"Ozon", seller:"Ozon Audio", price:208000, delivery:2500, term:"4 дня", url:"https://ozon.kz" },

  /* ================= GAMING ================= */
  { name:"PlayStation 5", marketplace:"Kaspi", seller:"Sony Official", price:320000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"PlayStation 5", marketplace:"Technodom", seller:"Technodom", price:330000, delivery:2000, term:"2 дня", url:"https://technodom.kz" },
  { name:"PlayStation 5", marketplace:"Ozon", seller:"Ozon Games", price:315000, delivery:3500, term:"4 дня", url:"https://ozon.kz" },

  { name:"Xbox Series X", marketplace:"Kaspi", seller:"Microsoft Store", price:310000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Xbox Series X", marketplace:"Ozon", seller:"Ozon Games", price:305000, delivery:3000, term:"4 дня", url:"https://ozon.kz" }
];

/* ================= SEARCH LOGIC ================= */

function searchProducts() {
  const query = document.getElementById("productInput").value.toLowerCase().trim();
  const tbody = document.getElementById("results");
  tbody.innerHTML = "";

  if (!query) {
    alert("Введите название товара");
    return;
  }

  const selectedMarkets = Array.from(
    document.querySelectorAll(".marketplace:checked")
  ).map(el => el.value);

  const filtered = productsDB.filter(p =>
    p.name.toLowerCase().includes(query) &&
    selectedMarkets.includes(p.marketplace)
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:20px;color:#6b7280;">Ничего не найдено по запросу "${query}"</td></tr>`;
    return;
  }

  // Сортировка по итоговой цене (от дешевого к дорогому)
  filtered.sort((a, b) => (a.price + a.delivery) - (b.price + b.delivery));

  filtered.forEach((p, index) => {
    const total = p.price + p.delivery;
    const isBestPrice = index === 0;

    tbody.innerHTML += `
      <tr style="${isBestPrice ? 'background:#dcfce7;' : ''}">
        <td><strong>${p.name}</strong></td>
        <td>${p.marketplace}</td>
        <td>${p.seller}</td>
        <td>${p.price.toLocaleString()} ₸</td>
        <td>${p.delivery === 0 ? 'Бесплатно' : p.delivery.toLocaleString() + ' ₸'}</td>
        <td>${p.term}</td>
        <td style="color:${isBestPrice ? '#16a34a' : '#111827'};font-weight:700;">
          ${total.toLocaleString()} ₸
          ${isBestPrice ? ' <span style="background:#22c55e;color:white;padding:2px 8px;border-radius:12px;font-size:12px;">ЛУЧШАЯ ЦЕНА</span>' : ''}
        </td>
        <td><a href="${p.url}" target="_blank" style="display:inline-block;background:#2563eb;color:white;padding:8px 16px;border-radius:8px;text-decoration:none;font-weight:500;">Купить →</a></td>
      </tr>
    `;
  });
}

// Поиск по нажатию Enter
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("productInput");
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') searchProducts();
    });
  }
});
