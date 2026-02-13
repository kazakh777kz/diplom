// js/auth.js

// Регистрация
async function register(email, password, name) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    await userCredential.user.updateProfile({ displayName: name });
    
    // Создаём документ пользователя в Firestore
    await db.collection('users').doc(userCredential.user.uid).set({
      name: name,
      email: email,
      createdAt: new Date(),
      favorites: [],
      searchHistory: []
    });
    
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Вход
async function login(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Выход
async function logout() {
  try {
    await auth.signOut();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Проверка состояния авторизации
auth.onAuthStateChanged((user) => {
  updateUI(user);
});

function updateUI(user) {
  const authSection = document.getElementById('authSection');
  const userSection = document.getElementById('userSection');
  const userName = document.getElementById('userName');
  
  if (user) {
    if (authSection) authSection.style.display = 'none';
    if (userSection) userSection.style.display = 'flex';
    if (userName) userName.textContent = user.displayName || user.email;
    
    // Загружаем избранное и историю
    loadUserData(user.uid);
  } else {
    if (authSection) authSection.style.display = 'flex';
    if (userSection) userSection.style.display = 'none';
  }
}
