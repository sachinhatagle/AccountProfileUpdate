//Name Validation

// function classToggle() {
//     var element = document.getElementById("nameError");
//     element.classList.toggle("invalid-feedback");
// }
// function validName() {
//     var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
//     var name = document.getElementById('signup-name').value;
//     if (!regName.test(name)) {
//         return false;
//     } else {
//         return true;
//     }
// }
// function validation(){
//     if(validName()){
//         document.getElementById("nameError").style.display="block";
//     }else{
//         classToggle();
//     }
// }


// email validation

// function emailToggle() {
//     var element1 = document.getElementById("emailError");
//     element1.classList.toggle("invalid-feedback");
// }
// function validEmail() {
//     var regName = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     var email = document.getElementById('signup-email').value;
//     if (!regName.test(email)) {
//         return false;
//     } else {
//         return true;
//     }
// }
// function emailValidation(){
//     if(validEmail()){
//         document.getElementById("emailError").style.display="block";
//     }else{
//         emailToggle();
//     }
// }


// Password Validation

// function passwordToggle() {
//     var element2 = document.getElementById("passwordError");
//     element2.classList.toggle("invalid-feedback");
// }
// function validPass() {
//     var regName1 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

//     var password = document.getElementById('signup-password').value;
//     if (!regName1.test(password)) {
//         return false;
//     } else {
//         return true;
//     }
// }
// function passwordValidation(){
//     if(validPass()){
//         document.getElementById("passwordError").style.display="block";
//     }else{
//         passwordToggle();
//     }
// }


// Name validation

// function nameValidate() {
//     let str = document.getElementById("signup-name").value;
//     const nerror = document.getElementById("nameError");
//     let count = str.split(' ');
    // let regex = (?=.*[!@#\$%\^&\*])(?=.{8,});
    // console.log("The length of arr: ", count.length);
    // if (str == null || str == "") {
    //     nerror.innerHTML="Name can't be null !!!";
    // }
    // else if (!isNaN(str)) {
    //     nerror.innerHTML="It must not be a number";
    // }
    // else if (count.length < 2) {
    //     nerror.innerHTML="Name contain atleast two words";
    //     return false;
    // }
    // else if () {}
//     else {
//         nerror.innerHTML="";
//         return true;
//     }
//     return false;
// }

// Vlaidate email

// function emailValidate() {
//     let str1 = document.getElementById("signup-email").value;
//     const nerror = document.getElementById("emailError");
//     let count1 = str1.split(' ');
//     let regName = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // let regex = (?=.*[!@#\$%\^&\*])(?=.{8,});
    // console.log("The length of arr: ", count.length);
//     if (str1 == null || str1 == "") {
//         nerror.innerHTML="Email can't be null !!!";
//     }
//     else if (!isNaN(str1)) {
//         nerror.innerHTML="It must not be a number";
//     }
//     else if (count1.length < 2) {
//         nerror.innerHTML="Email contain atleast five words";
//         return false;
//     }
//      else if (str1 == regName) {
//         nerror.innerHTML="Email must contain @";
//         return false;
//      }
//     else {
//         nerror.innerHTML="";
//         return true;
//     }
//     return false;
// }

// function nameValidate() {
//     let name = document.getElementById("signup-name").value;
//     const nerror = document.getElementById("nameError");
//     let regxName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    //let count = name.split(' ');
//     if (name.length == 0) {
//         nerror.innerHTML="Name can't be of zero length";
//     }
//     else if (!regxName.test(name)) {
//         nerror.innerHTML = "enter valid name";
//         return false;
//     } else {
//         nerror.innerHTML="";
//         return true;
//     }
//     return false;
// }

// email validation

// function emailValidate() {
//     let email = document.getElementById("signup-email").value;
//     const nerror = document.getElementById("emailError");
//     let regxName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    //let count = name.split(' ');
//     if (email.length == 0) {
//         nerror.innerHTML="Email can't be of zero length";
//     }
//     else if (!regxName.test(email)) {
//         nerror.innerHTML = "enter valid email";
//         return false;
//     } else {
//         nerror.innerHTML="";
//         return true;
//     }
//     return false;
// }

document.querySelector("#submitButton").disabled = true;

const nameValidation = () => {
    let name = document.getElementById("signup-name").value;
    if(name.length == 0 || name == "") {
        document.getElementById("name-error").innerHTML = "*Enter Full Name";
    }
    else if(name.length < 6) {
        document.getElementById("name-error").innerHTML = "*Full Name should contain atleast 6 characters";
    }
    else if(!name.match(/^[A-Za-z ]+$/)) {
        document.getElementById("name-error").innerHTML = "*In Full Name only alphabets are allowed";
    }
    else if(!name.match(/^([A-Za-z]+)[ ]([A-Za-z]+)$/)) {
        document.getElementById("name-error").innerHTML = "*In Full name there should be a single space";
    }
    else {
        document.getElementById("name-error").innerHTML = "";
        return name;
    }
}
const emailValidation = () => {
    let email = document.getElementById("signup-email").value;
    if(email.length === 0 || email == "") {
        document.getElementById("emailError").innerHTML = "*Enter Email";
    }
    else if(!email.match(/^([A-Za-z0-9\._]+)@([A-Za-z0-9]+).([a-z]+)(.[a-z]+)$/)) {
        document.getElementById("emailError").innerHTML = "*Enter email in correct format. Eg: abc@gmail.com";
    }
    else {
        document.getElementById("emailError").innerHTML = " ";
        return email;
    }
}
const passwordValidation = () => {
    let password = document.getElementById("signup-password").value;
    console.log(password);
    if(password.length === 0 || password == "") {
        document.getElementById("passwordError").innerHTML = "*Password is required";
    }
    else if(password.length < 8) {
        document.getElementById("passwordError").innerHTML = "*Password should contain 8 characters";
    }
    else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^.,])[A-Za-z\d$@!%*?&#^.,]{8,}$/).test(password)) {
        document.getElementById("passwordError").innerHTML = "*Password should contain: uppercase letter, lowercase letter, number and special character";
    }
    else {
        document.getElementById("passwordError").innerHTML = " ";
        return password;
    }
}

const checkBox = () => {
    console.log("inside");
    if(nameValidation() && emailValidation() && passwordValidation())
    document.querySelector("#submitButton").disabled = false;
    // else submitbutton.disabled = true;
        
}

 //redirecting to another page
function redirectMe() {
    let name = nameValidation();
    let email = emailValidation();
    let password = passwordValidation();


    if(name && email && password)
    {
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
   
    window.open("login.html", "_self");
    alert("Successfully Signed Up !!");
}
}
 