const productsDB = [
  /* ================= IPHONE ================= */
  { name:"iPhone 15 Pro", nameRu:["айфон 15 про", "айфон"], marketplace:"Kaspi", seller:"Kaspi Official", price:629000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"iPhone 15 Pro", nameRu:["айфон 15 про", "айфон"], marketplace:"Wildberries", seller:"WB Store", price:615000, delivery:2000, term:"4 дня", url:"https://wildberries.kz" },
  { name:"iPhone 15 Pro", nameRu:["айфон 15 про", "айфон"], marketplace:"Ozon", seller:"Ozon Seller", price:610000, delivery:3000, term:"5 дней", url:"https://ozon.kz" },

  { name:"iPhone 14 Pro", nameRu:["айфон 14 про", "айфон"], marketplace:"Kaspi", seller:"Kaspi Official", price:575000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"iPhone 14 Pro", nameRu:["айфон 14 про", "айфон"], marketplace:"Ozon", seller:"Ozon Seller", price:560000, delivery:2500, term:"4 дня", url:"https://ozon.kz" },

  { name:"iPhone 14", nameRu:["айфон 14", "айфон"], marketplace:"Kaspi", seller:"Kaspi Store", price:420000, delivery:4000, term:"1-2 дня", url:"https://kaspi.kz" },
  { name:"iPhone 14", nameRu:["айфон 14", "айфон"], marketplace:"Technodom", seller:"Technodom", price:435000, delivery:0, term:"Самовывоз", url:"https://technodom.kz" },

  /* ================= SAMSUNG ================= */
  { name:"Samsung Galaxy S24", nameRu:["самсунг галакси с24", "самсунг s24", "самсунг", "s24"], marketplace:"Sulpak", seller:"Sulpak", price:485000, delivery:6000, term:"2-3 дня", url:"https://sulpak.kz" },
  { name:"Samsung Galaxy S24", nameRu:["самсунг галакси с24", "самсунг s24", "самсунг", "s24"], marketplace:"Ozon", seller:"Ozon Tech", price:478000, delivery:6500, term:"3-5 дней", url:"https://ozon.kz" },

  { name:"Samsung Galaxy S23", nameRu:["самсунг галакси с23", "самсунг s23", "самсунг", "s23"], marketplace:"Kaspi", seller:"Samsung Store", price:540000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Samsung Galaxy S23", nameRu:["самсунг галакси с23", "самсунг s23", "самсунг", "s23"], marketplace:"Ozon", seller:"Ozon", price:535000, delivery:2500, term:"3 дня", url:"https://ozon.kz" },
  { name:"Samsung Galaxy S23", nameRu:["самсунг галакси с23", "самсунг s23", "самсунг", "s23"], marketplace:"Technodom", seller:"Technodom", price:548000, delivery:1500, term:"2 дня", url:"https://technodom.kz" },

  { name:"Samsung Galaxy A55", nameRu:["самсунг галакси а55", "самсунг a55", "самсунг", "a55"], marketplace:"Kaspi", seller:"Mobile Market", price:210000, delivery:3500, term:"1-2 дня", url:"https://kaspi.kz" },
  { name:"Samsung Galaxy A55", nameRu:["самсунг галакси а55", "самсунг a55", "самсунг", "a55"], marketplace:"Wildberries", seller:"WB Seller", price:205000, delivery:5000, term:"3-6 дней", url:"https://wildberries.kz" },

  { name:"Samsung Galaxy A54", nameRu:["самсунг галакси а54", "самсунг a54", "самсунг", "a54"], marketplace:"Kaspi", seller:"Samsung Store", price:245000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Samsung Galaxy A54", nameRu:["самсунг галакси а54", "самсунг a54", "самсунг", "a54"], marketplace:"Wildberries", seller:"WB Mobile", price:238000, delivery:2000, term:"4 дня", url:"https://wildberries.kz" },

  /* ================= XIAOMI ================= */
  { name:"Xiaomi 13", nameRu:["сяоми 13", "ксяоми 13", "сяоми", "ксяоми"], marketplace:"Kaspi", seller:"Xiaomi Official", price:320000, delivery:4000, term:"1-3 дня", url:"https://kaspi.kz" },
  { name:"Xiaomi 13", nameRu:["сяоми 13", "ксяоми 13", "сяоми", "ксяоми"], marketplace:"Ozon", seller:"Ozon Xiaomi", price:315000, delivery:6000, term:"2-4 дня", url:"https://ozon.kz" },

  { name:"Xiaomi 13 Pro", nameRu:["сяоми 13 про", "ксяоми 13 про", "сяоми", "ксяоми"], marketplace:"Kaspi", seller:"Xiaomi Official", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Xiaomi 13 Pro", nameRu:["сяоми 13 про", "ксяоми 13 про", "сяоми", "ксяоми"], marketplace:"Ozon", seller:"Ozon", price:410000, delivery:3000, term:"5 дней", url:"https://ozon.kz" },

  /* ================= MACBOOK ================= */
  { name:"MacBook Air M2", nameRu:["макбук эйр м2", "макбук air m2", "макбук", "macbook"], marketplace:"Kaspi", seller:"Apple Store", price:820000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"MacBook Air M2", nameRu:["макбук эйр м2", "макбук air m2", "макбук", "macbook"], marketplace:"Sulpak", seller:"Sulpak", price:835000, delivery:3000, term:"2 дня", url:"https://sulpak.kz" },
  { name:"MacBook Air M2", nameRu:["макбук эйр м2", "макбук air m2", "макбук", "macbook"], marketplace:"Ozon", seller:"Ozon Tech", price:810000, delivery:4000, term:"5 дней", url:"https://ozon.kz" },

  { name:"MacBook Pro M3", nameRu:["макбук про м3", "макбук pro m3", "макбук", "macbook"], marketplace:"Kaspi", seller:"Apple Store", price:1150000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"MacBook Pro M3", nameRu:["макбук про м3", "макбук pro m3", "макбук", "macbook"], marketplace:"Ozon", seller:"Ozon Tech", price:1135000, delivery:5000, term:"6 дней", url:"https://ozon.kz" },

  /* ================= ASUS ================= */
  { name:"ASUS TUF Gaming F15", nameRu:["асус туф гейминг", "асус", "asus tuf", "asus"], marketplace:"Kaspi", seller:"ASUS Official", price:520000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"ASUS TUF Gaming F15", nameRu:["асус туф гейминг", "асус", "asus tuf", "asus"], marketplace:"Technodom", seller:"Technodom", price:535000, delivery:2000, term:"2 дня", url:"https://technodom.kz" },

  /* ================= HP ================= */
  { name:"HP Pavilion 15", nameRu:["хп павилион", "эйчпи", "hp pavilion", "hp"], marketplace:"Kaspi", seller:"HP Store", price:390000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"HP Pavilion 15", nameRu:["хп павилион", "эйчпи", "hp pavilion", "hp"], marketplace:"Ozon", seller:"Ozon", price:380000, delivery:3000, term:"4 дня", url:"https://ozon.kz" },

  /* ================= AUDIO ================= */
  { name:"AirPods Pro 2", nameRu:["эрподс про", "эирподс", "airpods"], marketplace:"Kaspi", seller:"Apple Official", price:145000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"AirPods Pro 2", nameRu:["эрподс про", "эирподс", "airpods"], marketplace:"Wildberries", seller:"WB Audio", price:139000, delivery:1500, term:"3 дня", url:"https://wildberries.kz" },

  { name:"Sony WH-1000XM5", nameRu:["сони", "соня", "sony", "вх1000"], marketplace:"Kaspi", seller:"Sony Official", price:215000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Sony WH-1000XM5", nameRu:["сони", "соня", "sony", "вх1000"], marketplace:"Ozon", seller:"Ozon Audio", price:208000, delivery:2500, term:"4 дня", url:"https://ozon.kz" },

  /* ================= GAMING ================= */
  { name:"PlayStation 5", nameRu:["плейстейшн 5", "пс5", "ps5"], marketplace:"Kaspi", seller:"Sony Official", price:320000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"PlayStation 5", nameRu:["плейстейшн 5", "пс5", "ps5"], marketplace:"Technodom", seller:"Technodom", price:330000, delivery:2000, term:"2 дня", url:"https://technodom.kz" },
  { name:"PlayStation 5", nameRu:["плейстейшн 5", "пс5", "ps5"], marketplace:"Ozon", seller:"Ozon Games", price:315000, delivery:3500, term:"4 дня", url:"https://ozon.kz" },

  { name:"Xbox Series X", nameRu:["иксбокс", "xbox", "икс бокс"], marketplace:"Kaspi", seller:"Microsoft Store", price:310000, delivery:0, term:"1 день", url:"https://kaspi.kz" },
  { name:"Xbox Series X", nameRu:["иксбокс", "xbox", "икс бокс"], marketplace:"Ozon", seller:"Ozon Games", price:305000, delivery:3000, term:"4 дня", url:"https://ozon.kz" }
];

/* ================= SEARCH LOGIC ================= */

function normalize(text) {
  return text.toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[ъь]/g, "")
    .trim();
}

function searchProducts() {
  const rawQuery = document.getElementById("productInput").value.trim();
  const query = normalize(rawQuery);
  const tbody = document.getElementById("results");
  tbody.innerHTML = "";

  if (!query) {
    alert("Введите название товара");
    return;
  }

  const selectedMarkets = Array.from(
    document.querySelectorAll(".marketplace:checked")
  ).map(el => el.value);

  // Поиск по английскому названию и массиву русских названий
  const filtered = productsDB.filter(p => {
    // Поиск по английскому названию
    const nameEn = normalize(p.name);
    if (nameEn.includes(query)) return true;
    
    // Поиск по массиву русских названий
    return p.nameRu.some(ruName => normalize(ruName).includes(query));
  }).filter(p => selectedMarkets.includes(p.marketplace));

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:20px;color:#6b7280;">
      Ничего не найдено по запросу "${rawQuery}"<br>
      <small>Попробуйте: айфон, самсунг, сяоми, макбук, пс5, сони, асус, хп</small>
    </td></tr>`;
    return;
  }

  // Сортировка по итоговой цене
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
