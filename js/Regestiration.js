//import module
import {userNamedValidation, passwordValidation, phoneValidation, personNameValidation, adressValidation, emailValidation, personalIdValidation} from './formValidation.js'

// User Name Validation
document.getElementById("username").onblur=function() {
    try {
        userNamedValidation(this.value);
        this.nextElementSibling.innerText= " ";
        document.getElementById("username").style.border="1px solid black";
    }
    catch(e) {
        this.nextElementSibling.innerText =  e.message;
        document.getElementById("username").style.border="2px solid red";
    }
}
//first name validation
document.getElementById("fname").onblur= function() {
    try {
        personNameValidation(this.value);
        this.nextElementSibling.innerText=" ";
        document.getElementById("fname").style.border="1px solid black";
    }
    catch(e){
        this.nextElementSibling.innerText= e.message;
        document.getElementById("fname").style.border="2px solid red";
    }
}

//last name validation 
document.getElementById("lname").onblur = function () {
    try {
        personNameValidation(this.value);
        this.nextElementSibling.innerText=" ";
        document.getElementById("lname").style.border="1px solid black";
    }
    catch(e) {
        this.nextElementSibling.innerText= e.message;
        document.getElementById("lname").style.border="2px solid red";


    }
}

//E-mail validation
document.getElementById("email").onblur=function () {
    try {
        emailValidation(this.value);
        this.nextElementSibling.innerText=" ";
        document.getElementById("email").style.border="1px solid black";
    }
    catch(e) {
        this.nextElementSibling.innerText= e.message;
        document.getElementById("email").style.border="2px solid red";
    }
}

//password validation 
document.getElementById("password").onblur = function () {
    try {
        passwordValidation(this.value);
        this.nextElementSibling.innerText=" ";
        document.getElementById("password").style.border="1px solid black";
    }
    catch(e) {
        this.nextElementSibling.innerText= e.message;
        document.getElementById("password").style.border="2px solid red";    
    }
}

document.getElementById("rePassword").onblur = function () {
    var password1=document.getElementById("password").value;
    var password2=document.getElementById("rePassword").value;
    try {
        passwordValidation(this.value);
        if(password1 == password2){
            this.nextElementSibling.innerText=" ";
            document.getElementById("rePassword").style.border="1px solid black";
        }
        else{
            this.nextElementSibling.innerText= "Enter the same";
            document.getElementById("rePassword").style.border="2px solid red"; 
        }
    }
    catch(e) {
        this.nextElementSibling.innerText= e.message;
        document.getElementById("rePassword").style.border="2px solid red";    
    }
}

// phone validation 
document.getElementById("phone").onblur = function () {
    try {
        phoneValidation(this.value);
        this.nextElementSibling.innerText=" ";
        document.getElementById("phone").style.border="1px solid black";
    }
    catch(e) {
        this.nextElementSibling.innerText= e.message;
        document.getElementById("phone").style.border="2px solid red";    
    }
}
// birthdate validation function 
document.getElementById("birthdate").onblur = function () {
    if(this.value) {
        this.nextElementSibling.innerText=" ";
        document.getElementById("birthdate").style.border="1px solid black";
    }
    else {
        this.nextElementSibling.innerText= "Enter Your Birthdate";
        document.getElementById("birthdate").style.border="2px solid red"; 
        
    }
}
// select user function 
document.getElementById("user12").onclick = function () {
    document.getElementById("user__info").style.display="block";
    document.getElementById("technical12").style.display="none";
}
document.getElementById("technical12").onclick = function () {
    document.getElementById("technical__info").style.display="block";
    document.getElementById("user12").style.display="none";
}
//address validation 
document.getElementById("address").onblur = function () {
    try {
        adressValidation(this.value);
        this.nextElementSibling.innerText=" ";
        document.getElementById("address").style.border="1px solid black";
    }
    catch(e) {
        this.nextElementSibling.innerText= e.message;
        document.getElementById("address").style.border="2px solid red";    
    }
}

//person id validation 
document.getElementById("personalid").onblur = function () {
    try {
        personalIdValidation(this.value);
        this.nextElementSibling.innerText=" ";
        document.getElementById("personalid").style.border="1px solid black";
    }
    catch(e) {
        this.nextElementSibling.innerText= e.message;
        document.getElementById("personalid").style.border="2px solid red";    
    }
}
// profession check
document.getElementById("Professions").onblur = function () {
    if(this.value) {
        this.nextElementSibling.innerText=" ";
        document.getElementById("Professions").style.border="1px solid black";
    }
    else {
        this.nextElementSibling.innerText= "Select Your Profession";
        document.getElementById("Professions").style.border="2px solid red"; 
        
    }
}

//loclaSotrage arayy of data 
var username = document.getElementById("username").value;
var firstname = document.getElementById("fname").value;
var lastname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var phone = document.getElementById("phone").value;
var birthdate = document.getElementById("birthdate").value;
var address = document.getElementById("address").value;
var personalid = document.getElementById("personalid").value;
var profession = document.getElementById("Professions").value;
var experience = document.getElementById("experience").value;

// creat user object in locla sotrage
function addUser (username , firstname , lastname , email , password , phone , birthdate , address ) {
    var userObj = {};
    var form=document.forms[0];
    //if there is userers in local storage
    if (localStorage.getItem("userObj")) {
        userObj = JSON.parse(localStorage.getItem("userObj"));
        // if user exist in local storage
        if(userObj[username]) {
            alert("Change your user Name");

        }
        // if user is new in local storage
        else { 
            userObj[username] = {userName:username,fName:firstname,lName:lastname,email:email,password:password,phoneNumber:phone,birthDate:birthdate,address:address}
            localStorage.setItem("userObj" , JSON.stringify(userObj));
            form.setAttribute("action","login form.html"); 
        }
    }
    // if ther is no user in local storage
    else {
        userObj[username] = {userName:username,fName:firstname,lName:lastname,email:email,password:password,phoneNumber:phone,birthDate:birthdate,address:address}
        localStorage.setItem("userObj" , JSON.stringify(userObj));
        form.setAttribute("action","login form.html"); 

    }
}

// creat technical object in local storage
function addtechnical (username , firstname , lastname , email , password , phone , birthdate  , personalid , profession,experience ) {
    var technicalObj = {};
    var form=document.forms[0];
    // debugger
    //if there is userers in local storage
    if (localStorage.getItem("technicalObj")) {
        technicalObj = JSON.parse(localStorage.getItem("technicalObj"));
        // if user exist in local storage 
        if(technicalObj[username]) {
            alert("Change your user Name");    
        }
        // if user is new in local storage
        else {
            technicalObj[username] = {userName:username,fName:firstname,lName:lastname,email:email,password:password,phoneNumber:phone,birthDate:birthdate,personalid:personalid,profession:profession,expert:experience}
            localStorage.setItem("technicalObj" , JSON.stringify(technicalObj));
            form.setAttribute("action","login form.html"); 

        }
    }
    // if ther is no user in local storage
    else {
        technicalObj[username] = {userName:username,fName:firstname,lName:lastname,email:email,password:password,phoneNumber:phone,birthDate:birthdate,personalid:personalid,profession:profession,expert:experience}
        localStorage.setItem("technicalObj" , JSON.stringify(technicalObj));
        form.setAttribute("action","login form.html"); 


    } 
}
//submit form 
window.Submitt=Submitt;
function Submitt(type,eve) {
    // debugger
    var username = document.getElementById("username").value;
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("rePassword").value;
    var phone = document.getElementById("phone").value;
    var birthdate = document.getElementById("birthdate").value;
    var address = document.getElementById("address").value;
    var personalid = document.getElementById("personalid").value;
    var profession = document.getElementById("Professions").value;
    var experience = document.getElementById("experience").value;
    
    try {
        userNamedValidation(username);
        personNameValidation(firstname);
        personNameValidation(lastname);
        emailValidation(email);
        passwordValidation(password);
        passwordValidation(repassword);
        phoneValidation(phone);
        if(birthdate.vale) {
            return true;
        }
        let x =true 
        switch(x) {
            case document.getElementById("user12").value:
                adressValidation(address)
            break
            case document.getElementById("technical12").value:
                personalIdValidation(personalid)
                if (profession.value && experience.value) {return true;}
            break
        }
        if(type=="userSubmit")
        addUser (username , firstname , lastname , email , password , phone , birthdate , address );
        
        else if(type=="TechSubmit")
        addtechnical (username , firstname , lastname , email , password , phone , birthdate  , personalid , profession,experience );
    }
    catch(e) {
        eve.preventDefault();
        alert(e.message)
    }
}





