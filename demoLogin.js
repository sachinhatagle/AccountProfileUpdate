// import data from './data/success.json' assert { type: 'json'}
// console.log(data);

// fetch('./data/success.json')
//         // .then((response) => response.json())
//         .then((json) => console.log(json));

const emailValidation = () => {
    let email = document.getElementById("signin-email").value;
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
    let password = document.getElementById("signin-password").value;
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
  };
  document.querySelector("#submitButton").disabled = true;
  const checkBox = () => {
    // let input = document.getElementById("input");
    let button = document.querySelector("#submitButton");
    let input = document.getElementById("RememberPassword");
    console.log("inside");
    if (!input.checked) {
      button.disabled = true;
    } else if (emailValidation() && passwordValidation()) button.disabled = false;
  };
  
  // Function for spinner
  
  function spinner() {
    document.getElementById("load");
    element.classList.toggle("spinner-border");
    element.classList.toggle("spinner-border-sm");
  }
  // function to match signup details and then login and redirect to next page
  
  function Redirect() {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
  //   password = decryption(password);
    console.log(password);
    if (email === emailValidation() && password === passwordValidation()) {
      localStorage.setItem("flag1", "true");
      // setTimeout(() => {
  
      //  },3000);
      console.log("redirect to inadex");
      alert("Successfully Logged In");
      window.open("index.html", "_self");
    } else {
      alert("Enter correct Details");
    }
  }
  
  function decryption(value) {
    var decrypted = CryptoJS.AES.decrypt(value, "Secret Passphrase");
    // alert(decrypted.toString(CryptoJS.enc.Utf8))
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  
  document.getElementById("alert").style.visibility = "hidden";
  let promise = new Promise((resolve, reject) => {
    let fetchData = fetch("./data/success.json");
    return resolve(fetchData);
  });
  promise
    .then((response) => response.json())
    .then((json) => {
      // console.log(json)
      localStorage.setItem("name", json.name);
      localStorage.setItem("email", json.email);
      localStorage.setItem("message", json.message);
      localStorage.setItem("isSuccess", json.isSuccess);
      localStorage.setItem("sessionId", json.sessionId);
  
      //show alert message on the top of login page
  
      const alertMessage = document.getElementById("alert");
      alertMessage.classList.remove("alert-danger");
      alertMessage.classList.add("alert-success");
      alertMessage.style.visibility = "visible";
      alertMessage.innerHTML = json.message;
    })
    .catch((val) => {
      fetch("./data/failure.json")
        .then((newVal) => newVal.json())
        .then((final) => {
          const alertMessage = document.getElementById("alert");
          alertMessage.classList.remove("alert-success");
          alertMessage.classList.add("alert-danger");
          alertMessage.style.visibility = "visible";
          alertMessage.innerHTML = final.message;
          console.log(final);
        });
    });
  