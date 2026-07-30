import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {

getAuth,

GoogleAuthProvider,

signInWithPopup,

signOut,

onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0mmrQJlriTLEd8xGPLNHbUChnla769zE",
  authDomain: "gamer-maid.firebaseapp.com",
  projectId: "gamer-maid",
  storageBucket: "gamer-maid.firebasestorage.app",
  messagingSenderId: "221352502412",
  appId: "1:221352502412:web:af39371a216f56557f87a9",
  measurementId: "G-XD1F6N2PVH"
};

const app=initializeApp(firebaseConfig);

const auth=getAuth(app);

const provider=new GoogleAuthProvider();

const login=document.getElementById("login");

const logout=document.getElementById("logout");

login.onclick=()=>{

signInWithPopup(auth,provider);

};

logout.onclick=()=>{

signOut(auth);

};

onAuthStateChanged(auth,user=>{

if(user){

login.style.display="none";

document.getElementById("user").classList.remove("hidden");

document.getElementById("photo").src=user.photoURL;

document.getElementById("name").innerText=user.displayName;

document.getElementById("email").innerText=user.email;

}else{

login.style.display="block";

document.getElementById("user").classList.add("hidden");

}

});
