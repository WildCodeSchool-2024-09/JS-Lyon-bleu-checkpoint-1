const changeImage = document.querySelector("#avatarImg");

changeImage.addEventListener("click", () => {
	changeImage.src = "./image/avatar.svg";
});

const changeText = document.querySelector("#changeNameBtn");
const devName = document.querySelector("#firstname");
const allPinkColors = document.querySelectorAll('.description.pink-bg')
const allPinkText = document.querySelectorAll('.pink-text')

changeText.addEventListener("click", () => {
    const userName = prompt("What's your name?");
		devName.innerText = `${userName}`;
        devName.style.color = '#FFFFFF';
        allPinkColors.style.backgroundColor = `#${userColor}`;
        allPinkText.style.backgroundColor = `#${userColor}`;

});

const changeColor = document.querySelector('#background')

changeColor.addEventListener("click", () => {
	const userColor = prompt("Choose a color?");
    	changeColor.style.backgroundColor = `#${userColor}`;
});



