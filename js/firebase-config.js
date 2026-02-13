// js/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForDiploma123456789",
  authDomain: "pricecompare-kz.firebaseapp.com",
  projectId: "pricecompare-kz",
  storageBucket: "pricecompare-kz.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

// Инициализация Firebase (замени на реальные данные из консоли Firebase)
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
