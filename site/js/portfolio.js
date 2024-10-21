// changement de l'avatar
const changeAvatar = document.querySelector(".avatar")
changeAvatar.addEventListener('click', function(){
    changeAvatar.src = "./image/gentil-monsieur.jpg"; 
    changeAvatar.alt ="image d'un gentil monsieur bien bien comme y faut"; 
});

//remplacement des couleurs et création du bouton
const changeName = document.querySelector(".description");
let displayName = document.getElementById("firstname");
const button = document.createElement("button");
let changeBG = document.querySelectorAll(".pink-bg");
let changeColorText = document.querySelectorAll(".pink-text");

changeName.appendChild(button);

button.innerHTML="Change the name"
button.style.borderRadius= "5px"
button.style.border= "solid 2px #ffffff";
button.style.color="white";
button.style.backgroundColor="purple";
button.style.padding="1rem";

button.addEventListener("click", function(){
    let askName = prompt(`Please enter your name`) 
    let askColor = prompt("please choose your color")
    displayName.innerText=askName
    displayName.style.color="white";
for (let i=0; i< changeBG.length; i++){
    changeBG[i].style.backgroundColor = askColor;
};
for (let i=0; i< changeColorText.length;i++){
    changeColorText[i].style.color = askColor ;
};   
});

const link = document.getElementsByTagName("a");
for (let i =0; i<link.length;i++){
link[i].style.color= '#750ff7'
};



