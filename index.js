const { firestore } = require("firebase-admin");
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jjh-portfolio-default-rtdb.firebaseio.com",
});

const db = firestore();

let testRef = db.collection("test");

testRef.get().then((querySnapshot) => {
  querySnapshot.forEach((document) => {
    console.log(document.data());
  });
});
