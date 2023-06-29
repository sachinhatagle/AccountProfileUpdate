// store sign-up data in local storage 
if(localStorage.getItem("flag1") === "true"){
let userName = localStorage.getItem("name");
console.log(userName);
document.querySelector("#welcome-msg").innerHTML = `welcome, ${userName}!`;
}
else{
        window.open("login.html", "_self");
}

// function to prevent the back buttonpon on browser when you looged out
// window.history.forward();
// function noBack(){
//         window.history.forward(); 
// };


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
