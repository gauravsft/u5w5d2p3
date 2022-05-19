import navbar  from "../component/nav.js";
let navbardata=document.querySelector(".navbar");
navbardata.innerHTML=navbar();



document.querySelector('form').addEventListener('submit', singUpFn);

var usersData;
if (localStorage.getItem('UsersData') === null) {
    usersData = []
} else {
    usersData = JSON.parse(localStorage.getItem('UsersData'));
}
function singUpFn() {
    event.preventDefault();
    var userObj = {
        name: document.querySelector('#name').value,
        number: document.querySelector('#number').value,
        username: document.querySelector('#username').value,
        email: document.querySelector('#email').value,
        
        password: document.querySelector('#password').value,
        address: document.querySelector('#address').value,
        city: document.querySelector('#city').value,
        state: document.querySelector('#state').value,
        country: document.querySelector('#country').value,
        
    }
    usersData.push(userObj);
    localStorage.setItem('UsersData', JSON.stringify(usersData));
    alert('SignUp Successfully')

    window.location.href = 'loginPage.html';
}