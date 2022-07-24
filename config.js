import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3xvzw_FoOxnJRzUYyyeva0QAMwFPRwzI",
  authDomain: "c-60-attendance-app.firebaseapp.com",
  projectId: "c-60-attendance-app",
  storageBucket: "c-60-attendance-app.appspot.com",
  messagingSenderId: "423520171558",
  appId: "1:423520171558:web:6e84db94a9c562d42418e7",
  measurementId: "G-LSBC4ZVR1K"
};
//initialize your database
let app=firebase.initializeApp(firebaseConfig)
 export default firebase.database()
 

  