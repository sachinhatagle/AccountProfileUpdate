
function logOut(){
    let isKey = localStorage.getItem("flag1");
    if (isKey === "true"){
        localStorage.setItem("flag1", "false");
        location.replace("login.html","_self");
    }
}