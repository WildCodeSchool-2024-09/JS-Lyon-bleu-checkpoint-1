const avatar = document.getElementById("avatar");

avatar.addEventListener("click", function () {
  avatar.src = "./image/avatar.svg";
});

const firstName = document.getElementById("firstname");
const description = document.querySelector(".description");
const buttonName = document.createElement("button");
description.appendChild(buttonName);
buttonName.innerText = "Modifiy Text and color";
buttonName.style.color = "var(--light)";
buttonName.style.border = "var(--borderTemplate) var(--light)";
buttonName.style.borderRadius = "var(--radius)";
buttonName.style.backgroundColor = "#F7BED5";
buttonName.style.padding = "10px 7px";
const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");
const pinkLink = document.querySelectorAll(".list");

let yourColor = null;
let yourName = null;

buttonName.addEventListener("click", function () {
  yourColor = prompt("What color do you like ?");
  yourName = prompt("What's your first name ?");
  firstName.innerText = yourName;
  firstName.style.color = "var(--light)";
  for (let i = 0; i < pinkBg.length; i++) {
    pinkBg[i].style.backgroundColor = "var(--purple)";
  }
  buttonName.style.backgroundColor = "var(--purple)";
  for (let j = 0; j < pinkText.length; j++) {
    pinkText[j].style.color = "var(--purple)";
  }
  for (let k = 0; k < pinkLink.length; k++) {
    pinkLink[k].style.color = "var(--purple)";
  }
});
