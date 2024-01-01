"use strict";
const contentHolderDiv = document.querySelector(".content");
const signOutBtn = document.querySelector(".signout-btn button");
let userData = [];
let userLoggedInfo = {};
let userLogin = {};
if(sessionStorage.getItem("userLogin") == null) {
    userLogin.FirstTimeRegistered = false;
    userLogin.isUserLoggedIn = false;
    sessionStorage.setItem("userLogin",JSON.stringify(userLogin));
}
else {
    userLogin = JSON.parse(sessionStorage.getItem("userLogin"));
}
if(localStorage.getItem("users")!= null) {
    userData = JSON.parse(localStorage.getItem("users"));
}
if(localStorage.getItem("userloggedin")!= null) {
    userLoggedInfo = JSON.parse(localStorage.getItem("userloggedin"));
}
let displayWelcomeData = function () {
    let cartona = ``;
    let tempUserName = "";
    let tempUserEmail = "";
    if(userLogin.FirstTimeRegistered === true && userLogin.isUserLoggedIn === true) {
        tempUserName = userData[userData.length-1].name;
        tempUserEmail = userData[userData.length-1].email;
        cartona = `
            <p class="text-center mb-2">Hello <span>${tempUserName}</span>, Your email is <span>${tempUserEmail}</span>, you just registered to my website, hope you have a good day!</p>
        `;
        contentHolderDiv.innerHTML = cartona;
    }
    else if (userLogin.FirstTimeRegistered === false && userLogin.isUserLoggedIn === false) {
        cartona = `
        <p class="text-center mb-2">Hello, you didn't register nor logged in, you have no access here, redirecting you back to the main page after 5 seconds</p>
        `;
        contentHolderDiv.innerHTML = cartona;
        setTimeout(() => {
            window.location.replace("index.html");
        },5000);
    }
    else if (userLogin.FirstTimeRegistered === false && userLogin.isUserLoggedIn === true) {
        tempUserName = userLoggedInfo.name;
        tempUserEmail = userLoggedInfo.email;
        cartona = `
            <p class="text-center mb-2">Welcome back <span>${tempUserName}</span>, 
            Your email is <span>${tempUserEmail}</span>, you logged in, hope you have a good day!</p>
        `;
        contentHolderDiv.innerHTML = cartona;
    }
}
let logUserOut = function () {
    userLogin.FirstTimeRegistered = false;
    userLogin.isUserLoggedIn = false;
    sessionStorage.setItem("userLogin",JSON.stringify(userLogin));
    userLoggedInfo.name = "";
    userLoggedInfo.email = "";
    localStorage.setItem("userloggedin",JSON.stringify(userLoggedInfo));
    location.href = "index.html";
}
displayWelcomeData();
signOutBtn.addEventListener("click",logUserOut);