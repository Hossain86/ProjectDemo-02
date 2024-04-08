  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  
  import { getAuth, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  //import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
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
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email;
    }
})

const btn=document.querySelector(".btn");
btn.onclick= function logout(){
    auth.signOut(auth).then(() => {
        // Sign-out successful.
        alert('Signout Successfull');
      }).catch((error) => {
        // An error happened.
        alert("Unsuccessfull"+ error);
      });
}










  