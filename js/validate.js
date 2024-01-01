"use strict";
let usersArray = [];
let userObject = {
    name: "",
    password: "",
    email: "",
};
if(localStorage.getItem("users") != null) {
    usersArray = JSON.parse(localStorage.getItem("users"));
}
else {
    usersArray.push(userObject);
}
let validateEmail = function () {
    let regex = /[a-z0-9]@(gmail|yahoo|hotmail).com$/gm;
    if(regex.test(userEmail.value) == true) {
        return true;
    }
    else return false;
}
let validateUserName = function () {
    let regex = /[A-Za-z0-9]{1,9}$/gm;
    if(regex.test(userName.value) == true) {
        return true;
    }
    else return false;
}
let validatePassword = function () {
    let regex = /^[A-Z][A-Za-z0-9]{1,9}$/gm
    if(regex.test(userPassword.value) == true) {
        return true;
    }
    else {
        window.alert("Please Enter password that starts with capital char");
        return false;
    }
}
let validateRepeatedUserName = function () {
    for (let i=0; i<usersArray.length; i++) {
        if(usersArray[i].name == userName.value) {
            window.alert("Repeated User Name!");
            return true;
        }
        else return false;
    }
}
let validateRepeatedUserEmail = function () {
    for (let i=0; i<usersArray.length; i++) {
        if(usersArray[i].email == userEmail.value) {
            window.alert("Repeated User Email!");
            return true;
        }
        else return false;
    }
}
