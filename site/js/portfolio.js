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

let yourColor = null;
let yourName = null;

buttonName.addEventListener("click", function () {
  yourColor = prompt("What color do you like ?");
  yourName = prompt("What's your first name ?");
  firstName.innerText = yourName;
  firstName.style.color = "var(--light)";
  for (let i = 0; i < pinkBg.length; i++) {
    pinkBg[i].style.backgroundColor = "#750ff7";
  }
  buttonName.style.backgroundColor = "#750ff7";
  for (let j = 0; j < pinkText.length; j++) {
    pinkText[j].style.color = "#750ff7";
  }
});
