import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCvYekFdc9pmEMzmMdEK0cxMWGxxzADY18",
  authDomain: "olx-clone-dac32.firebaseapp.com",
  projectId: "olx-clone-dac32",
  storageBucket: "olx-clone-dac32.appspot.com",
  messagingSenderId: "446430702826",
  appId: "1:446430702826:web:6a30b3dff84513368dfb93"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
