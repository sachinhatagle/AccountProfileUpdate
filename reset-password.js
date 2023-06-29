function resetPassword(){
    let email = document.getElementById("reg-email").value;
    if(email.length === 0 || email == "") {
        document.getElementById("reset-password").innerHTML = "*Enter Email";
    }
    else if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById("reset-password").innerHTML = "*Enter email in correct format. Eg: abc@gmail.com";
    }
    else {
        document.getElementById("reset-password").innerHTML = " ";
        return true;
    }
}
function validEmail(){

alert("Password reset successfully");
}
// resetPassword();