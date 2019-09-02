import * as firebase from "firebase";
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  // appId: "1:299168579997:web:3197eafbf8a2619c"
};
firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export { googleAuthProvider, firebase, database as default };
// database.ref("expenses").on("value", (snapshot) => {
//   let expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });
// database.ref().on("value", (snapshot) => {
//   const {
//     name,
//     job: { title },
//     job: { company }
//   } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}`);
// });

// setTimeout(() => {
//   database.ref("name").set("wael");
// }, 4000);

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((err) => console.log("error", err));
// database
//   .ref()
//   .set({
//     name: "wael laataoui",
//     age: 21,
//     stressLevel: 6,
//     job: {
//       title: "developer",
//       company: "google"
//     },
//     location: {
//       city: "moknine",
//       country: "tunisia"
//     }
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("remove succeeded");
//   })
//   .catch((err) => {
//     console.log("error");
//   });
// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "seattle"
// });
// database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// });
// setTimeout(() => {
//   database.ref("age").set(22);
// }, 3500);
