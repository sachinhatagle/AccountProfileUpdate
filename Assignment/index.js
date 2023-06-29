// store sign-up data in local storage 

let userName = localStorage.getItem("name");
console.log(userName);
document.querySelector("#welcome-msg").innerHTML = `welcome, ${userName}!`;

// function to check user is exist or not 
        // function isUserExist() {
        //     const isNew = localStorage.getItem("username") == null;
        //     console.log("isUserExist");
        //     if (isNew) {
        //         window.open("login.html","_self");
        //     }
        // }

        // function isUserExist() {
        // let isNew = localStorage.getItem("username");
        // if(isNew == !null){
        //     window.open("account.html", "_self");
        // }else{
        //     window.open("login.html", "_self")
        // }
        // }
