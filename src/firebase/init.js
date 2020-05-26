import firebase from "firebase";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyCCPJtfeCiBPziuUnZmZk-MSbCHS02OCUc",
  authDomain: "covidonnepal.firebaseapp.com",
  databaseURL: "https://covidonnepal.firebaseio.com",
  projectId: "covidonnepal",
  storageBucket: "covidonnepal.appspot.com",
  messagingSenderId: "226632800623",
  appId: "1:226632800623:web:ae8d322adebacb2a0b709a",
  measurementId: "G-5XJB4P7BJZ"
};

//firebase.analytics();
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
