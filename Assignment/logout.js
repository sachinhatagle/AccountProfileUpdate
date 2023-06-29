
function logOut(){
    let isKey = localStorage.getItem("flag1");
    let sessionKey = sessionStorage.getItem("session");
    if (isKey === "true" && session === "true"){
        localStorage.setItem("flag1", "false");
        sessionStorage.removeItem("session", "false");

        // localStorage.getItem("flag1");

    }
    // localStorage.getItem("flag1");
    // console.log('hey');
}