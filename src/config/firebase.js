import Firebase from 'firebase/app'
import 'firebase/database'
 let config = {
    apiKey: "AIzaSyC7Cth1fPdXc5CnGGloOXpGL7dKe3MpFQQ",
    authDomain: "backbase-exam-app.firebaseapp.com",
    databaseURL: "https://backbase-exam-app.firebaseio.com",
    projectId: "backbase-exam-app",
    storageBucket: "backbase-exam-app.appspot.com",
    messagingSenderId: "1036545621854",
    appId: "1:1036545621854:web:74d8da8fd0a73f24"
  };
let app = Firebase.initializeApp(config)
export const database = app.database()