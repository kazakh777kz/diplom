// js/user-data.js

// Добавить в избранное
async function addToFavorites(product) {
  const user = auth.currentUser;
  if (!user) {
    alert('Войдите, чтобы добавить в избранное');
    return false;
  }
  
  try {
    const userRef = db.collection('users').doc(user.uid);
    await userRef.update({
      favorites: firebase.firestore.FieldValue.arrayUnion(product)
    });
    return true;
  } catch (error) {
    console.error('Ошибка:', error);
    return false;
  }
}

// Удалить из избранного
async function removeFromFavorites(productName) {
  const user = auth.currentUser;
  if (!user) return;
  
  const userRef = db.collection('users').doc(user.uid);
  const doc = await userRef.get();
  const favorites = doc.data().favorites || [];
  
  const updated = favorites.filter(p => p.name !== productName);
  await userRef.update({ favorites: updated });
}

// Сохранить поиск в историю
async function saveSearch(query) {
  const user = auth.currentUser;
  if (!user || !query.trim()) return;
  
  const userRef = db.collection('users').doc(user.uid);
  const searchItem = {
    query: query,
    timestamp: new Date(),
    resultsCount: document.querySelectorAll('#results tr').length
  };
  
  // Ограничиваем историю 20 записями
  const doc = await userRef.get();
  let history = doc.data().searchHistory || [];
  history.unshift(searchItem);
  if (history.length > 20) history = history.slice(0, 20);
  
  await userRef.update({ searchHistory: history });
}

// Загрузить данные пользователя
async function loadUserData(uid) {
  const doc = await db.collection('users').doc(uid).get();
  const data = doc.data();
  
  if (data) {
    renderFavorites(data.favorites || []);
    renderHistory(data.searchHistory || []);
  }
}

// Отрисовать избранное
function renderFavorites(favorites) {
  const container = document.getElementById('favoritesList');
  if (!container) return;
  
  if (favorites.length === 0) {
    container.innerHTML = '<p style="color: #64748b;">Нет избранных товаров</p>';
    return;
  }
  
  container.innerHTML = favorites.map(p => `
    <div style="background: rgba(30, 41, 59, 0.8); padding: 15px; border-radius: 12px; margin-bottom: 10px; border: 1px solid rgba(99, 102, 241, 0.2);">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong style="color: #e2e8f0;">${p.name}</strong>
          <div style="color: #94a3b8; font-size: 14px;">${p.marketplace} • ${p.price.toLocaleString()} ₸</div>
        </div>
        <button onclick="removeFromFavorites('${p.name}')" style="background: #ef4444; color: white; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer;">✕</button>
      </div>
    </div>
  `).join('');
}

// Отрисовать историю
function renderHistory(history) {
  const container = document.getElementById('historyList');
  if (!container) return;
  
  if (history.length === 0) {
    container.innerHTML = '<p style="color: #64748b;">История пуста</p>';
    return;
  }
  
  container.innerHTML = history.map(h => `
    <div style="background: rgba(30, 41, 59, 0.8); padding: 12px 15px; border-radius: 10px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="setSearch('${h.query}'); searchProducts();">
      <span style="color: #e2e8f0;">🔍 ${h.query}</span>
      <span style="color: #64748b; font-size: 12px;">${new Date(h.timestamp.toDate()).toLocaleDateString()}</span>
    </div>
  `).join('');
}
