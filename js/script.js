const productsDB = [
  /* ================= SMARTPHONES ================= */
  // iPhone
  { name:"iPhone 15 Pro Max", nameRu:["айфон 15 про макс", "айфон 15 pro max", "айфон"], marketplace:"Kaspi", seller:"Apple Store KZ", price:780000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPhone 15 Pro Max", nameRu:["айфон 15 про макс", "айфон 15 pro max", "айфон"], marketplace:"Wildberries", seller:"WB Apple", price:765000, delivery:2500, term:"3 дня", url:"https://wildberries.kz " },
  { name:"iPhone 15 Pro Max", nameRu:["айфон 15 про макс", "айфон 15 pro max", "айфон"], marketplace:"Ozon", seller:"Ozon Apple", price:770000, delivery:3000, term:"4 дня", url:"https://ozon.kz " },
  
  { name:"iPhone 15 Pro", nameRu:["айфон 15 про", "айфон 15 pro", "айфон"], marketplace:"Kaspi", seller:"Kaspi Official", price:629000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPhone 15 Pro", nameRu:["айфон 15 про", "айфон 15 pro", "айфон"], marketplace:"Wildberries", seller:"WB Store", price:615000, delivery:2000, term:"4 дня", url:"https://wildberries.kz " },
  { name:"iPhone 15 Pro", nameRu:["айфон 15 про", "айфон 15 pro", "айфон"], marketplace:"Ozon", seller:"Ozon Seller", price:610000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },
  { name:"iPhone 15 Pro", nameRu:["айфон 15 про", "айфон 15 pro", "айфон"], marketplace:"Technodom", seller:"Technodom", price:635000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"iPhone 15", nameRu:["айфон 15", "айфон"], marketplace:"Kaspi", seller:"Kaspi Store", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPhone 15", nameRu:["айфон 15", "айфон"], marketplace:"Wildberries", seller:"WB Mobile", price:470000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },
  { name:"iPhone 15", nameRu:["айфон 15", "айфон"], marketplace:"Ozon", seller:"Ozon Mobile", price:475000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  { name:"iPhone 14 Pro Max", nameRu:["айфон 14 про макс", "айфон 14 pro max", "айфон"], marketplace:"Kaspi", seller:"Apple Store", price:720000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPhone 14 Pro Max", nameRu:["айфон 14 про макс", "айфон 14 pro max", "айфон"], marketplace:"Ozon", seller:"Ozon", price:695000, delivery:3500, term:"5 дней", url:"https://ozon.kz " },

  { name:"iPhone 14 Pro", nameRu:["айфон 14 про", "айфон 14 pro", "айфон"], marketplace:"Kaspi", seller:"Kaspi Official", price:575000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPhone 14 Pro", nameRu:["айфон 14 про", "айфон 14 pro", "айфон"], marketplace:"Ozon", seller:"Ozon Seller", price:560000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },
  { name:"iPhone 14 Pro", nameRu:["айфон 14 про", "айфон 14 pro", "айфон"], marketplace:"Sulpak", seller:"Sulpak", price:590000, delivery:2000, term:"2 дня", url:"https://sulpak.kz " },

  { name:"iPhone 14", nameRu:["айфон 14", "айфон"], marketplace:"Kaspi", seller:"Kaspi Store", price:420000, delivery:4000, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"iPhone 14", nameRu:["айфон 14", "айфон"], marketplace:"Technodom", seller:"Technodom", price:435000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },
  { name:"iPhone 14", nameRu:["айфон 14", "айфон"], marketplace:"Wildberries", seller:"WB Official", price:410000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  { name:"iPhone 13", nameRu:["айфон 13", "айфон"], marketplace:"Kaspi", seller:"Apple Store", price:350000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPhone 13", nameRu:["айфон 13", "айфон"], marketplace:"Ozon", seller:"Ozon", price:335000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"iPhone SE 2022", nameRu:["айфон се", "айфон se", "айфон"], marketplace:"Kaspi", seller:"Kaspi", price:280000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPhone SE 2022", nameRu:["айфон се", "айфон se", "айфон"], marketplace:"Wildberries", seller:"WB", price:265000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  // Samsung
  { name:"Samsung Galaxy S24 Ultra", nameRu:["самсунг с24 ультра", "самсунг s24 ultra", "самсунг"], marketplace:"Kaspi", seller:"Samsung Official", price:890000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy S24 Ultra", nameRu:["самсунг с24 ультра", "самсунг s24 ultra", "самсунг"], marketplace:"Ozon", seller:"Ozon", price:865000, delivery:4000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Samsung Galaxy S24+", nameRu:["самсунг с24 плюс", "самсунг s24 plus", "самсунг"], marketplace:"Kaspi", seller:"Samsung Store", price:720000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy S24+", nameRu:["самсунг с24 плюс", "самсунг s24 plus", "самсунг"], marketplace:"Technodom", seller:"Technodom", price:735000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Samsung Galaxy S24", nameRu:["самсунг с24", "самсунг s24", "самсунг"], marketplace:"Sulpak", seller:"Sulpak", price:485000, delivery:6000, term:"2-3 дня", url:"https://sulpak.kz " },
  { name:"Samsung Galaxy S24", nameRu:["самсунг с24", "самсунг s24", "самсунг"], marketplace:"Ozon", seller:"Ozon Tech", price:478000, delivery:6500, term:"3-5 дней", url:"https://ozon.kz " },
  { name:"Samsung Galaxy S24", nameRu:["самсунг с24", "самсунг s24", "самсунг"], marketplace:"Kaspi", seller:"Mobile Store", price:490000, delivery:0, term:"1 день", url:"https://kaspi.kz " },

  { name:"Samsung Galaxy S23 Ultra", nameRu:["самсунг с23 ультра", "самсунг s23 ultra", "самсунг"], marketplace:"Kaspi", seller:"Samsung Store", price:750000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy S23 Ultra", nameRu:["самсунг с23 ультра", "самсунг s23 ultra", "самсунг"], marketplace:"Wildberries", seller:"WB Samsung", price:720000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Samsung Galaxy S23", nameRu:["самсунг с23", "самсунг s23", "самсунг"], marketplace:"Kaspi", seller:"Samsung Store", price:540000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy S23", nameRu:["самсунг с23", "самсунг s23", "самсунг"], marketplace:"Ozon", seller:"Ozon", price:535000, delivery:2500, term:"3 дня", url:"https://ozon.kz " },
  { name:"Samsung Galaxy S23", nameRu:["самсунг с23", "самсунг s23", "самсунг"], marketplace:"Technodom", seller:"Technodom", price:548000, delivery:1500, term:"2 дня", url:"https://technodom.kz " },

  { name:"Samsung Galaxy Z Fold 5", nameRu:["самсунг фолд 5", "самсунг fold 5", "самсунг"], marketplace:"Kaspi", seller:"Samsung Premium", price:1200000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Z Fold 5", nameRu:["самсунг фолд 5", "самсунг fold 5", "самсунг"], marketplace:"Ozon", seller:"Ozon Premium", price:1150000, delivery:5000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Samsung Galaxy Z Flip 5", nameRu:["самсунг флип 5", "самсунг flip 5", "самсунг"], marketplace:"Kaspi", seller:"Samsung Store", price:680000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Z Flip 5", nameRu:["самсунг флип 5", "самсунг flip 5", "самсунг"], marketplace:"Wildberries", seller:"WB Mobile", price:650000, delivery:2500, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Samsung Galaxy A55", nameRu:["самсунг а55", "самсунг a55", "самсунг"], marketplace:"Kaspi", seller:"Mobile Market", price:210000, delivery:3500, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy A55", nameRu:["самсунг а55", "самсунг a55", "самсунг"], marketplace:"Wildberries", seller:"WB Seller", price:205000, delivery:5000, term:"3-6 дней", url:"https://wildberries.kz " },
  { name:"Samsung Galaxy A55", nameRu:["самсунг а55", "самсунг a55", "самсунг"], marketplace:"Ozon", seller:"Ozon Mobile", price:208000, delivery:4000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Samsung Galaxy A54", nameRu:["самсунг а54", "самсунг a54", "самсунг"], marketplace:"Kaspi", seller:"Samsung Store", price:245000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy A54", nameRu:["самсунг а54", "самсунг a54", "самсунг"], marketplace:"Wildberries", seller:"WB Mobile", price:238000, delivery:2000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Samsung Galaxy A34", nameRu:["самсунг а34", "самсунг a34", "самсунг"], marketplace:"Kaspi", seller:"Samsung", price:175000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy A34", nameRu:["самсунг а34", "самсунг a34", "самсунг"], marketplace:"Ozon", seller:"Ozon", price:168000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  // Xiaomi
  { name:"Xiaomi 14 Ultra", nameRu:["сяоми 14 ультра", "ксяоми 14 ultra", "сяоми"], marketplace:"Kaspi", seller:"Xiaomi Store", price:650000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi 14 Ultra", nameRu:["сяоми 14 ультра", "ксяоми 14 ultra", "сяоми"], marketplace:"Ozon", seller:"Ozon", price:620000, delivery:4000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Xiaomi 14", nameRu:["сяоми 14", "ксяоми 14", "сяоми"], marketplace:"Kaspi", seller:"Xiaomi Official", price:480000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi 14", nameRu:["сяоми 14", "ксяоми 14", "сяоми"], marketplace:"Wildberries", seller:"WB Xiaomi", price:465000, delivery:2500, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Xiaomi 13 Pro", nameRu:["сяоми 13 про", "ксяоми 13 pro", "сяоми"], marketplace:"Kaspi", seller:"Xiaomi Official", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi 13 Pro", nameRu:["сяоми 13 про", "ксяоми 13 pro", "сяоми"], marketplace:"Ozon", seller:"Ozon", price:410000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Xiaomi 13", nameRu:["сяоми 13", "ксяоми 13", "сяоми"], marketplace:"Kaspi", seller:"Xiaomi Official", price:320000, delivery:4000, term:"1-3 дня", url:"https://kaspi.kz " },
  { name:"Xiaomi 13", nameRu:["сяоми 13", "ксяоми 13", "сяоми"], marketplace:"Ozon", seller:"Ozon Xiaomi", price:315000, delivery:6000, term:"2-4 дня", url:"https://ozon.kz " },

  { name:"Xiaomi Redmi Note 13 Pro+", nameRu:["редми нот 13 про плюс", "redmi note 13 pro plus", "сяоми", "редми"], marketplace:"Kaspi", seller:"Xiaomi Store", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Redmi Note 13 Pro+", nameRu:["редми нот 13 про плюс", "redmi note 13 pro plus", "сяоми", "редми"], marketplace:"Wildberries", seller:"WB", price:175000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  { name:"Xiaomi Redmi Note 13 Pro", nameRu:["редми нот 13 про", "redmi note 13 pro", "сяоми", "редми"], marketplace:"Kaspi", seller:"Xiaomi", price:145000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Redmi Note 13 Pro", nameRu:["редми нот 13 про", "redmi note 13 pro", "сяоми", "редми"], marketplace:"Ozon", seller:"Ozon", price:138000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  { name:"Xiaomi Redmi 13C", nameRu:["редми 13с", "redmi 13c", "сяоми", "редми"], marketplace:"Kaspi", seller:"Mobile Shop", price:75000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Redmi 13C", nameRu:["редми 13с", "redmi 13c", "сяоми", "редми"], marketplace:"Wildberries", seller:"WB Budget", price:68000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  // Poco
  { name:"Poco X6 Pro", nameRu:["поко х6 про", "poco x6 pro", "поко", "poco"], marketplace:"Kaspi", seller:"Poco Store", price:165000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Poco X6 Pro", nameRu:["поко х6 про", "poco x6 pro", "поко", "poco"], marketplace:"Ozon", seller:"Ozon", price:158000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  { name:"Poco M6 Pro", nameRu:["поко м6 про", "poco m6 pro", "поко", "poco"], marketplace:"Kaspi", seller:"Poco", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Poco M6 Pro", nameRu:["поко м6 про", "poco m6 pro", "поко", "poco"], marketplace:"Wildberries", seller:"WB", price:118000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // Realme
  { name:"Realme GT 5 Pro", nameRu:["рилми гт 5 про", "realme gt 5 pro", "рилми", "realme"], marketplace:"Kaspi", seller:"Realme Store", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Realme GT 5 Pro", nameRu:["рилми гт 5 про", "realme gt 5 pro", "рилми", "realme"], marketplace:"Ozon", seller:"Ozon", price:405000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Realme 12 Pro+", nameRu:["рилми 12 про плюс", "realme 12 pro plus", "рилми", "realme"], marketplace:"Kaspi", seller:"Realme", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Realme 12 Pro+", nameRu:["рилми 12 про плюс", "realme 12 pro plus", "рилми", "realme"], marketplace:"Wildberries", seller:"WB", price:175000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // OnePlus
  { name:"OnePlus 12", nameRu:["ванплюс 12", "oneplus 12", "ванплюс"], marketplace:"Kaspi", seller:"OnePlus Store", price:580000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"OnePlus 12", nameRu:["ванплюс 12", "oneplus 12", "ванплюс"], marketplace:"Ozon", seller:"Ozon", price:560000, delivery:3500, term:"5 дней", url:"https://ozon.kz " },

  { name:"OnePlus 11", nameRu:["ванплюс 11", "oneplus 11", "ванплюс"], marketplace:"Kaspi", seller:"OnePlus", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"OnePlus 11", nameRu:["ванплюс 11", "oneplus 11", "ванплюс"], marketplace:"Technodom", seller:"Technodom", price:435000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Google Pixel
  { name:"Google Pixel 8 Pro", nameRu:["пиксель 8 про", "google pixel 8 pro", "пиксель", "pixel"], marketplace:"Kaspi", seller:"Pixel Store", price:520000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Google Pixel 8 Pro", nameRu:["пиксель 8 про", "google pixel 8 pro", "пиксель", "pixel"], marketplace:"Ozon", seller:"Ozon Import", price:495000, delivery:4000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Google Pixel 8", nameRu:["пиксель 8", "google pixel 8", "пиксель", "pixel"], marketplace:"Kaspi", seller:"Pixel", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Google Pixel 8", nameRu:["пиксель 8", "google pixel 8", "пиксель", "pixel"], marketplace:"Wildberries", seller:"WB Import", price:395000, delivery:3000, term:"5 дней", url:"https://wildberries.kz " },

  // Honor
  { name:"Honor Magic 6 Pro", nameRu:["хонор мэджик 6 про", "honor magic 6 pro", "хонор"], marketplace:"Kaspi", seller:"Honor Store", price:480000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Honor Magic 6 Pro", nameRu:["хонор мэджик 6 про", "honor magic 6 pro", "хонор"], marketplace:"Ozon", seller:"Ozon", price:465000, delivery:3000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Honor 90", nameRu:["хонор 90", "honor 90", "хонор"], marketplace:"Kaspi", seller:"Honor", price:195000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Honor 90", nameRu:["хонор 90", "honor 90", "хонор"], marketplace:"Wildberries", seller:"WB", price:185000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // Nothing
  { name:"Nothing Phone 2", nameRu:["нафинг фон 2", "nothing phone 2", "нафинг"], marketplace:"Kaspi", seller:"Nothing Store", price:380000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Nothing Phone 2", nameRu:["нафинг фон 2", "nothing phone 2", "нафинг"], marketplace:"Ozon", seller:"Ozon", price:365000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  /* ================= LAPTOPS ================= */
  // MacBook
  { name:"MacBook Pro 16 M3 Max", nameRu:["макбук про 16 м3 макс", "macbook pro 16 m3 max", "макбук"], marketplace:"Kaspi", seller:"Apple Premium", price:1850000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"MacBook Pro 16 M3 Max", nameRu:["макбук про 16 м3 макс", "macbook pro 16 m3 max", "макбук"], marketplace:"Ozon", seller:"Ozon Apple", price:1780000, delivery:8000, term:"6 дней", url:"https://ozon.kz " },

  { name:"MacBook Pro 14 M3 Pro", nameRu:["макбук про 14 м3 про", "macbook pro 14 m3 pro", "макбук"], marketplace:"Kaspi", seller:"Apple Store", price:1450000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"MacBook Pro 14 M3 Pro", nameRu:["макбук про 14 м3 про", "macbook pro 14 m3 pro", "макбук"], marketplace:"Sulpak", seller:"Sulpak", price:1480000, delivery:3000, term:"2 дня", url:"https://sulpak.kz " },

  { name:"MacBook Pro 14 M3", nameRu:["макбук про 14 м3", "macbook pro 14 m3", "макбук"], marketplace:"Kaspi", seller:"Apple Store", price:1150000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"MacBook Pro 14 M3", nameRu:["макбук про 14 м3", "macbook pro 14 m3", "макбук"], marketplace:"Ozon", seller:"Ozon Tech", price:1135000, delivery:5000, term:"6 дней", url:"https://ozon.kz " },

  { name:"MacBook Air 15 M3", nameRu:["макбук эйр 15 м3", "macbook air 15 m3", "макбук"], marketplace:"Kaspi", seller:"Apple Store", price:980000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"MacBook Air 15 M3", nameRu:["макбук эйр 15 м3", "macbook air 15 m3", "макбук"], marketplace:"Technodom", seller:"Technodom", price:995000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"MacBook Air 13 M3", nameRu:["макбук эйр 13 м3", "macbook air 13 m3", "макбук"], marketplace:"Kaspi", seller:"Apple Store", price:880000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"MacBook Air 13 M3", nameRu:["макбук эйр 13 м3", "macbook air 13 m3", "макбук"], marketplace:"Wildberries", seller:"WB Apple", price:865000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"MacBook Air M2", nameRu:["макбук эйр м2", "macbook air m2", "макбук"], marketplace:"Kaspi", seller:"Apple Store", price:820000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"MacBook Air M2", nameRu:["макбук эйр м2", "macbook air m2", "макбук"], marketplace:"Sulpak", seller:"Sulpak", price:835000, delivery:3000, term:"2 дня", url:"https://sulpak.kz " },
  { name:"MacBook Air M2", nameRu:["макбук эйр м2", "macbook air m2", "макбук"], marketplace:"Ozon", seller:"Ozon Tech", price:810000, delivery:4000, term:"5 дней", url:"https://ozon.kz " },

  // ASUS
  { name:"ASUS ROG Zephyrus G14", nameRu:["асус рог зефирус", "asus rog zephyrus g14", "асус"], marketplace:"Kaspi", seller:"ASUS Gaming", price:1200000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"ASUS ROG Zephyrus G14", nameRu:["асус рог зефирус", "asus rog zephyrus g14", "асус"], marketplace:"Technodom", seller:"Technodom", price:1235000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"ASUS ROG Strix G16", nameRu:["асус рог стрикс", "asus rog strix g16", "асус"], marketplace:"Kaspi", seller:"ASUS Store", price:950000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"ASUS ROG Strix G16", nameRu:["асус рог стрикс", "asus rog strix g16", "асус"], marketplace:"Ozon", seller:"Ozon Gaming", price:920000, delivery:5000, term:"5 дней", url:"https://ozon.kz " },

  { name:"ASUS TUF Gaming F15", nameRu:["асус туф гейминг", "asus tuf gaming f15", "асус"], marketplace:"Kaspi", seller:"ASUS Official", price:520000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"ASUS TUF Gaming F15", nameRu:["асус туф гейминг", "asus tuf gaming f15", "асус"], marketplace:"Technodom", seller:"Technodom", price:535000, delivery:2000, term:"2 дня", url:"https://technodom.kz " },

  { name:"ASUS VivoBook Pro 15", nameRu:["асус вивобук про", "asus vivobook pro 15", "асус"], marketplace:"Kaspi", seller:"ASUS", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"ASUS VivoBook Pro 15", nameRu:["асус вивобук про", "asus vivobook pro 15", "асус"], marketplace:"Wildberries", seller:"WB", price:465000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"ASUS ZenBook 14", nameRu:["асус зенбук", "asus zenbook 14", "асус"], marketplace:"Kaspi", seller:"ASUS Store", price:620000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"ASUS ZenBook 14", nameRu:["асус зенбук", "asus zenbook 14", "асус"], marketplace:"Sulpak", seller:"Sulpak", price:635000, delivery:2000, term:"2 дня", url:"https://sulpak.kz " },

  // Lenovo
  { name:"Lenovo Legion Pro 7", nameRu:["леново легион про 7", "lenovo legion pro 7", "леново"], marketplace:"Kaspi", seller:"Lenovo Gaming", price:1350000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Lenovo Legion Pro 7", nameRu:["леново легион про 7", "lenovo legion pro 7", "леново"], marketplace:"Ozon", seller:"Ozon", price:1290000, delivery:6000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Lenovo Legion 5 Pro", nameRu:["леново легион 5 про", "lenovo legion 5 pro", "леново"], marketplace:"Kaspi", seller:"Lenovo", price:890000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Lenovo Legion 5 Pro", nameRu:["леново легион 5 про", "lenovo legion 5 pro", "леново"], marketplace:"Technodom", seller:"Technodom", price:915000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Lenovo ThinkPad X1 Carbon", nameRu:["леново тинкпад", "lenovo thinkpad x1 carbon", "леново"], marketplace:"Kaspi", seller:"Lenovo Business", price:1450000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Lenovo ThinkPad X1 Carbon", nameRu:["леново тинкпад", "lenovo thinkpad x1 carbon", "леново"], marketplace:"Ozon", seller:"Ozon", price:1380000, delivery:5000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Lenovo IdeaPad Gaming 3", nameRu:["леново идеапад гейминг", "lenovo ideapad gaming 3", "леново"], marketplace:"Kaspi", seller:"Lenovo", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Lenovo IdeaPad Gaming 3", nameRu:["леново идеапад гейминг", "lenovo ideapad gaming 3", "леново"], marketplace:"Wildberries", seller:"WB", price:395000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  // HP
  { name:"HP Omen 16", nameRu:["хп омен 16", "hp omen 16", "хп"], marketplace:"Kaspi", seller:"HP Gaming", price:980000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"HP Omen 16", nameRu:["хп омен 16", "hp omen 16", "хп"], marketplace:"Ozon", seller:"Ozon", price:945000, delivery:5000, term:"5 дней", url:"https://ozon.kz " },

  { name:"HP Victus 16", nameRu:["хп виктус 16", "hp victus 16", "хп"], marketplace:"Kaspi", seller:"HP Store", price:520000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"HP Victus 16", nameRu:["хп виктус 16", "hp victus 16", "хп"], marketplace:"Technodom", seller:"Technodom", price:535000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"HP Pavilion 15", nameRu:["хп павилион 15", "hp pavilion 15", "хп"], marketplace:"Kaspi", seller:"HP Store", price:390000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"HP Pavilion 15", nameRu:["хп павилион 15", "hp pavilion 15", "хп"], marketplace:"Ozon", seller:"Ozon", price:380000, delivery:3000, term:"4 дня", url:"https://ozon.kz " },

  { name:"HP Spectre x360", nameRu:["хп спектре", "hp spectre x360", "хп"], marketplace:"Kaspi", seller:"HP Premium", price:850000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"HP Spectre x360", nameRu:["хп спектре", "hp spectre x360", "хп"], marketplace:"Sulpak", seller:"Sulpak", price:875000, delivery:2000, term:"2 дня", url:"https://sulpak.kz " },

  // Dell
  { name:"Dell XPS 15", nameRu:["делл хпс 15", "dell xps 15", "делл"], marketplace:"Kaspi", seller:"Dell Store", price:1250000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Dell XPS 15", nameRu:["делл хпс 15", "dell xps 15", "делл"], marketplace:"Ozon", seller:"Ozon", price:1190000, delivery:6000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Dell Alienware m16", nameRu:["делл алинваре", "dell alienware m16", "делл"], marketplace:"Kaspi", seller:"Dell Gaming", price:1650000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Dell Alienware m16", nameRu:["делл алинваре", "dell alienware m16", "делл"], marketplace:"Technodom", seller:"Technodom", price:1690000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Dell Inspiron 16", nameRu:["делл инспирон 16", "dell inspiron 16", "делл"], marketplace:"Kaspi", seller:"Dell", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Dell Inspiron 16", nameRu:["делл инспирон 16", "dell inspiron 16", "делл"], marketplace:"Wildberries", seller:"WB", price:395000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  // MSI
  { name:"MSI Raider GE78", nameRu:["мси райдер", "msi raider ge78", "мси"], marketplace:"Kaspi", seller:"MSI Gaming", price:1850000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"MSI Raider GE78", nameRu:["мси райдер", "msi raider ge78", "мси"], marketplace:"Ozon", seller:"Ozon", price:1790000, delivery:7000, term:"6 дней", url:"https://ozon.kz " },

  { name:"MSI Katana 15", nameRu:["мси катана 15", "msi katana 15", "мси"], marketplace:"Kaspi", seller:"MSI Store", price:580000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"MSI Katana 15", nameRu:["мси катана 15", "msi katana 15", "мси"], marketplace:"Technodom", seller:"Technodom", price:595000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Acer
  { name:"Acer Predator Helios 16", nameRu:["асер предатор", "acer predator helios 16", "асер"], marketplace:"Kaspi", seller:"Acer Gaming", price:1150000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Acer Predator Helios 16", nameRu:["асер предатор", "acer predator helios 16", "асер"], marketplace:"Ozon", seller:"Ozon", price:1100000, delivery:5000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Acer Nitro 5", nameRu:["асер нитро 5", "acer nitro 5", "асер"], marketplace:"Kaspi", seller:"Acer Store", price:480000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Acer Nitro 5", nameRu:["асер нитро 5", "acer nitro 5", "асер"], marketplace:"Wildberries", seller:"WB", price:455000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  // Razer
  { name:"Razer Blade 16", nameRu:["рейзер блейд 16", "razer blade 16", "рейзер"], marketplace:"Kaspi", seller:"Razer Store", price:2100000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Razer Blade 16", nameRu:["рейзер блейд 16", "razer blade 16", "рейзер"], marketplace:"Ozon", seller:"Ozon Import", price:1990000, delivery:8000, term:"7 дней", url:"https://ozon.kz " },

  /* ================= TABLETS ================= */
  // iPad
  { name:"iPad Pro 12.9 M2", nameRu:["айпад про 12.9", "ipad pro 12.9", "айпад"], marketplace:"Kaspi", seller:"Apple Store", price:890000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPad Pro 12.9 M2", nameRu:["айпад про 12.9", "ipad pro 12.9", "айпад"], marketplace:"Ozon", seller:"Ozon", price:865000, delivery:4000, term:"5 дней", url:"https://ozon.kz " },

  { name:"iPad Pro 11 M2", nameRu:["айпад про 11", "ipad pro 11", "айпад"], marketplace:"Kaspi", seller:"Apple", price:720000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPad Pro 11 M2", nameRu:["айпад про 11", "ipad pro 11", "айпад"], marketplace:"Wildberries", seller:"WB", price:695000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"iPad Air 5", nameRu:["айпад эйр 5", "ipad air 5", "айпад"], marketplace:"Kaspi", seller:"Apple Store", price:520000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPad Air 5", nameRu:["айпад эйр 5", "ipad air 5", "айпад"], marketplace:"Technodom", seller:"Technodom", price:535000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"iPad 10", nameRu:["айпад 10", "ipad 10", "айпад"], marketplace:"Kaspi", seller:"Apple", price:385000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPad 10", nameRu:["айпад 10", "ipad 10", "айпад"], marketplace:"Ozon", seller:"Ozon", price:375000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  { name:"iPad mini 6", nameRu:["айпад мини 6", "ipad mini 6", "айпад"], marketplace:"Kaspi", seller:"Apple Store", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"iPad mini 6", nameRu:["айпад мини 6", "ipad mini 6", "айпад"], marketplace:"Sulpak", seller:"Sulpak", price:435000, delivery:2000, term:"2 дня", url:"https://sulpak.kz " },

  // Samsung Tablet
  { name:"Samsung Galaxy Tab S9 Ultra", nameRu:["самсунг таб с9 ультра", "samsung galaxy tab s9 ultra", "планшет"], marketplace:"Kaspi", seller:"Samsung Store", price:780000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Tab S9 Ultra", nameRu:["самсунг таб с9 ультра", "samsung galaxy tab s9 ultra", "планшет"], marketplace:"Ozon", seller:"Ozon", price:755000, delivery:4000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Samsung Galaxy Tab S9+", nameRu:["самсунг таб с9 плюс", "samsung galaxy tab s9 plus", "планшет"], marketplace:"Kaspi", seller:"Samsung", price:620000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Tab S9+", nameRu:["самсунг таб с9 плюс", "samsung galaxy tab s9 plus", "планшет"], marketplace:"Technodom", seller:"Technodom", price:635000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Samsung Galaxy Tab A9+", nameRu:["самсунг таб а9 плюс", "samsung galaxy tab a9 plus", "планшет"], marketplace:"Kaspi", seller:"Samsung", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Tab A9+", nameRu:["самсунг таб а9 плюс", "samsung galaxy tab a9 plus", "планшет"], marketplace:"Wildberries", seller:"WB", price:175000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // Xiaomi Tablet
  { name:"Xiaomi Pad 6 Pro", nameRu:["сяоми пад 6 про", "xiaomi pad 6 pro", "планшет"], marketplace:"Kaspi", seller:"Xiaomi Store", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Pad 6 Pro", nameRu:["сяоми пад 6 про", "xiaomi pad 6 pro", "планшет"], marketplace:"Ozon", seller:"Ozon", price:275000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  { name:"Xiaomi Pad 6", nameRu:["сяоми пад 6", "xiaomi pad 6", "планшет"], marketplace:"Kaspi", seller:"Xiaomi", price:195000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Pad 6", nameRu:["сяоми пад 6", "xiaomi pad 6", "планшет"], marketplace:"Wildberries", seller:"WB", price:185000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // Lenovo Tablet
  { name:"Lenovo Tab P12 Pro", nameRu:["леново таб п12 про", "lenovo tab p12 pro", "планшет"], marketplace:"Kaspi", seller:"Lenovo", price:320000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Lenovo Tab P12 Pro", nameRu:["леново таб п12 про", "lenovo tab p12 pro", "планшет"], marketplace:"Ozon", seller:"Ozon", price:305000, delivery:3000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Lenovo Tab M10 Plus", nameRu:["леново таб м10 плюс", "lenovo tab m10 plus", "планшет"], marketplace:"Kaspi", seller:"Lenovo", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Lenovo Tab M10 Plus", nameRu:["леново таб м10 плюс", "lenovo tab m10 plus", "планшет"], marketplace:"Wildberries", seller:"WB", price:115000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  /* ================= AUDIO ================= */
  // AirPods
  { name:"AirPods Pro 2 USB-C", nameRu:["эрподс про 2 юсб си", "airpods pro 2 usb-c", "наушники"], marketplace:"Kaspi", seller:"Apple Official", price:145000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"AirPods Pro 2 USB-C", nameRu:["эрподс про 2 юсб си", "airpods pro 2 usb-c", "наушники"], marketplace:"Wildberries", seller:"WB Audio", price:139000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },
  { name:"AirPods Pro 2 USB-C", nameRu:["эрподс про 2 юсб си", "airpods pro 2 usb-c", "наушники"], marketplace:"Ozon", seller:"Ozon", price:142000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"AirPods 3", nameRu:["эрподс 3", "airpods 3", "наушники"], marketplace:"Kaspi", seller:"Apple Store", price:98000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"AirPods 3", nameRu:["эрподс 3", "airpods 3", "наушники"], marketplace:"Ozon", seller:"Ozon", price:92000, delivery:1500, term:"3 дня", url:"https://ozon.kz " },

  { name:"AirPods Max", nameRu:["эрподс макс", "airpods max", "наушники"], marketplace:"Kaspi", seller:"Apple", price:385000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"AirPods Max", nameRu:["эрподс макс", "airpods max", "наушники"], marketplace:"Technodom", seller:"Technodom", price:395000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Sony
  { name:"Sony WH-1000XM5", nameRu:["сони вх1000хм5", "sony wh-1000xm5", "наушники"], marketplace:"Kaspi", seller:"Sony Official", price:215000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Sony WH-1000XM5", nameRu:["сони вх1000хм5", "sony wh-1000xm5", "наушники"], marketplace:"Ozon", seller:"Ozon Audio", price:208000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },
  { name:"Sony WH-1000XM5", nameRu:["сони вх1000хм5", "sony wh-1000xm5", "наушники"], marketplace:"Wildberries", seller:"WB", price:205000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  { name:"Sony WH-1000XM4", nameRu:["сони вх1000хм4", "sony wh-1000xm4", "наушники"], marketplace:"Kaspi", seller:"Sony", price:165000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Sony WH-1000XM4", nameRu:["сони вх1000хм4", "sony wh-1000xm4", "наушники"], marketplace:"Sulpak", seller:"Sulpak", price:158000, delivery:1500, term:"2 дня", url:"https://sulpak.kz " },

  { name:"Sony WF-1000XM5", nameRu:["сони вф1000хм5", "sony wf-1000xm5", "наушники"], marketplace:"Kaspi", seller:"Sony Store", price:145000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Sony WF-1000XM5", nameRu:["сони вф1000хм5", "sony wf-1000xm5", "наушники"], marketplace:"Ozon", seller:"Ozon", price:138000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  // Samsung Audio
  { name:"Samsung Galaxy Buds3 Pro", nameRu:["самсунг галакси бадс 3 про", "samsung galaxy buds3 pro", "наушники"], marketplace:"Kaspi", seller:"Samsung Audio", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Buds3 Pro", nameRu:["самсунг галакси бадс 3 про", "samsung galaxy buds3 pro", "наушники"], marketplace:"Wildberries", seller:"WB", price:118000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  { name:"Samsung Galaxy Buds2 Pro", nameRu:["самсунг галакси бадс 2 про", "samsung galaxy buds2 pro", "наушники"], marketplace:"Kaspi", seller:"Samsung", price:85000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Buds2 Pro", nameRu:["самсунг галакси бадс 2 про", "samsung galaxy buds2 pro", "наушники"], marketplace:"Ozon", seller:"Ozon", price:78000, delivery:1500, term:"3 дня", url:"https://ozon.kz " },

  // JBL
  { name:"JBL Tour One M2", nameRu:["джибиэль тур ван м2", "jbl tour one m2", "наушники"], marketplace:"Kaspi", seller:"JBL Store", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"JBL Tour One M2", nameRu:["джибиэль тур ван м2", "jbl tour one m2", "наушники"], marketplace:"Ozon", seller:"Ozon", price:118000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"JBL Live Pro 2", nameRu:["джибиэль лайв про 2", "jbl live pro 2", "наушники"], marketplace:"Kaspi", seller:"JBL", price:75000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"JBL Live Pro 2", nameRu:["джибиэль лайв про 2", "jbl live pro 2", "наушники"], marketplace:"Wildberries", seller:"WB", price:68000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  { name:"JBL Charge 5", nameRu:["джибиэль чардж 5", "jbl charge 5", "колонка"], marketplace:"Kaspi", seller:"JBL Audio", price:65000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"JBL Charge 5", nameRu:["джибиэль чардж 5", "jbl charge 5", "колонка"], marketplace:"Technodom", seller:"Technodom", price:68000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"JBL Flip 6", nameRu:["джибиэль флип 6", "jbl flip 6", "колонка"], marketplace:"Kaspi", seller:"JBL", price:45000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"JBL Flip 6", nameRu:["джибиэль флип 6", "jbl flip 6", "колонка"], marketplace:"Ozon", seller:"Ozon", price:42000, delivery:1500, term:"3 дня", url:"https://ozon.kz " },

  // Marshall
  { name:"Marshall Major IV", nameRu:["маршал мэйджор 4", "marshall major iv", "наушники"], marketplace:"Kaspi", seller:"Marshall Store", price:95000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Marshall Major IV", nameRu:["маршал мэйджор 4", "marshall major iv", "наушники"], marketplace:"Ozon", seller:"Ozon", price:88000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Marshall Emberton II", nameRu:["маршал эмбертон 2", "marshall emberton ii", "колонка"], marketplace:"Kaspi", seller:"Marshall", price:75000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Marshall Emberton II", nameRu:["маршал эмбертон 2", "marshall emberton ii", "колонка"], marketplace:"Wildberries", seller:"WB", price:72000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  // Bose
  { name:"Bose QuietComfort Ultra", nameRu:["боуз куайеткомфорт ультра", "bose quietcomfort ultra", "наушники"], marketplace:"Kaspi", seller:"Bose Store", price:245000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Bose QuietComfort Ultra", nameRu:["боуз куайеткомфорт ультра", "bose quietcomfort ultra", "наушники"], marketplace:"Ozon", seller:"Ozon", price:235000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  // Sennheiser
  { name:"Sennheiser Momentum 4", nameRu:["зенхайзер моментум 4", "sennheiser momentum 4", "наушники"], marketplace:"Kaspi", seller:"Sennheiser", price:195000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Sennheiser Momentum 4", nameRu:["зенхайзер моментум 4", "sennheiser momentum 4", "наушники"], marketplace:"Technodom", seller:"Technodom", price:188000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  /* ================= GAMING ================= */
  // PlayStation
  { name:"PlayStation 5 Slim", nameRu:["плейстейшн 5 слим", "playstation 5 slim", "пс5", "консоль"], marketplace:"Kaspi", seller:"Sony Official", price:320000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"PlayStation 5 Slim", nameRu:["плейстейшн 5 слим", "playstation 5 slim", "пс5", "консоль"], marketplace:"Technodom", seller:"Technodom", price:330000, delivery:2000, term:"2 дня", url:"https://technodom.kz " },
  { name:"PlayStation 5 Slim", nameRu:["плейстейшн 5 слим", "playstation 5 slim", "пс5", "консоль"], marketplace:"Ozon", seller:"Ozon Games", price:315000, delivery:3500, term:"4 дня", url:"https://ozon.kz " },
  { name:"PlayStation 5 Slim", nameRu:["плейстейшн 5 слим", "playstation 5 slim", "пс5", "консоль"], marketplace:"Sulpak", seller:"Sulpak", price:325000, delivery:2500, term:"2 дня", url:"https://sulpak.kz " },

  { name:"PlayStation 5 Digital", nameRu:["плейстейшн 5 цифровая", "playstation 5 digital", "пс5", "консоль"], marketplace:"Kaspi", seller:"Sony", price:280000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"PlayStation 5 Digital", nameRu:["плейстейшн 5 цифровая", "playstation 5 digital", "пс5", "консоль"], marketplace:"Wildberries", seller:"WB Games", price:265000, delivery:2500, term:"4 дня", url:"https://wildberries.kz " },

  { name:"PlayStation VR2", nameRu:["плейстейшн вр2", "playstation vr2", "вр", "очки"], marketplace:"Kaspi", seller:"Sony", price:385000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"PlayStation VR2", nameRu:["плейстейшн вр2", "playstation vr2", "вр", "очки"], marketplace:"Ozon", seller:"Ozon", price:365000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  // Xbox
  { name:"Xbox Series X", nameRu:["иксбокс сериес икс", "xbox series x", "иксбокс"], marketplace:"Kaspi", seller:"Microsoft Store", price:310000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xbox Series X", nameRu:["иксбокс сериес икс", "xbox series x", "иксбокс"], marketplace:"Ozon", seller:"Ozon Games", price:305000, delivery:3000, term:"4 дня", url:"https://ozon.kz " },
  { name:"Xbox Series X", nameRu:["иксбокс сериес икс", "xbox series x", "иксбокс"], marketplace:"Technodom", seller:"Technodom", price:320000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Xbox Series S", nameRu:["иксбокс сериес эс", "xbox series s", "иксбокс"], marketplace:"Kaspi", seller:"Microsoft", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xbox Series S", nameRu:["иксбокс сериес эс", "xbox series s", "иксбокс"], marketplace:"Wildberries", seller:"WB", price:175000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // Nintendo
  { name:"Nintendo Switch OLED", nameRu:["нинтендо свитч олед", "nintendo switch oled", "нинтендо"], marketplace:"Kaspi", seller:"Nintendo Store", price:245000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Nintendo Switch OLED", nameRu:["нинтендо свитч олед", "nintendo switch oled", "нинтендо"], marketplace:"Ozon", seller:"Ozon Import", price:235000, delivery:3000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Nintendo Switch Lite", nameRu:["нинтендо свитч лайт", "nintendo switch lite", "нинтендо"], marketplace:"Kaspi", seller:"Nintendo", price:165000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Nintendo Switch Lite", nameRu:["нинтендо свитч лайт", "nintendo switch lite", "нинтендо"], marketplace:"Wildberries", seller:"WB Import", price:155000, delivery:2500, term:"5 дней", url:"https://wildberries.kz " },

  // Steam Deck
  { name:"Steam Deck OLED 1TB", nameRu:["стим дек олед", "steam deck oled", "стим дек"], marketplace:"Kaspi", seller:"Steam Store", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Steam Deck OLED 1TB", nameRu:["стим дек олед", "steam deck oled", "стим дек"], marketplace:"Ozon", seller:"Ozon Import", price:465000, delivery:4000, term:"7 дней", url:"https://ozon.kz " },

  { name:"Steam Deck LCD 512GB", nameRu:["стим дек лсд", "steam deck lcd", "стим дек"], marketplace:"Kaspi", seller:"Steam", price:385000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Steam Deck LCD 512GB", nameRu:["стим дек лсд", "steam deck lcd", "стим дек"], marketplace:"Technodom", seller:"Technodom", price:395000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // ASUS ROG Ally
  { name:"ASUS ROG Ally X", nameRu:["асус рог элли икс", "asus rog ally x", "портативка"], marketplace:"Kaspi", seller:"ASUS Gaming", price:520000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"ASUS ROG Ally X", nameRu:["асус рог элли икс", "asus rog ally x", "портативка"], marketplace:"Ozon", seller:"Ozon", price:495000, delivery:4000, term:"6 дней", url:"https://ozon.kz " },

  // Controllers
  { name:"DualSense Edge", nameRu:["дуалсенс эдж", "dualsense edge", "геймпад"], marketplace:"Kaspi", seller:"Sony", price:95000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"DualSense Edge", nameRu:["дуалсенс эдж", "dualsense edge", "геймпад"], marketplace:"Wildberries", seller:"WB", price:88000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  { name:"Xbox Elite Controller 2", nameRu:["иксбокс элит контроллер", "xbox elite controller", "геймпад"], marketplace:"Kaspi", seller:"Microsoft", price:85000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xbox Elite Controller 2", nameRu:["иксбокс элит контроллер", "xbox elite controller", "геймпад"], marketplace:"Ozon", seller:"Ozon", price:78000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  /* ================= SMART WATCHES ================= */
  // Apple Watch
  { name:"Apple Watch Ultra 2", nameRu:["эпл вотч ультра 2", "apple watch ultra 2", "часы"], marketplace:"Kaspi", seller:"Apple Store", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Apple Watch Ultra 2", nameRu:["эпл вотч ультра 2", "apple watch ultra 2", "часы"], marketplace:"Ozon", seller:"Ozon", price:465000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Apple Watch Series 9 45mm", nameRu:["эпл вотч сериес 9", "apple watch series 9", "часы"], marketplace:"Kaspi", seller:"Apple", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Apple Watch Series 9 45mm", nameRu:["эпл вотч сериес 9", "apple watch series 9", "часы"], marketplace:"Wildberries", seller:"WB", price:268000, delivery:2000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Apple Watch SE 2023", nameRu:["эпл вотч се", "apple watch se", "часы"], marketplace:"Kaspi", seller:"Apple Store", price:165000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Apple Watch SE 2023", nameRu:["эпл вотч се", "apple watch se", "часы"], marketplace:"Technodom", seller:"Technodom", price:175000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Samsung Watch
  { name:"Samsung Galaxy Watch 6 Classic 47mm", nameRu:["самсунг вотч 6 классик", "samsung galaxy watch 6 classic", "часы"], marketplace:"Kaspi", seller:"Samsung", price:165000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Watch 6 Classic 47mm", nameRu:["самсунг вотч 6 классик", "samsung galaxy watch 6 classic", "часы"], marketplace:"Ozon", seller:"Ozon", price:155000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Samsung Galaxy Watch 6 44mm", nameRu:["самсунг вотч 6", "samsung galaxy watch 6", "часы"], marketplace:"Kaspi", seller:"Samsung Store", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Watch 6 44mm", nameRu:["самсунг вотч 6", "samsung galaxy watch 6", "часы"], marketplace:"Wildberries", seller:"WB", price:118000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  { name:"Samsung Galaxy Watch 5 Pro", nameRu:["самсунг вотч 5 про", "samsung galaxy watch 5 pro", "часы"], marketplace:"Kaspi", seller:"Samsung", price:145000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Galaxy Watch 5 Pro", nameRu:["самсунг вотч 5 про", "samsung galaxy watch 5 pro", "часы"], marketplace:"Sulpak", seller:"Sulpak", price:138000, delivery:1500, term:"2 дня", url:"https://sulpak.kz " },

  // Xiaomi Watch
  { name:"Xiaomi Watch 2 Pro", nameRu:["сяоми вотч 2 про", "xiaomi watch 2 pro", "часы"], marketplace:"Kaspi", seller:"Xiaomi", price:75000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Watch 2 Pro", nameRu:["сяоми вотч 2 про", "xiaomi watch 2 pro", "часы"], marketplace:"Ozon", seller:"Ozon", price:68000, delivery:1500, term:"4 дня", url:"https://ozon.kz " },

  { name:"Xiaomi Redmi Watch 4", nameRu:["сяоми редми вотч 4", "xiaomi redmi watch 4", "часы"], marketplace:"Kaspi", seller:"Xiaomi Store", price:35000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Redmi Watch 4", nameRu:["сяоми редми вотч 4", "xiaomi redmi watch 4", "часы"], marketplace:"Wildberries", seller:"WB", price:32000, delivery:1000, term:"3 дня", url:"https://wildberries.kz " },

  // Garmin
  { name:"Garmin Fenix 7X Pro", nameRu:["гармин феникс 7х про", "garmin fenix 7x pro", "часы"], marketplace:"Kaspi", seller:"Garmin Store", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Garmin Fenix 7X Pro", nameRu:["гармин феникс 7х про", "garmin fenix 7x pro", "часы"], marketplace:"Ozon", seller:"Ozon", price:465000, delivery:4000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Garmin Forerunner 965", nameRu:["гармин фораннер 965", "garmin forerunner 965", "часы"], marketplace:"Kaspi", seller:"Garmin", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Garmin Forerunner 965", nameRu:["гармин фораннер 965", "garmin forerunner 965", "часы"], marketplace:"Technodom", seller:"Technodom", price:295000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Amazfit
  { name:"Amazfit GTR 4", nameRu:["амазфит гтр 4", "amazfit gtr 4", "часы"], marketplace:"Kaspi", seller:"Amazfit Store", price:65000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Amazfit GTR 4", nameRu:["амазфит гтр 4", "amazfit gtr 4", "часы"], marketplace:"Wildberries", seller:"WB", price:58000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  { name:"Amazfit T-Rex Ultra", nameRu:["амазфит тирекс ультра", "amazfit t-rex ultra", "часы"], marketplace:"Kaspi", seller:"Amazfit", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Amazfit T-Rex Ultra", nameRu:["амазфит тирекс ультра", "amazfit t-rex ultra", "часы"], marketplace:"Ozon", seller:"Ozon", price:115000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  // Huawei Watch
  { name:"Huawei Watch GT 4", nameRu:["хуавей вотч гт 4", "huawei watch gt 4", "часы"], marketplace:"Kaspi", seller:"Huawei Store", price:95000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Huawei Watch GT 4", nameRu:["хуавей вотч гт 4", "huawei watch gt 4", "часы"], marketplace:"Ozon", seller:"Ozon", price:88000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Huawei Watch Ultimate", nameRu:["хуавей вотч ультимейт", "huawei watch ultimate", "часы"], marketplace:"Kaspi", seller:"Huawei", price:245000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Huawei Watch Ultimate", nameRu:["хуавей вотч ультимейт", "huawei watch ultimate", "часы"], marketplace:"Sulpak", seller:"Sulpak", price:235000, delivery:2000, term:"2 дня", url:"https://sulpak.kz " },

  /* ================= CAMERAS ================= */
  // Sony Camera
  { name:"Sony A7 IV", nameRu:["сони а7 4", "sony a7 iv", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Sony Pro", price:1250000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Sony A7 IV", nameRu:["сони а7 4", "sony a7 iv", "камера", "фотоаппарат"], marketplace:"Ozon", seller:"Ozon", price:1190000, delivery:5000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Sony A7C II", nameRu:["сони а7с 2", "sony a7c ii", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Sony Store", price:980000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Sony A7C II", nameRu:["сони а7с 2", "sony a7c ii", "камера", "фотоаппарат"], marketplace:"Technodom", seller:"Technodom", price:995000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Sony ZV-E10", nameRu:["сони зетви е10", "sony zv-e10", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Sony", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Sony ZV-E10", nameRu:["сони зетви е10", "sony zv-e10", "камера", "фотоаппарат"], marketplace:"Wildberries", seller:"WB", price:465000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  // Canon
  { name:"Canon EOS R6 Mark II", nameRu:["канон еос р6 марк 2", "canon eos r6 mark ii", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Canon Store", price:1450000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Canon EOS R6 Mark II", nameRu:["канон еос р6 марк 2", "canon eos r6 mark ii", "камера", "фотоаппарат"], marketplace:"Ozon", seller:"Ozon", price:1390000, delivery:6000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Canon EOS R8", nameRu:["канон еос р8", "canon eos r8", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Canon", price:850000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Canon EOS R8", nameRu:["канон еос р8", "canon eos r8", "камера", "фотоаппарат"], marketplace:"Sulpak", seller:"Sulpak", price:875000, delivery:2500, term:"2 дня", url:"https://sulpak.kz " },

  { name:"Canon EOS R50", nameRu:["канон еос р50", "canon eos r50", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Canon Store", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Canon EOS R50", nameRu:["канон еос р50", "canon eos r50", "камера", "фотоаппарат"], marketplace:"Wildberries", seller:"WB", price:465000, delivery:2500, term:"4 дня", url:"https://wildberries.kz " },

  // Nikon
  { name:"Nikon Z6 III", nameRu:["никон зет 6 3", "nikon z6 iii", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Nikon Pro", price:1350000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Nikon Z6 III", nameRu:["никон зет 6 3", "nikon z6 iii", "камера", "фотоаппарат"], marketplace:"Ozon", seller:"Ozon", price:1290000, delivery:6000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Nikon Zf", nameRu:["никон зет эф", "nikon zf", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Nikon Store", price:1150000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Nikon Zf", nameRu:["никон зет эф", "nikon zf", "камера", "фотоаппарат"], marketplace:"Technodom", seller:"Technodom", price:1180000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Fujifilm
  { name:"Fujifilm X-T5", nameRu:["фуджифильм икс т5", "fujifilm x-t5", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Fujifilm Store", price:980000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Fujifilm X-T5", nameRu:["фуджифильм икс т5", "fujifilm x-t5", "камера", "фотоаппарат"], marketplace:"Ozon", seller:"Ozon", price:945000, delivery:5000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Fujifilm X-S20", nameRu:["фуджифильм икс с20", "fujifilm x-s20", "камера", "фотоаппарат"], marketplace:"Kaspi", seller:"Fujifilm", price:720000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Fujifilm X-S20", nameRu:["фуджифильм икс с20", "fujifilm x-s20", "камера", "фотоаппарат"], marketplace:"Wildberries", seller:"WB", price:695000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  // GoPro
  { name:"GoPro Hero 12 Black", nameRu:["гопро хиро 12 блэк", "gopro hero 12 black", "экшн камера"], marketplace:"Kaspi", seller:"GoPro Store", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"GoPro Hero 12 Black", nameRu:["гопро хиро 12 блэк", "gopro hero 12 black", "экшн камера"], marketplace:"Ozon", seller:"Ozon", price:268000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  { name:"DJI Osmo Action 4", nameRu:["диджиай осмо экшн 4", "dji osmo action 4", "экшн камера"], marketplace:"Kaspi", seller:"DJI Store", price:195000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"DJI Osmo Action 4", nameRu:["диджиай осмо экшн 4", "dji osmo action 4", "экшн камера"], marketplace:"Technodom", seller:"Technodom", price:205000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Insta360
  { name:"Insta360 X4", nameRu:["инста360 икс 4", "insta360 x4", "панорамная камера"], marketplace:"Kaspi", seller:"Insta360 Store", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Insta360 X4", nameRu:["инста360 икс 4", "insta360 x4", "панорамная камера"], marketplace:"Ozon", seller:"Ozon", price:268000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  /* ================= TV ================= */
  // Samsung TV
  { name:"Samsung QE85QN900D 8K", nameRu:["самсунг 85 ку900д", "samsung qe85qn900d", "телевизор", "тв"], marketplace:"Kaspi", seller:"Samsung Premium", price:3850000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung QE85QN900D 8K", nameRu:["самсунг 85 ку900д", "samsung qe85qn900d", "телевизор", "тв"], marketplace:"Technodom", seller:"Technodom", price:3900000, delivery:5000, term:"2 дня", url:"https://technodom.kz " },

  { name:"Samsung QE77S95D OLED", nameRu:["самсунг 77 с95д", "samsung qe77s95d", "телевизор", "тв"], marketplace:"Kaspi", seller:"Samsung Store", price:1850000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung QE77S95D OLED", nameRu:["самсунг 77 с95д", "samsung qe77s95d", "телевизор", "тв"], marketplace:"Sulpak", seller:"Sulpak", price:1790000, delivery:4000, term:"2 дня", url:"https://sulpak.kz " },

  { name:"Samsung QE65QN90D", nameRu:["самсунг 65 кн90д", "samsung qe65qn90d", "телевизор", "тв"], marketplace:"Kaspi", seller:"Samsung", price:980000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung QE65QN90D", nameRu:["самсунг 65 кн90д", "samsung qe65qn90d", "телевизор", "тв"], marketplace:"Ozon", seller:"Ozon", price:945000, delivery:5000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Samsung UE55CU8000", nameRu:["самсунг 55 цу8000", "samsung ue55cu8000", "телевизор", "тв"], marketplace:"Kaspi", seller:"Samsung", price:385000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung UE55CU8000", nameRu:["самсунг 55 цу8000", "samsung ue55cu8000", "телевизор", "тв"], marketplace:"Wildberries", seller:"WB", price:365000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  // LG TV
  { name:"LG OLED83C4", nameRu:["лж олед 83 ц4", "lg oled83c4", "телевизор", "тв"], marketplace:"Kaspi", seller:"LG Premium", price:2450000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"LG OLED83C4", nameRu:["лж олед 83 ц4", "lg oled83c4", "телевизор", "тв"], marketplace:"Technodom", seller:"Technodom", price:2490000, delivery:5000, term:"2 дня", url:"https://technodom.kz " },

  { name:"LG OLED65C4", nameRu:["лж олед 65 ц4", "lg oled65c4", "телевизор", "тв"], marketplace:"Kaspi", seller:"LG Store", price:980000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"LG OLED65C4", nameRu:["лж олед 65 ц4", "lg oled65c4", "телевизор", "тв"], marketplace:"Ozon", seller:"Ozon", price:945000, delivery:4000, term:"4 дня", url:"https://ozon.kz " },

  { name:"LG 55UR8100", nameRu:["лж 55 ур8100", "lg 55ur8100", "телевизор", "тв"], marketplace:"Kaspi", seller:"LG", price:385000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"LG 55UR8100", nameRu:["лж 55 ур8100", "lg 55ur8100", "телевизор", "тв"], marketplace:"Sulpak", seller:"Sulpak", price:375000, delivery:2500, term:"2 дня", url:"https://sulpak.kz " },

  // Sony TV
  { name:"Sony XR-85X95L", nameRu:["сони 85 икс95л", "sony xr-85x95l", "телевизор", "тв"], marketplace:"Kaspi", seller:"Sony Premium", price:1850000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Sony XR-85X95L", nameRu:["сони 85 икс95л", "sony xr-85x95l", "телевизор", "тв"], marketplace:"Ozon", seller:"Ozon", price:1790000, delivery:6000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Sony XR-65A80L OLED", nameRu:["сони 65 а80л", "sony xr-65a80l", "телевизор", "тв"], marketplace:"Kaspi", seller:"Sony Store", price:980000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Sony XR-65A80L OLED", nameRu:["сони 65 а80л", "sony xr-65a80l", "телевизор", "тв"], marketplace:"Technodom", seller:"Technodom", price:995000, delivery:4000, term:"2 дня", url:"https://technodom.kz " },

  // Xiaomi TV
  { name:"Xiaomi TV A Pro 65", nameRu:["сяоми тв а про 65", "xiaomi tv a pro 65", "телевизор", "тв"], marketplace:"Kaspi", seller:"Xiaomi Store", price:285000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Xiaomi TV A Pro 65", nameRu:["сяоми тв а про 65", "xiaomi tv a pro 65", "телевизор", "тв"], marketplace:"Wildberries", seller:"WB", price:268000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Xiaomi TV A Pro 55", nameRu:["сяоми тв а про 55", "xiaomi tv a pro 55", "телевизор", "тв"], marketplace:"Kaspi", seller:"Xiaomi", price:195000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Xiaomi TV A Pro 55", nameRu:["сяоми тв а про 55", "xiaomi tv a pro 55", "телевизор", "тв"], marketplace:"Ozon", seller:"Ozon", price:185000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  /* ================= HOME APPLIANCES ================= */
  // Robot Vacuum
  { name:"Roborock S8 Pro Ultra", nameRu:["роборок с8 про ультра", "roborock s8 pro ultra", "робот пылесос", "пылесос"], marketplace:"Kaspi", seller:"Roborock Store", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Roborock S8 Pro Ultra", nameRu:["роборок с8 про ультра", "roborock s8 pro ultra", "робот пылесос", "пылесос"], marketplace:"Ozon", seller:"Ozon", price:465000, delivery:4000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Roborock Q Revo", nameRu:["роборок ку рево", "roborock q revo", "робот пылесос", "пылесос"], marketplace:"Kaspi", seller:"Roborock", price:385000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Roborock Q Revo", nameRu:["роборок ку рево", "roborock q revo", "робот пылесос", "пылесос"], marketplace:"Wildberries", seller:"WB", price:365000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Xiaomi Robot Vacuum X20+", nameRu:["сяоми робот вакуум икс20 плюс", "xiaomi robot vacuum x20 plus", "робот пылесос", "пылесос"], marketplace:"Kaspi", seller:"Xiaomi", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Robot Vacuum X20+", nameRu:["сяоми робот вакуум икс20 плюс", "xiaomi robot vacuum x20 plus", "робот пылесос", "пылесос"], marketplace:"Ozon", seller:"Ozon", price:268000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  { name:"Dreame L20 Ultra", nameRu:["дрим л20 ультра", "dreame l20 ultra", "робот пылесос", "пылесос"], marketplace:"Kaspi", seller:"Dreame Store", price:420000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Dreame L20 Ultra", nameRu:["дрим л20 ультра", "dreame l20 ultra", "робот пылесос", "пылесос"], marketplace:"Technodom", seller:"Technodom", price:435000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Washing Machine
  { name:"LG AI DD F4V9", nameRu:["лж ай ди ди ф4в9", "lg ai dd f4v9", "стиральная машина"], marketplace:"Kaspi", seller:"LG Store", price:485000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"LG AI DD F4V9", nameRu:["лж ай ди ди ф4в9", "lg ai dd f4v9", "стиральная машина"], marketplace:"Sulpak", seller:"Sulpak", price:465000, delivery:3000, term:"2 дня", url:"https://sulpak.kz " },

  { name:"Samsung AI EcoBubble", nameRu:["самсунг ай экобабл", "samsung ai ecobubble", "стиральная машина"], marketplace:"Kaspi", seller:"Samsung", price:385000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung AI EcoBubble", nameRu:["самсунг ай экобабл", "samsung ai ecobubble", "стиральная машина"], marketplace:"Ozon", seller:"Ozon", price:365000, delivery:4000, term:"4 дня", url:"https://ozon.kz " },

  // Refrigerator
  { name:"LG InstaView Door-in-Door", nameRu:["лж инставью", "lg instaview", "холодильник"], marketplace:"Kaspi", seller:"LG Premium", price:1250000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"LG InstaView Door-in-Door", nameRu:["лж инставью", "lg instaview", "холодильник"], marketplace:"Technodom", seller:"Technodom", price:1290000, delivery:5000, term:"2 дня", url:"https://technodom.kz " },

  { name:"Samsung Bespoke", nameRu:["самсунг беспок", "samsung bespoke", "холодильник"], marketplace:"Kaspi", seller:"Samsung", price:980000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung Bespoke", nameRu:["самсунг беспок", "samsung bespoke", "холодильник"], marketplace:"Wildberries", seller:"WB", price:945000, delivery:5000, term:"4 дня", url:"https://wildberries.kz " },

  // Air Conditioner
  { name:"LG DUAL Inverter", nameRu:["лж дуал инвертер", "lg dual inverter", "кондиционер"], marketplace:"Kaspi", seller:"LG Climate", price:285000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"LG DUAL Inverter", nameRu:["лж дуал инвертер", "lg dual inverter", "кондиционер"], marketplace:"Sulpak", seller:"Sulpak", price:275000, delivery:2000, term:"2 дня", url:"https://sulpak.kz " },

  { name:"Samsung WindFree", nameRu:["самсунг виндфри", "samsung windfree", "кондиционер"], marketplace:"Kaspi", seller:"Samsung", price:320000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung WindFree", nameRu:["самсунг виндфри", "samsung windfree", "кондиционер"], marketplace:"Ozon", seller:"Ozon", price:305000, delivery:3000, term:"4 дня", url:"https://ozon.kz " },

  /* ================= KITCHEN APPLIANCES ================= */
  // Coffee Machine
  { name:"DeLonghi La Specialista", nameRu:["делонги ла специалиста", "delonghi la specialista", "кофемашина"], marketplace:"Kaspi", seller:"DeLonghi Store", price:385000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"DeLonghi La Specialista", nameRu:["делонги ла специалиста", "delonghi la specialista", "кофемашина"], marketplace:"Ozon", seller:"Ozon", price:365000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Philips LatteGo 5400", nameRu:["филипс латте го 5400", "philips lattego 5400", "кофемашина"], marketplace:"Kaspi", seller:"Philips", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Philips LatteGo 5400", nameRu:["филипс латте го 5400", "philips lattego 5400", "кофемашина"], marketplace:"Technodom", seller:"Technodom", price:295000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Jura E8", nameRu:["йура е8", "jura e8", "кофемашина"], marketplace:"Kaspi", seller:"Jura Store", price:685000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Jura E8", nameRu:["йура е8", "jura e8", "кофемашина"], marketplace:"Wildberries", seller:"WB", price:645000, delivery:4000, term:"5 дней", url:"https://wildberries.kz " },

  // Blender
  { name:"Vitamix A3500", nameRu:["витамикс а3500", "vitamix a3500", "блендер"], marketplace:"Kaspi", seller:"Vitamix Store", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Vitamix A3500", nameRu:["витамикс а3500", "vitamix a3500", "блендер"], marketplace:"Ozon", seller:"Ozon", price:265000, delivery:3000, term:"6 дней", url:"https://ozon.kz " },

  { name:"Bosch VitaBoost", nameRu:["бош витабуст", "bosch vitaboost", "блендер"], marketplace:"Kaspi", seller:"Bosch", price:85000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Bosch VitaBoost", nameRu:["бош витабуст", "bosch vitaboost", "блендер"], marketplace:"Sulpak", seller:"Sulpak", price:82000, delivery:1500, term:"2 дня", url:"https://sulpak.kz " },

  // Microwave
  { name:"Samsung Bespoke Microwave", nameRu:["самсунг беспок микроволновка", "samsung bespoke microwave", "микроволновка"], marketplace:"Kaspi", seller:"Samsung", price:125000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Samsung Bespoke Microwave", nameRu:["самсунг беспок микроволновка", "samsung bespoke microwave", "микроволновка"], marketplace:"Wildberries", seller:"WB", price:115000, delivery:2000, term:"4 дня", url:"https://wildberries.kz " },

  // Multicooker
  { name:"Redmond SkyCooker", nameRu:["редмонд скайкукер", "redmond skycooker", "мультиварка"], marketplace:"Kaspi", seller:"Redmond", price:45000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Redmond SkyCooker", nameRu:["редмонд скайкукер", "redmond skycooker", "мультиварка"], marketplace:"Ozon", seller:"Ozon", price:38000, delivery:1500, term:"3 дня", url:"https://ozon.kz " },

  /* ================= BEAUTY & HEALTH ================= */
  // Hair Dryer
  { name:"Dyson Supersonic", nameRu:["дайсон суперсоник", "dyson supersonic", "фен"], marketplace:"Kaspi", seller:"Dyson Store", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Dyson Supersonic", nameRu:["дайсон суперсоник", "dyson supersonic", "фен"], marketplace:"Ozon", seller:"Ozon", price:268000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },
  { name:"Dyson Supersonic", nameRu:["дайсон суперсоник", "dyson supersonic", "фен"], marketplace:"Technodom", seller:"Technodom", price:295000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Dyson Airwrap", nameRu:["дайсон эйррэп", "dyson airwrap", "стайлер"], marketplace:"Kaspi", seller:"Dyson", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Dyson Airwrap", nameRu:["дайсон эйррэп", "dyson airwrap", "стайлер"], marketplace:"Wildberries", seller:"WB", price:465000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Philips 7000 Series", nameRu:["филипс 7000 сериес", "philips 7000 series", "фен"], marketplace:"Kaspi", seller:"Philips", price:45000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Philips 7000 Series", nameRu:["филипс 7000 сериес", "philips 7000 series", "фен"], marketplace:"Sulpak", seller:"Sulpak", price:42000, delivery:1000, term:"2 дня", url:"https://sulpak.kz " },

  // Electric Toothbrush
  { name:"Oral-B iO Series 10", nameRu:["орал би айо сериес 10", "oral-b io series 10", "зубная щетка"], marketplace:"Kaspi", seller:"Oral-B Store", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Oral-B iO Series 10", nameRu:["орал би айо сериес 10", "oral-b io series 10", "зубная щетка"], marketplace:"Ozon", seller:"Ozon", price:115000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Philips Sonicare 9900", nameRu:["филипс соникер 9900", "philips sonicare 9900", "зубная щетка"], marketplace:"Kaspi", seller:"Philips", price:95000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Philips Sonicare 9900", nameRu:["филипс соникер 9900", "philips sonicare 9900", "зубная щетка"], marketplace:"Wildberries", seller:"WB", price:88000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  // Massage Gun
  { name:"Theragun Pro Plus", nameRu:["тераган про плюс", "theragun pro plus", "массажер"], marketplace:"Kaspi", seller:"Theragun Store", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Theragun Pro Plus", nameRu:["тераган про плюс", "theragun pro plus", "массажер"], marketplace:"Ozon", seller:"Ozon", price:265000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Hypervolt 2 Pro", nameRu:["хайперволт 2 про", "hypervolt 2 pro", "массажер"], marketplace:"Kaspi", seller:"Hyperice", price:195000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Hypervolt 2 Pro", nameRu:["хайперволт 2 про", "hypervolt 2 pro", "массажер"], marketplace:"Technodom", seller:"Technodom", price:205000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Scales
  { name:"Withings Body Scan", nameRu:["визингс боди скан", "withings body scan", "весы"], marketplace:"Kaspi", seller:"Withings Store", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Withings Body Scan", nameRu:["визингс боди скан", "withings body scan", "весы"], marketplace:"Ozon", seller:"Ozon", price:115000, delivery:2000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Xiaomi Body Composition Scale 2", nameRu:["сяоми боди композишн скейл 2", "xiaomi body composition scale 2", "весы"], marketplace:"Kaspi", seller:"Xiaomi", price:15000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Body Composition Scale 2", nameRu:["сяоми боди композишн скейл 2", "xiaomi body composition scale 2", "весы"], marketplace:"Wildberries", seller:"WB", price:12000, delivery:1000, term:"3 дня", url:"https://wildberries.kz " },

  /* ================= SPORT ================= */
  // Fitness Tracker
  { name:"Garmin Fenix 7 Pro", nameRu:["гармин феникс 7 про", "garmin fenix 7 pro", "фитнес браслет"], marketplace:"Kaspi", seller:"Garmin Store", price:385000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Garmin Fenix 7 Pro", nameRu:["гармин феникс 7 про", "garmin fenix 7 pro", "фитнес браслет"], marketplace:"Ozon", seller:"Ozon", price:365000, delivery:3000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Garmin Venu 3", nameRu:["гармин вену 3", "garmin venu 3", "фитнес браслет"], marketplace:"Kaspi", seller:"Garmin", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Garmin Venu 3", nameRu:["гармин вену 3", "garmin venu 3", "фитнес браслет"], marketplace:"Technodom", seller:"Technodom", price:195000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Xiaomi Smart Band 8 Pro", nameRu:["сяоми смарт бэнд 8 про", "xiaomi smart band 8 pro", "фитнес браслет", "ми бэнд"], marketplace:"Kaspi", seller:"Xiaomi", price:25000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Smart Band 8 Pro", nameRu:["сяоми смарт бэнд 8 про", "xiaomi smart band 8 pro", "фитнес браслет", "ми бэнд"], marketplace:"Wildberries", seller:"WB", price:22000, delivery:1000, term:"3 дня", url:"https://wildberries.kz " },

  // Treadmill
  { name:"Apple Fitness+ Treadmill", nameRu:["эпл фитнес тредмилл", "apple fitness treadmill", "беговая дорожка"], marketplace:"Kaspi", seller:"Fitness Store", price:485000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Apple Fitness+ Treadmill", nameRu:["эпл фитнес тредмилл", "apple fitness treadmill", "беговая дорожка"], marketplace:"Ozon", seller:"Ozon", price:465000, delivery:5000, term:"5 дней", url:"https://ozon.kz " },

  { name:"Xiaomi WalkingPad R2", nameRu:["сяоми вокингпад р2", "xiaomi walkingpad r2", "беговая дорожка"], marketplace:"Kaspi", seller:"Xiaomi", price:185000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Xiaomi WalkingPad R2", nameRu:["сяоми вокингпад р2", "xiaomi walkingpad r2", "беговая дорожка"], marketplace:"Sulpak", seller:"Sulpak", price:175000, delivery:3000, term:"2 дня", url:"https://sulpak.kz " },

  // Bicycle
  { name:"Xiaomi Himo C26", nameRu:["сяоми химо ц26", "xiaomi himo c26", "электровелосипед", "велосипед"], marketplace:"Kaspi", seller:"Xiaomi", price:285000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Xiaomi Himo C26", nameRu:["сяоми химо ц26", "xiaomi himo c26", "электровелосипед", "велосипед"], marketplace:"Ozon", seller:"Ozon", price:265000, delivery:4000, term:"5 дней", url:"https://ozon.kz " },

  // Scooter
  { name:"Xiaomi Electric Scooter 4 Ultra", nameRu:["сяоми электрик скутер 4 ультра", "xiaomi electric scooter 4 ultra", "самокат"], marketplace:"Kaspi", seller:"Xiaomi Store", price:385000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Xiaomi Electric Scooter 4 Ultra", nameRu:["сяоми электрик скутер 4 ультра", "xiaomi electric scooter 4 ultra", "самокат"], marketplace:"Technodom", seller:"Technodom", price:395000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Ninebot KickScooter F2 Pro", nameRu:["найнбот кикскутер ф2 про", "ninebot kickscooter f2 pro", "самокат"], marketplace:"Kaspi", seller:"Ninebot Store", price:285000, delivery:0, term:"1-2 дня", url:"https://kaspi.kz " },
  { name:"Ninebot KickScooter F2 Pro", nameRu:["найнбот кикскутер ф2 про", "ninebot kickscooter f2 pro", "самокат"], marketplace:"Wildberries", seller:"WB", price:265000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  /* ================= DRONES ================= */
  { name:"DJI Mavic 3 Pro", nameRu:["диджиай мавик 3 про", "dji mavic 3 pro", "дрон"], marketplace:"Kaspi", seller:"DJI Store", price:985000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"DJI Mavic 3 Pro", nameRu:["диджиай мавик 3 про", "dji mavic 3 pro", "дрон"], marketplace:"Ozon", seller:"Ozon", price:945000, delivery:5000, term:"6 дней", url:"https://ozon.kz " },

  { name:"DJI Air 3", nameRu:["диджиай эйр 3", "dji air 3", "дрон"], marketplace:"Kaspi", seller:"DJI", price:585000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"DJI Air 3", nameRu:["диджиай эйр 3", "dji air 3", "дрон"], marketplace:"Technodom", seller:"Technodom", price:595000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"DJI Mini 4 Pro", nameRu:["диджиай мини 4 про", "dji mini 4 pro", "дрон"], marketplace:"Kaspi", seller:"DJI Store", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"DJI Mini 4 Pro", nameRu:["диджиай мини 4 про", "dji mini 4 pro", "дрон"], marketplace:"Wildberries", seller:"WB", price:465000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"DJI Avata 2", nameRu:["диджиай авата 2", "dji avata 2", "дрон"], marketplace:"Kaspi", seller:"DJI", price:385000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"DJI Avata 2", nameRu:["диджиай авата 2", "dji avata 2", "дрон"], marketplace:"Sulpak", seller:"Sulpak", price:375000, delivery:2500, term:"2 дня", url:"https://sulpak.kz " },

  /* ================= SMART HOME ================= */
  // Smart Speaker
  { name:"Apple HomePod 2", nameRu:["эпл хоумпод 2", "apple homepod 2", "колонка умная"], marketplace:"Kaspi", seller:"Apple Store", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Apple HomePod 2", nameRu:["эпл хоумпод 2", "apple homepod 2", "колонка умная"], marketplace:"Ozon", seller:"Ozon", price:175000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Apple HomePod mini", nameRu:["эпл хоумпод мини", "apple homepod mini", "колонка умная"], marketplace:"Kaspi", seller:"Apple", price:85000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Apple HomePod mini", nameRu:["эпл хоумпод мини", "apple homepod mini", "колонка умная"], marketplace:"Wildberries", seller:"WB", price:78000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  { name:"Yandex Station Max", nameRu:["яндекс станция макс", "yandex station max", "колонка умная", "алиса"], marketplace:"Kaspi", seller:"Yandex Store", price:45000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Yandex Station Max", nameRu:["яндекс станция макс", "yandex station max", "колонка умная", "алиса"], marketplace:"Ozon", seller:"Ozon", price:42000, delivery:1500, term:"3 дня", url:"https://ozon.kz " },

  { name:"Yandex Station 2", nameRu:["яндекс станция 2", "yandex station 2", "колонка умная", "алиса"], marketplace:"Kaspi", seller:"Yandex", price:25000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Yandex Station 2", nameRu:["яндекс станция 2", "yandex station 2", "колонка умная", "алиса"], marketplace:"Technodom", seller:"Technodom", price:23500, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Smart Display
  { name:"Google Nest Hub 2", nameRu:["гугл нест хаб 2", "google nest hub 2", "дисплей умный"], marketplace:"Kaspi", seller:"Google Store", price:65000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Google Nest Hub 2", nameRu:["гугл нест хаб 2", "google nest hub 2", "дисплей умный"], marketplace:"Ozon", seller:"Ozon", price:58000, delivery:2000, term:"5 дней", url:"https://ozon.kz " },

  // Smart Bulb
  { name:"Philips Hue White & Color", nameRu:["филипс хью вайт колор", "philips hue white color", "лампа умная"], marketplace:"Kaspi", seller:"Philips", price:25000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Philips Hue White & Color", nameRu:["филипс хью вайт колор", "philips hue white color", "лампа умная"], marketplace:"Wildberries", seller:"WB", price:22000, delivery:1000, term:"3 дня", url:"https://wildberries.kz " },

  { name:"Xiaomi Mi Smart LED Bulb", nameRu:["сяоми ми смарт лед балб", "xiaomi mi smart led bulb", "лампа умная"], marketplace:"Kaspi", seller:"Xiaomi", price:8500, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Mi Smart LED Bulb", nameRu:["сяоми ми смарт лед балб", "xiaomi mi smart led bulb", "лампа умная"], marketplace:"Ozon", seller:"Ozon", price:7500, delivery:1000, term:"3 дня", url:"https://ozon.kz " },

  // Smart Lock
  { name:"Xiaomi Smart Door Lock Pro", nameRu:["сяоми смарт дoor лок про", "xiaomi smart door lock pro", "замок умный"], marketplace:"Kaspi", seller:"Xiaomi Store", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Smart Door Lock Pro", nameRu:["сяоми смарт дoor лок про", "xiaomi smart door lock pro", "замок умный"], marketplace:"Technodom", seller:"Technodom", price:135000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  /* ================= OFFICE ================= */
  // Printer
  { name:"HP LaserJet Pro M404", nameRu:["хп лазерджет про м404", "hp laserjet pro m404", "принтер"], marketplace:"Kaspi", seller:"HP Store", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"HP LaserJet Pro M404", nameRu:["хп лазерджет про м404", "hp laserjet pro m404", "принтер"], marketplace:"Ozon", seller:"Ozon", price:175000, delivery:2500, term:"4 дня", url:"https://ozon.kz " },

  { name:"Canon PIXMA G3420", nameRu:["канон пиксма г3420", "canon pixma g3420", "принтер"], marketplace:"Kaspi", seller:"Canon", price:85000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Canon PIXMA G3420", nameRu:["канон пиксма г3420", "canon pixma g3420", "принтер"], marketplace:"Wildberries", seller:"WB", price:78000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // Scanner
  { name:"Epson Perfection V600", nameRu:["эпсон перфекшн в600", "epson perfection v600", "сканер"], marketplace:"Kaspi", seller:"Epson Store", price:145000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Epson Perfection V600", nameRu:["эпсон перфекшн в600", "epson perfection v600", "сканер"], marketplace:"Sulpak", seller:"Sulpak", price:138000, delivery:1500, term:"2 дня", url:"https://sulpak.kz " },

  // Projector
  { name:"Xiaomi Mi Smart Projector 2", nameRu:["сяоми ми смарт проектор 2", "xiaomi mi smart projector 2", "проектор"], marketplace:"Kaspi", seller:"Xiaomi", price:285000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Mi Smart Projector 2", nameRu:["сяоми ми смарт проектор 2", "xiaomi mi smart projector 2", "проектор"], marketplace:"Ozon", seller:"Ozon", price:265000, delivery:3000, term:"4 дня", url:"https://ozon.kz " },

  { name:"Epson EH-TW7100", nameRu:["эпсон ен тв7100", "epson eh-tw7100", "проектор"], marketplace:"Kaspi", seller:"Epson", price:685000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Epson EH-TW7100", nameRu:["эпсон ен тв7100", "epson eh-tw7100", "проектор"], marketplace:"Technodom", seller:"Technodom", price:695000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Monitor
  { name:"Samsung Odyssey G9", nameRu:["самсунг одиссеи г9", "samsung odyssey g9", "монитор"], marketplace:"Kaspi", seller:"Samsung Gaming", price:685000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung Odyssey G9", nameRu:["самсунг одиссеи г9", "samsung odyssey g9", "монитор"], marketplace:"Ozon", seller:"Ozon", price:645000, delivery:4000, term:"5 дней", url:"https://ozon.kz " },

  { name:"LG UltraGear 34GN850", nameRu:["лж ультрагир 34жн850", "lg ultragear 34gn850", "монитор"], marketplace:"Kaspi", seller:"LG Gaming", price:485000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"LG UltraGear 34GN850", nameRu:["лж ультрагир 34жн850", "lg ultragear 34gn850", "монитор"], marketplace:"Wildberries", seller:"WB", price:465000, delivery:3000, term:"4 дня", url:"https://wildberries.kz " },

  { name:"Xiaomi Mi Curved Gaming 34", nameRu:["сяоми ми кервд гейминг 34", "xiaomi mi curved gaming 34", "монитор"], marketplace:"Kaspi", seller:"Xiaomi", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Mi Curved Gaming 34", nameRu:["сяоми ми кервд гейминг 34", "xiaomi mi curved gaming 34", "монитор"], marketplace:"Sulpak", seller:"Sulpak", price:175000, delivery:2000, term:"2 дня", url:"https://sulpak.kz " },

  /* ================= ACCESSORIES ================= */
  // Power Bank
  { name:"Xiaomi Power Bank 20000mAh 50W", nameRu:["сяоми павер бэнк 20000 50вт", "xiaomi power bank 20000mah 50w", "павербанк"], marketplace:"Kaspi", seller:"Xiaomi", price:25000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Xiaomi Power Bank 20000mAh 50W", nameRu:["сяоми павер бэнк 20000 50вт", "xiaomi power bank 20000mah 50w", "павербанк"], marketplace:"Ozon", seller:"Ozon", price:22000, delivery:1000, term:"3 дня", url:"https://ozon.kz " },

  { name:"Anker Prime 20000mAh 200W", nameRu:["анкер прайм 20000 200вт", "anker prime 20000mah 200w", "павербанк"], marketplace:"Kaspi", seller:"Anker Store", price:45000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Anker Prime 20000mAh 200W", nameRu:["анкер прайм 20000 200вт", "anker prime 20000mah 200w", "павербанк"], marketplace:"Wildberries", seller:"WB", price:42000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  // Charger
  { name:"Apple 140W USB-C", nameRu:["эпл 140вт усб си", "apple 140w usb-c", "зарядка"], marketplace:"Kaspi", seller:"Apple", price:65000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Apple 140W USB-C", nameRu:["эпл 140вт усб си", "apple 140w usb-c", "зарядка"], marketplace:"Technodom", seller:"Technodom", price:68000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Anker 737 Charger 120W", nameRu:["анкер 737 чарджер 120вт", "anker 737 charger 120w", "зарядка"], marketplace:"Kaspi", seller:"Anker", price:35000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Anker 737 Charger 120W", nameRu:["анкер 737 чарджер 120вт", "anker 737 charger 120w", "зарядка"], marketplace:"Ozon", seller:"Ozon", price:32000, delivery:1000, term:"3 дня", url:"https://ozon.kz " },

  // Cable
  { name:"Apple Thunderbolt 4 Pro Cable", nameRu:["эпл сандерболт 4 про кэйбл", "apple thunderbolt 4 pro cable", "кабель"], marketplace:"Kaspi", seller:"Apple Store", price:45000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Apple Thunderbolt 4 Pro Cable", nameRu:["эпл сандерболт 4 про кэйбл", "apple thunderbolt 4 pro cable", "кабель"], marketplace:"Wildberries", seller:"WB", price:38000, delivery:1000, term:"3 дня", url:"https://wildberries.kz " },

  // Case
  { name:"Apple iPhone 15 Pro Leather Case", nameRu:["эпл айфон 15 про кожаный чехол", "apple iphone 15 pro leather case", "чехол"], marketplace:"Kaspi", seller:"Apple", price:45000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Apple iPhone 15 Pro Leather Case", nameRu:["эпл айфон 15 про кожаный чехол", "apple iphone 15 pro leather case", "чехол"], marketplace:"Ozon", seller:"Ozon", price:38000, delivery:1000, term:"3 дня", url:"https://ozon.kz " },

  // Screen Protector
  { name:"Belkin UltraGlass 2 iPhone 15 Pro", nameRu:["белкин ультрагласс 2 айфон 15 про", "belkin ultraglass 2 iphone 15 pro", "защитное стекло"], marketplace:"Kaspi", seller:"Belkin Store", price:15000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Belkin UltraGlass 2 iPhone 15 Pro", nameRu:["белкин ультрагласс 2 айфон 15 про", "belkin ultraglass 2 iphone 15 pro", "защитное стекло"], marketplace:"Technodom", seller:"Technodom", price:13500, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Tripod
  { name:"DJI Osmo Tripod", nameRu:["диджиай осмо трипод", "dji osmo tripod", "штатив"], marketplace:"Kaspi", seller:"DJI", price:25000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"DJI Osmo Tripod", nameRu:["диджиай осмо трипод", "dji osmo tripod", "штатив"], marketplace:"Ozon", seller:"Ozon", price:22000, delivery:1000, term:"3 дня", url:"https://ozon.kz " },

  // Memory Card
  { name:"SanDisk Extreme Pro 1TB", nameRu:["сандиск экстрим про 1тб", "sandisk extreme pro 1tb", "карта памяти"], marketplace:"Kaspi", seller:"SanDisk Store", price:85000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"SanDisk Extreme Pro 1TB", nameRu:["сандиск экстрим про 1тб", "sandisk extreme pro 1tb", "карта памяти"], marketplace:"Wildberries", seller:"WB", price:78000, delivery:1500, term:"3 дня", url:"https://wildberries.kz " },

  // SSD
  { name:"Samsung T9 2TB", nameRu:["самсунг т9 2тб", "samsung t9 2tb", "ссд"], marketplace:"Kaspi", seller:"Samsung Storage", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Samsung T9 2TB", nameRu:["самсунг т9 2тб", "samsung t9 2tb", "ссд"], marketplace:"Ozon", seller:"Ozon", price:115000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  { name:"SanDisk Extreme Portable 2TB", nameRu:["сандиск экстрим портбл 2тб", "sandisk extreme portable 2tb", "ссд"], marketplace:"Kaspi", seller:"SanDisk", price:95000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"SanDisk Extreme Portable 2TB", nameRu:["сандиск экстрим портбл 2тб", "sandisk extreme portable 2tb", "ссд"], marketplace:"Sulpak", seller:"Sulpak", price:92000, delivery:1500, term:"2 дня", url:"https://sulpak.kz " },

  // Hub
  { name:"Anker 777 Thunderbolt Dock", nameRu:["анкер 777 сандерболт док", "anker 777 thunderbolt dock", "док станция"], marketplace:"Kaspi", seller:"Anker Pro", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Anker 777 Thunderbolt Dock", nameRu:["анкер 777 сандерболт док", "anker 777 thunderbolt dock", "док станция"], marketplace:"Technodom", seller:"Technodom", price:195000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  // Webcam
  { name:"Logitech Brio 4K", nameRu:["лоджитек брио 4к", "logitech brio 4k", "вебкамера"], marketplace:"Kaspi", seller:"Logitech Store", price:95000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Logitech Brio 4K", nameRu:["лоджитек брио 4к", "logitech brio 4k", "вебкамера"], marketplace:"Ozon", seller:"Ozon", price:88000, delivery:2000, term:"4 дня", url:"https://ozon.kz " },

  // Microphone
  { name:"Blue Yeti X", nameRu:["блу йети икс", "blue yeti x", "микрофон"], marketplace:"Kaspi", seller:"Blue Store", price:85000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Blue Yeti X", nameRu:["блу йети икс", "blue yeti x", "микрофон"], marketplace:"Wildberries", seller:"WB", price:78000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // Keyboard
  { name:"Logitech MX Mechanical", nameRu:["лоджитек механикал", "logitech mx mechanical", "клавиатура"], marketplace:"Kaspi", seller:"Logitech", price:125000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Logitech MX Mechanical", nameRu:["лоджитек механикал", "logitech mx mechanical", "клавиатура"], marketplace:"Sulpak", seller:"Sulpak", price:118000, delivery:1500, term:"2 дня", url:"https://sulpak.kz " },

  { name:"Keychron Q1 Pro", nameRu:["кейкрон q1 про", "keychron q1 pro", "клавиатура"], marketplace:"Kaspi", seller:"Keychron Store", price:185000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Keychron Q1 Pro", nameRu:["кейкрон q1 про", "keychron q1 pro", "клавиатура"], marketplace:"Ozon", seller:"Ozon", price:175000, delivery:2500, term:"5 дней", url:"https://ozon.kz " },

  // Mouse
  { name:"Logitech MX Master 3S", nameRu:["лоджитек мх мастер 3с", "logitech mx master 3s", "мышь"], marketplace:"Kaspi", seller:"Logitech Store", price:65000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Logitech MX Master 3S", nameRu:["лоджитек мх мастер 3с", "logitech mx master 3s", "мышь"], marketplace:"Technodom", seller:"Technodom", price:68000, delivery:0, term:"Самовывоз", url:"https://technodom.kz " },

  { name:"Razer DeathAdder V3 Pro", nameRu:["рейзер дезаддер v3 про", "razer deathadder v3 pro", "мышь"], marketplace:"Kaspi", seller:"Razer Store", price:85000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Razer DeathAdder V3 Pro", nameRu:["рейзер дезаддер v3 про", "razer deathadder v3 pro", "мышь"], marketplace:"Wildberries", seller:"WB", price:78000, delivery:2000, term:"3 дня", url:"https://wildberries.kz " },

  // Mouse Pad
  { name:"Razer Firefly V2 Pro", nameRu:["рейзер файрфлай v2 про", "razer firefly v2 pro", "коврик"], marketplace:"Kaspi", seller:"Razer", price:35000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Razer Firefly V2 Pro", nameRu:["рейзер файрфлай v2 про", "razer firefly v2 pro", "коврик"], marketplace:"Ozon", seller:"Ozon", price:32000, delivery:1000, term:"3 дня", url:"https://ozon.kz " },

  // Backpack
  { name:"Incase ICON Backpack", nameRu:["инкейс айкон бэкпэк", "incase icon backpack", "рюкзак"], marketplace:"Kaspi", seller:"Incase Store", price:45000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Incase ICON Backpack", nameRu:["инкейс айкон бэкпэк", "incase icon backpack", "рюкзак"], marketplace:"Sulpak", seller:"Sulpak", price:42000, delivery:1500, term:"2 дня", url:"https://sulpak.kz " },

  // Stand
  { name:"Twelve South HiRise 3 Deluxe", nameRu:["твелв саут хайрайз 3 делюкс", "twelve south hirise 3 deluxe", "подставка"], marketplace:"Kaspi", seller:"Twelve South", price:65000, delivery:0, term:"1 день", url:"https://kaspi.kz " },
  { name:"Twelve South HiRise 3 Deluxe", nameRu:["твелв саут хайрайз 3 делюкс", "twelve south hirise 3 deluxe", "подставка"], marketplace:"Ozon", seller:"Ozon", price:58000, delivery:2000, term:"5 дней", url:"https://ozon.kz " }
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
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:20px;color:#64748b;">
      Ничего не найдено по запросу "${rawQuery}"<br>
      <small>Попробуйте: айфон, самсунг, макбук, пс5, сони, дрон, робот пылесос, дайсон</small>
    </td></tr>`;
    return;
  }

  // Сортировка по итоговой цене
  filtered.sort((a, b) => (a.price + a.delivery) - (b.price + b.delivery));

  filtered.forEach((p, index) => {
    const total = p.price + p.delivery;
    const isBestPrice = index === 0;

    // Исправленные стили для лучшей цены — тёмный текст на светлом фоне
    const rowStyle = isBestPrice ? 'background: linear-gradient(90deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1)); border-left: 4px solid #10b981;' : '';
    const priceStyle = isBestPrice ? 'color: #10b981; font-weight: 800; font-size: 18px;' : 'color: #e2e8f0; font-weight: 700;';
    const nameStyle = isBestPrice ? 'color: #0f172a; font-weight: 700;' : 'color: #e2e8f0;';
    const cellStyle = isBestPrice ? 'color: #334155; font-weight: 600;' : 'color: #94a3b8;';

    tbody.innerHTML += `
      <tr style="${rowStyle}">
        <td style="${nameStyle} padding: 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.1);">
          ${isBestPrice ? '👑 ' : ''}${p.name}
        </td>
        <td style="${cellStyle} padding: 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.1);">${p.marketplace}</td>
        <td style="${cellStyle} padding: 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.1);">${p.seller}</td>
        <td style="${cellStyle} padding: 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.1);">${p.price.toLocaleString()} ₸</td>
        <td style="${cellStyle} padding: 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.1);">${p.delivery === 0 ? 'Бесплатно' : p.delivery.toLocaleString() + ' ₸'}</td>
        <td style="${cellStyle} padding: 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.1);">${p.term}</td>
        <td style="${priceStyle} padding: 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.1);">
          ${total.toLocaleString()} ₸
          ${isBestPrice ? ' <span style="background: #10b981; color: white; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-left: 8px;">Лучшая цена</span>' : ''}
        </td>
        <td style="padding: 20px; border-bottom: 1px solid rgba(99, 102, 241, 0.1);">
          <a href="${p.url}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; padding: 10px 20px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);">Купить →</a>
        </td>
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
