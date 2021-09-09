import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIRE_APIKEY,
  authDomain: process.env.FIRE_AUTH,
  projectId: "devlatinos",
  storageBucket: "devlatinos.appspot.com",
  messagingSenderId: process.env.FIRE_MSG, 
  appId: process.env.FIRE_APPID,
  measurementId: process.env.FIRE_ME
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);