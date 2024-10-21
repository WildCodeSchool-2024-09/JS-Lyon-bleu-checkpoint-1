const changeAvatar = document.getElementById('avatar');

changeAvatar.addEventListener('click', function () {
    changeAvatar.src = "./image/avatar.svg";
    changeAvatar.alt = "Beautiful new avatar";
});


const newName = document.getElementById('firstname');
const button = document.querySelector('.button1');
const changeBg = document.querySelector('.pink-bg');

button.addEventListener('click', function () {
let resultName = prompt("Enter your name");
let resultColor = prompt("Enter a color");
newName.innerHTML=resultName;
newName.style.color='white';
changeBg.style.background=resultColor;
button.style.background=resultColor;

});

