import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6lkyILRGD3DBvdgw6VudteuKW7kEG8fE",
  authDomain: "easy-tour-4f498.firebaseapp.com",
  projectId: "easy-tour-4f498",
  storageBucket: "easy-tour-4f498.appspot.com",
  messagingSenderId: "953181312190",
  appId: "1:953181312190:web:39330e2faf0d3d70dafaef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;