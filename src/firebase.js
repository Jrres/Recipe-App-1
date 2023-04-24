// Import the functions you need from the SDKs you need
import  firebase from "firebase/compat/app";
import "firebase/compat/auth"  
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database"
import "firebase/compat/firestore"
import "https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app =firebase.initializeApp({
  apiKey: "AIzaSyBn0B9fK-MSU0KiZjjGo-OkxAOpJ1yQUUc",
  authDomain: "recipe-app-1b4a0.firebaseapp.com",
  databaseURL: "https://recipe-app-1b4a0-default-rtdb.firebaseio.com",
  projectId: "recipe-app-1b4a0",
  storageBucket: "recipe-app-1b4a0.appspot.com",
  messagingSenderId: "408386340600",
  appId: "1:408386340600:web:502437397ae9f74852dd0d",
  measurementId: "G-HDYRJW8JEH"
})

// Initialize Firebase
const analytics = getAnalytics(app);
export const firestore = firebase.firestore()
export const database = getDatabase(app);
export const auth = app.auth()
export default app
 