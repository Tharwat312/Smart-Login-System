"use strict";
const userName = document.querySelector(".signup-username input");
const userPassword = document.querySelector(".signup-password input");
const LogInBtn = document.querySelector(".signup-btn button");
let users = [];
let userLoggedInfo = {};
let userLogin = {};
if(localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}
let clearForm = function () {
    userName.value = "";
    userPassword.value = "";
}
let logUserIn = function () {
    for (let i=0; i<users.length; i++) {
        if(users[i].name == userName.value && users[i].password == userPassword.value) {
            userLoggedInfo.name = users[i].name;
            userLoggedInfo.email = users[i].email;
            localStorage.setItem("userloggedin",JSON.stringify(userLoggedInfo));
            userLogin.FirstTimeRegistered = false;
            userLogin.isUserLoggedIn = true;
            sessionStorage.setItem("userLogin",JSON.stringify(userLogin));
            window.location.replace("home.html");
            console.log("Logged in");
        }
    }
    if (userLogin.isUserLoggedIn != true) {
        clearForm();
        window.alert("Wrong inputs, please check your username and password");
    }
    
}
LogInBtn.addEventListener("click",logUserIn);