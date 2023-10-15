import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4_wxAByWk4sGUkgktMJHg_fc4A4-yczE",
    authDomain: "whatsapp-clone-974f2.firebaseapp.com",
    projectId: "whatsapp-clone-974f2",
    storageBucket: "whatsapp-clone-974f2.appspot.com",
    messagingSenderId: "188622226611",
    appId: "1:188622226611:web:d09c910e9675cda552dcc6",
    measurementId: "G-5K52WT73X3"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);