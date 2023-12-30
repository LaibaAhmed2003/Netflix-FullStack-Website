import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAY7rKKGp_Kf7_vHzjfa2e_zkzPlbuboBc",
  authDomain: "netflix-mern-project-5c5b2.firebaseapp.com",
  projectId: "netflix-mern-project-5c5b2",
  storageBucket: "netflix-mern-project-5c5b2.appspot.com",
  messagingSenderId: "541451769733",
  appId: "1:541451769733:web:1697671036cc15689e56ec",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
