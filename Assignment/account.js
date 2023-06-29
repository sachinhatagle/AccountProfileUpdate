    // fetch('./data/profile.json')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

        import myData from './data/account.json' assert { type: 'json'}
        console.log(myData);
        console.log("hey there!!")

    if(localStorage.getItem("flag1") === "true"){
        const changeData = new Promise((resolve, reject) => {
            resolve(myData);
        })
        changeData.then((value) => {
            nameUpdate(value);
            emailUpdate(value);
            websiteUpdate(value);
            locationUpdate(value);
            imageUpdate(value);
            imageUpdate2(value);
        })

        function nameUpdate(value){
            let newName = document.getElementById("name");
            newName.innerHTML = value.name;

            // console.log(value.name);
        }
        function emailUpdate(value){
            let newEmail = document.getElementById("email");
            newEmail.innerHTML = value.email
        }
        function websiteUpdate(value){
            let newWebsite = document.getElementById("website");
            newWebsite.innerHTML = value.website
        }
        function locationUpdate(value){
            let newLocation = document.getElementById("location");
            newLocation.innerHTML = value.location
        }
        function imageUpdate(value){
            let newImage = document.getElementById("image");
            newImage.src = value.image;
        }
        function imageUpdate2(value){
            let newImage2 = document.getElementById("image2");
            newImage2.src = value.image;
        }
        
    }else{
        window.open("login.html", "_self");
    }


//     import profile from "../data/profile.json" assert {type: 'json'};
// // console.log(profile);
// if (localStorage.getItem("flag1") === "true"){
//     let profileData = new Promise((resolve) => {
//         return resolve(profile);
//     });
//     async function getData() {
//         const data = await profileData;
//         const name = document.querySelector("#name");
//         name.innerHTML = data.name;
//         const email = document.querySelector("#email");
//         email.innerHTML = data.email;
//         const website = document.querySelector("#website");
//         website.innerHTML = data.website;
//         const location = document.querySelector("#location");
//         location.innerHTML = data.location;
//         const profileImage = document.querySelector("#profileImage");
//         profileImage.src = data.profileImage;
//         const profileImage1 = document.querySelector("#profileImage1");
//         profileImage1.src = data.profileImage1;
//         return null;
//       }
//     window.onload = getData();
// }
// else{
//     window.open("login.html","_self");
// }