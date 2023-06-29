
const emailValidation = () => {
    let email = document.getElementById("signin-email").value;
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
    let password = document.getElementById("signin-password").value;
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
function Redirect() {
    // window.open("index.html", "_self");

    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if(email === emailValidation() && password === passwordValidation())
    {
        localStorage.setItem("flag1", "true");
        sessionStorage.setItem("session", "true");
        window.open("index.html", "_self");
        alert("Successfully Logged In");
 }else{
    alert("Enter correct Details");
 }
}
