import navbar from "../component/nav.js";
let navbardata = document.querySelector(".navbar");
navbardata.innerHTML = navbar();




let registeredUsers = JSON.parse(localStorage.getItem('UsersData'));
console.log(registeredUsers)

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser)


function displayData(registeredUsers,currentUser) {

    registeredUsers.forEach((user) => {
            let container = document.getElementById("container");

            let box = document.createElement("div");

            let name = document.createElement("p");
            name.innerText = "name :"+user.name
            let number = document.createElement("p");
            number.innerText = "number :"+user.number
            let username = document.createElement("p");
            username.innerText = "userName :"+user.username
            let email = document.createElement("p");
            email.innerText = "email :" +user.email

            let password = document.createElement("p");
            password.innerText = "password :"  +user.password
            let address = document.createElement("p");
            address.innerText = "address :"+user.address
            let city = document.createElement("p");
            city.innerText = "city :"+user.city
            let state = document.createElement("p");
            state.innerText = "state :"+user.state
            let country = document.createElement("p");
            country.innerText = "country :"+user.country

            box.append(name, number, username, email, password, address, city, state, country);

            container.append(box);
    });

}

displayData(registeredUsers,currentUser);