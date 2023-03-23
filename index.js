const { firestore } = require("firebase-admin");
var admin = require("firebase-admin");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
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

const testData = {
  id: 1,
  name: "testData",
};

// db.collection("testData").doc(testData.id.toString()).set(testData);

db.collection("testData")
  .doc("1")
  .delete()
  .then((res) => {
    console.log("success");
  });

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
