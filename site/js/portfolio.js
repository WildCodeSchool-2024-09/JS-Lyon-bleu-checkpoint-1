const avatar = document.getElementById("avatar");
const buttonChangeColor = document.getElementById("changeColorText");
const changeName = document.getElementById("firstname");
const getMainBlockDescription =  document.getElementsByClassName("description pink-bg");
const  changefontColor = document.getElementsByClassName("pink-text");
const changeFooterColor = document.getElementsByClassName("description pink-bg");


avatar.addEventListener("click", ()=>{

    avatar.src="./image/avatar.svg";
});

buttonChangeColor.addEventListener("click", () =>
{
    const   color = prompt("Enter color"); 
    const   retriverPromptAnswer = prompt("Enter your name");

    changeName.innerHTML = retriverPromptAnswer;
    changeName.style.color = "inherit";
    getMainBlockDescription[0].style.background = color;

    [...changefontColor].forEach((element) => element.style.color = color);  
    changeFooterColor[1].style.background = color;
})