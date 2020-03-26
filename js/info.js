//function to insert the error msg

function showErrorMsg (messages) {
    document.querySelector("#right-col").innerHTML += messages;
}

function clearErrorLog() {
    document.querySelector("#right-col").innerHTML = "<h2 style='color: black;'>Error log:</h2> ";
}


function formValidation(){
    clearErrorLog();
    var fName = document.getElementById("firstName");
    var lName = document.getElementById("lastname");
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    var confPass = document.getElementById("confirm_password");
    const educ = document.getElementById("education");

    var valid  = true;

    //check for fisrt letter capitalized and just letters input
    var namePatt = /^[A-Z][a-z]*/;
    var nametest = namePatt.test(fName.value);
    if (!nametest) {
        document.getElementById("firstName").style.border = "1px solid #FF0000";
        messages = "<p>The First Name should start with a capital letter and no symbols and numbers are allowed. </p>";
        showErrorMsg(messages);
        valid = false;
    } 

    //check for fisrt letter capitalized and just letters input for lastName 
    var lnametest = namePatt.test(lName.value);
    if (!lnametest) {
        document.getElementById("lastname").style.border = "1px solid #FF0000";
        messages = "<p>The Last Name should start with a capital letter and no symbols and numbers are allowed. </p>";
        showErrorMsg(messages);
        valid = false;
    }

    //username validation   
    var userpatt = /^[A-Za-z]/;
    if (!userpatt.test(username.value)) {
        document.getElementById("username").style.border = "1px solid #FF0000";
        messages = "<p>Username should start with a letter</p>";
        showErrorMsg(messages);
        valid = false;
    }

    if (username.value.length < 6) {
        document.getElementById("username").style.border = "1px solid #FF0000";
        messages = "<p>The username should have at least 6 characters</p>";
        showErrorMsg(messages);
        valid = false;
    }

    //password validation
    var passPatt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    var pass2 = confPass.value;
    result = pass.value.localeCompare(pass2);
    if (!passPatt.test(pass.value)) {
        document.getElementById("password").style.border = "1px solid #ff0000";
        messages = "<p>Password must start with a character, must have at least 1 digit and 1 uppercase! </p>";
        showErrorMsg(messages);
        valid = false;
    }
    //confimation password validation
    else if (result != 0) {
        document.getElementById("confirm_password").style.border = "1px solid #ff0000";
        messages = "<p>Confirm Password does not match!</p>";
        showErrorMsg(messages);
        valid = false
    }

    //radio list validation
    var radios = document.getElementsByName("ed-status");
    var radioLen = radios.length;
    console.log(radioLen);
    var validRadio = false;

    for (var i = 0; i < radioLen; i++) {
        if (radios[i].checked == true) {
            validRadio = true;
        }
    }
    if (!validRadio) {
        messages = "<p>You have to check one item!</p>";
        showErrorMsg(messages);
        valid= false;
    }


    //required value selected in dropdown list
    if (educ.value == 0) {
        document.getElementById("education").style.border = "1px solid #FF0000";
        messages = "<p> Education Level should be selected. Please, select one of the items </p>";
        showErrorMsg(messages);
        valid = false;
    }

    return valid;

}


