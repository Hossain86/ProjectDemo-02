
function registration() {
  document.querySelector(".registration-all-section").classList.add("activeRegistration");
  document.querySelector(".login-all-section").classList.add("inactiveLogin");

}

function login() {
  document.querySelector(".registration-all-section").classList.remove("activeRegistration");
  document.querySelector(".login-all-section").classList.remove("inactiveLogin");
}

// function submitLogin() {
//   let email = document.getElementById('email').value;
//   let password = document.getElementById('password').value;
//   // Here you can perform login logic (e.g., send request to server)
//   console.log("Login:", email, password);
// }

// function submitRegistration() {
//   let email = document.getElementById('email').value;
//   let name = document.getElementById('name').value;
//   let password = document.getElementById('password').value;
//   let confirmPassword = document.getElementById('confirmPassword').value;

  
//   // Perform validation here
//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   // Here you can perform registration logic (e.g., send request to server)
//   console.log("Registration:", email, name, password);
// }
