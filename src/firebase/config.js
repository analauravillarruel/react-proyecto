import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTrPUwFHcOjWKD2qE4PdRU3C-IFxu4hHU",
  authDomain: "mireact-app.firebaseapp.com",
  projectId: "mireact-app",
  storageBucket: "mireact-app.appspot.com",
  messagingSenderId: "9162151168",
  appId: "1:9162151168:web:1606d141c4ae79fdf84fe5"
};

// Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
  return firebase.firestore(app)
}