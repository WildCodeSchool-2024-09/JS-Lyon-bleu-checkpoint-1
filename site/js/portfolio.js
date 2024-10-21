const imgAvatar = document.getElementById("avatar");
imgAvatar.addEventListener("click", () => {
	imgAvatar.src = "image/avatar.svg";
});

const nameDisplayed = document.getElementById("firstname");
const nameButton = document.getElementById("nameButton");
const sectionBackground = document.getElementsByClassName("pink-bg");
const pinkText = document.getElementsByClassName("pink-text");
const link = document.getElementsByTagName("a");
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
	for (let i = 0; i < link.length; i++) {
		link[i].style.color = `${colorToDisplay}`;
	}
});

const skillButton = document.getElementById("listeSkills");
const listeSkill = document.querySelectorAll("#front-dev-tools li");
const newList = ["VSCode", "Github", "Terminal"];
skillButton.addEventListener("click", () => {
	for (let i = 0; i < listeSkill.length; i++) {
		listeSkill[i].innerText = newList[i];
	}
});

const formBackSkill = document.getElementsByClassName("formLi");
const listeBack = document.getElementById("back-dev-tools");
const forTexte = formBackSkill[0].getElementsByTagName("input");
formBackSkill[0].addEventListener("submit", (event) => {
	event.preventDefault();
	const texte = forTexte[0].value;
	listeBack.innerHTML += `<li>${texte}</li>`;
	forTexte[0].value = "";
});
