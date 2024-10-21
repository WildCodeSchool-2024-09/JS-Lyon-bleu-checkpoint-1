const imgAvatar = document.getElementById("avatar");
imgAvatar.addEventListener("click", () => {
	imgAvatar.src = "image/avatar.svg";
});

const nameDisplayed = document.getElementById("firstname");
const nameButton = document.getElementById("nameButton");
nameButton.addEventListener("click", () => {
	const nameToDisplay = prompt("Ecrivez votre nom");
	nameDisplayed.style.color = "white";
	nameDisplayed.innerText = nameToDisplay;
});
