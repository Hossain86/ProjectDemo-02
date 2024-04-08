// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT_nTb-N1H8CdKf4OrUHwZYRKzLPI1kT8",
  authDomain: "loginresistration.firebaseapp.com",
  projectId: "loginresistration",
  storageBucket: "loginresistration.appspot.com",
  messagingSenderId: "912766266396",
  appId: "1:912766266396:web:2a95c6227133c41dab83d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

var name=document.getElementById("name");
var email=document.getElementById("email");
var passwords=document.getElementById("password");

var subRegistrationBtn=document.querySelector(".sub-button")

subRegistrationBtn.onclick=function submitRegistration(e){
  e.preventDefault();
  var obj={
    name: name.value, // Use name.value instead of firstname.value and lastname.value
    email: email.value,
    password: passwords.value, // Use password.value instead of passwords.value
  };
  
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    alert("SignUp Successful");
    window.location.reload();
  })
  .catch(function(err){
    alert("Error: " + err.message);
  });
}

