import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCXwnTtubznrQFhKFbPMbW1D2ZtUNyEESc",
  authDomain: "instagram-clone-ee206.firebaseapp.com",
  projectId: "instagram-clone-ee206",
  storageBucket: "instagram-clone-ee206.appspot.com",
  messagingSenderId: "242009681963",
  appId: "1:242009681963:web:967f12efb7065276d7fa6e"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//We seed the databse just once 
//seedDatabase(firebase);

export { firebase, FieldValue };