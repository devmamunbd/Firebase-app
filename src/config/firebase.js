import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-aBg5vAnamzjmhE7IPolN3h-pFlUNjew",
  authDomain: "my-fir-project-1.firebaseapp.com",
  projectId: "my-fir-project-1",
  storageBucket: "my-fir-project-1.appspot.com",
  messagingSenderId: "1089769332600",
  appId: "1:1089769332600:web:094f3367957e54d584b28d"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)