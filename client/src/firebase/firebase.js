import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const prodConfig = {
    apiKey: "AIzaSyAK5iTSYpkk-BM06DW2MCpD344F4SQQSew",
    authDomain: "teacherslounge-45a57.firebaseapp.com",
    databaseURL: "https://teacherslounge-45a57.firebaseio.com",
    projectId: "teacherslounge-45a57",
    storageBucket: "teacherslounge-45a57.appspot.com",
    messagingSenderId: "1054109805219"
  };

const devConfig = {
    apiKey: "AIzaSyBKUP0Id-QWhVkdVMtQ0m0lECK2AJ4jfso",
    authDomain: "test-tl-50332.firebaseapp.com",
    databaseURL: "https://test-tl-50332.firebaseio.com",
    projectId: "test-tl-50332",
    storageBucket: "",
    messagingSenderId: "143208601519"
}

const config = process.env.NODE_ENV === 'production'
 ?prodConfig
 :devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
  const db = firebase.database();
  const auth = firebase.auth();
  const storage = firebase.storage();
  export {
     firebase, db, auth, storage as default
  };