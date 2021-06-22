import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For production
const app = firebase.initializeApp({
  apiKey: "AIzaSyDRThStYSBq5P2DWJExJJmZ4j2TgmrYtP8",
  authDomain: "knox-drive-production.firebaseapp.com",
  projectId: "knox-drive-production",
  storageBucket: "knox-drive-production.appspot.com",
  messagingSenderId: "89891201731",
  appId: "1:89891201731:web:054e2651f8c6ba62567876",
});

// For developement
// const app = firebase.initializeApp({
//   apiKey: "AIzaSyBjsDMKT4OqxrrpbBQyHb5fQHv2hj2PPh4",
//   authDomain: "knox-drive-developement.firebaseapp.com",
//   projectId: "knox-drive-developement",
//   storageBucket: "knox-drive-developement.appspot.com",
//   messagingSenderId: "485993244362",
//   appId: "1:485993244362:web:59007e59746719e38ff633",
// });

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const auth = app.auth();

export const storage = app.storage();
export default app;
