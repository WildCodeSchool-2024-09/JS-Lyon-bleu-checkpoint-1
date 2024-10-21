const avatar = document.getElementById("avatar");
const buttonChangeColor = document.getElementById("changeColorText");
const changeName = document.getElementById("firstname");


avatar.addEventListener("click", ()=>{

    avatar.src="./image/avatar.svg";
});

buttonChangeColor.addEventListener("click", () =>
{

    const   retriverPromptAnswer = prompt(); 

    changeName.innerHTML = retriverPromptAnswer;
    changeName.style.color = "inherit";
})