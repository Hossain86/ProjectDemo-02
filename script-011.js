  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  
  import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
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

  const auth=getAuth();

  var email=document.getElementById("login-email");
  var passwords=document.getElementById("login-password");

  var loginsubbutton=document.querySelector(".login-sub-button");

  loginsubbutton.onclick= function submitLogin(e) {
    e.preventDefault();
    var obj = {
        email: email.value,
        passwords: passwords.value,
    };
    signInWithEmailAndPassword(auth, obj.email, obj.passwords)

    .then(function(userCredential) {
        var user = userCredential.user; // Get the user from the userCredential
        console.log(user.uid);
        alert("Logged Successfully");

        // let allhtmlcode=document.querySelector(".allhtmlcode");
        // document.querySelector(".login-all-section").classList.add("inactiveLogin");
        // allhtmlcode.classList.add("activeallhtml");
        window.location.replace('welcome.html');

    })

    .catch(function(err) {
        window.location.replace('index.html');
        alert("login error" + err);
        console.log("Unsuccessful")
    });
}

