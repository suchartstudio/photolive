import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDMptdLpLEdbeVFKZj82M0gyoV2m_2y5Pk",
    authDomain: "suchartstudio-9a78d.firebaseapp.com",
    databaseURL: "https://suchartstudio-9a78d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "suchartstudio-9a78d",
    storageBucket: "suchartstudio-9a78d.firebasestorage.app",
    messagingSenderId: "953369646185",
    appId: "1:953369646185:web:ce5bf2a66ab6bb016ebef8",
    measurementId: "G-7ZCM16HTJD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);