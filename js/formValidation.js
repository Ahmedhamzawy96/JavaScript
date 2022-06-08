// User Validation Function 
function userNamedValidation (name) {
    var userRegex = new RegExp(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/ig);
    if(userRegex.test(name))
        return true;
    else {
        var error = new Error("UserName is not in the correct formate !");
        throw error;
    }
}

// Password vaalidation function 
function passwordValidation (password) {
    var passRegex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/ig);
    if (passRegex.test(password))
        return true;
    else {
        var error = new Error("Password is not in the correct formate !");
        throw error;
    }
}

// Phone number validation function 
function phoneValidation (phone) {
    var phoneRegex = new RegExp(/^(01)(0|1|2|5)[0-9]{8}$/ig);
    if (phoneRegex.test(phone))
        return true;
    else {
        var error = new Error ("Pnone Number is not in the coreect form !");
        throw error;
    }
}

//firest name(first name or last name) validation function 
function personNameValidation (fname) {
    var nameRegex = new RegExp(/^[a-zA-Z\s]{3,}$/);
    if(nameRegex.test(fname))
        return true;
    else {
        var error = new Error ("Name is not in the coreect form !");
        throw error;
    }
}

// address validaion function 
function adressValidation (address) {
    var adressRegex = new RegExp(/^[a-zA-Z0-9]{4,}(\s|-)/ig)
    if (adressRegex.test(address))
        return true;
    else {
        var error = new Error ("address is not in the correct form !");
        throw error;
    }
}

// Email validation function 
function emailValidation(email) {
    var emailRegex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ig);
    if (emailRegex.test(email))
        return true;
    else {
        var error = new Error ("E-Mail is not in the coreect form !");
        throw error;
    }
}

// personal ID validation Function
function personalIdValidation (number) {
    var idRegex = new RegExp(/^[0-9]{14}$/ig);
    if (idRegex.test(number))
        return true;
    else{
        var error = new Error ("Personal ID is not in the coreect form !");
        throw error; 
    }
}
//js modules
export {userNamedValidation, passwordValidation, phoneValidation, personNameValidation, adressValidation, emailValidation, personalIdValidation}