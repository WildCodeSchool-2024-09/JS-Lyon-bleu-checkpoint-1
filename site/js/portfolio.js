const imgAvatar = document.getElementById("avatar");
imgAvatar.addEventListener("click", () => {
	imgAvatar.src = "image/avatar.svg";
});

const nameDisplayed = document.getElementById("firstname");
const nameButton = document.getElementById("nameButton");
const sectionBackground = document.getElementsByClassName("pink-bg");
const pinkText = document.getElementsByClassName("pink-text");
nameButton.addEventListener("click", () => {
	const colorToDisplay = prompt("Entrez la couleur voulue");
	const nameToDisplay = prompt("Ecrivez votre nom");
	nameDisplayed.style.color = "white";
	nameDisplayed.innerText = nameToDisplay;
	for (let i = 0; i < sectionBackground.length; i++) {
		sectionBackground[i].style.backgroundColor = `${colorToDisplay}`;
	}
	for (let i = 0; i < pinkText.length; i++) {
		pinkText[i].style.color = `${colorToDisplay}`;
	}
});
