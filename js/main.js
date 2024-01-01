"use strict";
const userName = document.querySelector(".signup-username input");
const userEmail = document.querySelector(".signup-email input");
const userPassword = document.querySelector(".signup-password input");
const signupBtn = document.querySelector(".signup-btn button");
let users = [];
let userLogin = {
    isUserLoggedIn: false,
    FirstTimeRegistered: false,
};
if(localStorage.getItem("users")!= null) {
    users = JSON.parse(localStorage.getItem("users"));
}
else {
    users.name = "";
    users.password = "";
    users.email = "";
}
if(sessionStorage.getItem("userLogin") == null) {
    sessionStorage.setItem("userLogin",JSON.stringify(userLogin));
}
let registerUserData = function () {
    if(validateUserName() == true  && validatePassword() == true && validateEmail() == true && validateRepeatedUserName () == false 
    && validateRepeatedUserEmail() == false) {
        let userData = {
            name: userName.value,
            password: userPassword.value,
            email: userEmail.value,
        }
        users.push(userData);
        localStorage.setItem("users",JSON.stringify(users));
        userLogin.isUserLoggedIn = true;
        userLogin.FirstTimeRegistered = true;
        sessionStorage.setItem("userLogin",JSON.stringify(userLogin));
        sendUserToHomePage();
    }
    else {
        alert("Wrong Inputs, please re-check your values!");
    }
}
let sendUserToHomePage = function () {
    window.location.replace("home.html");
}
signupBtn.addEventListener("click",registerUserData);

