
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbrOQLFboD_rCPCTB74rKqyOBwztQxj3I",
    authDomain: "fb-mini-bbb18.firebaseapp.com",
    projectId: "fb-mini-bbb18",
    storageBucket: "fb-mini-bbb18.appspot.com",
    messagingSenderId: "136445915210",
    appId: "1:136445915210:web:e31d30b6d0fcf1fadc76b3",
    measurementId: "G-M3SREXKZ52"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} 
  export default db

