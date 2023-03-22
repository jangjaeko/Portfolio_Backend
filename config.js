const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDL0iyArMIaHz9Lv3-Xr2h1ZAEPUAxpe-0",
  authDomain: "jjh-portfolio.firebaseapp.com",
  databaseURL: "https://jjh-portfolio-default-rtdb.firebaseio.com",
  projectId: "jjh-portfolio",
  storageBucket: "jjh-portfolio.appspot.com",
  messagingSenderId: "568567761602",
  appId: "1:568567761602:web:76f9947c2f0ffb356b895b",
  measurementId: "G-DVGPSS0FVJ",
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const db = firebase.firestore();
const User = db.collection("Users");

module.exports = User;
