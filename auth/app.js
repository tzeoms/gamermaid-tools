import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {

getAuth,

GoogleAuthProvider,

signInWithPopup,

signOut,

onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig={

PASTE_YOUR_FIREBASE_CONFIG_HERE

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
