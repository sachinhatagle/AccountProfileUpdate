document.querySelector("#submitButton").disabled = true;

const nameValidation = () => {
  let name = document.getElementById("signup-name").value;
  if (name.length == 0 || name == "") {
    document.getElementById("name-error").innerHTML = "*Enter Full Name";
  } else if (name.length < 6) {
    document.getElementById("name-error").innerHTML =
      "*Full Name should contain atleast 6 characters";
  } else if (!name.match(/^[A-Za-z ]+$/)) {
    document.getElementById("name-error").innerHTML =
      "*In Full Name only alphabets are allowed";
  } else if (!name.match(/^([A-Za-z]+)[ ]([A-Za-z]+)$/)) {
    document.getElementById("name-error").innerHTML =
      "*In Full name there should be a single space";
  } else {
    document.getElementById("name-error").innerHTML = "";
    return name;
  }
};
const emailValidation = () => {
  let email = document.getElementById("signup-email").value;
  if (email.length === 0 || email == "") {
    document.getElementById("emailError").innerHTML = "*Enter Email";
  } else if (
    !email.match(/^([A-Za-z0-9\._]+)@([A-Za-z0-9]+).([a-z]+)(.[a-z]+)$/)
  ) {
    document.getElementById("emailError").innerHTML =
      "*Enter email in correct format. Eg: abc@gmail.com";
  } else {
    document.getElementById("emailError").innerHTML = " ";
    return email;
  }
};
const passwordValidation = () => {
  let password = document.getElementById("signup-password").value;

  console.log(password);
  if (password.length === 0 || password == "") {
    document.getElementById("passwordError").innerHTML =
      "*Password is required";
  } else if (password.length < 8) {
    document.getElementById("passwordError").innerHTML =
      "*Password should contain 8 characters";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^.,])[A-Za-z\d$@!%*?&#^.,]{8,}$/.test(
      password
    )
  ) {
    document.getElementById("passwordError").innerHTML =
      "*Password should contain: uppercase letter, lowercase letter, number and special character";
  } else {
    document.getElementById("passwordError").innerHTML = " ";
    return password;
  }
  // encrypt

  // let md = forge.md.sha256.create();
  // md.start();
  // md.update(signup-password, "utf8");
  // let hashText = md.digest().toHex();
  // document.getElementById("signup-password").innerHTML = hashText;
  //
};

const checkBox = () => {
  // let input = document.getElementById("input");
  let button = document.querySelector("#submitButton");
  let input = document.getElementById("RememberPassword");
  console.log("inside");
  if (!input.checked) {
    button.disabled = true;
  } else if (nameValidation() && emailValidation() && passwordValidation())
    button.disabled = false;
  // }else{
  //     !input.checked;
  //     button.disabled = true;

  // }
  // else submitbutton.disabled = true;
};

//redirecting to another page
function redirectMe() {
  let name = nameValidation();
  let email = emailValidation();
  let password = passwordValidation();

  if (name && email && password) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", encryption(password));
    // alert(encryption(password))
    window.open("login.html", "_self");
    alert("Successfully Signed Up !!");
  }
}

// function to decrypt password

function encryption(value) {
  var encrypted = CryptoJS.AES.encrypt(value, "Secret Passphrase");
  return encrypted;
}
