import navbar from "../component/nav.js";
let navbardata = document.querySelector(".navbar");
navbardata.innerHTML = navbar();


document.querySelector('form').addEventListener('submit', loginFn);

var registeredUsers = JSON.parse(localStorage.getItem('UsersData'));

function loginFn() {
    event.preventDefault();
    var enteredEmail = document.querySelector('#username').value;
    var enteredPassword = document.querySelector('#password').value;

    registeredUsers.forEach(userData => {
        if (userData.username === enteredEmail && userData.password === enteredPassword) {
            localStorage.setItem("currentUser" ,JSON.stringify(userData.username))
            alert("LOGIN SUCCESS");
            window.location.href = 'index.html';
        }
    });
    

}

