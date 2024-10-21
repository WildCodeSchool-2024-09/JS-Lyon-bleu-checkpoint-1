const avatar = document.getElementById("avatar");

avatar.addEventListener("click", function () {
  avatar.src = "./image/avatar.svg";
});

const firstname = document.getElementById("firstname");
const description = document.querySelector(".description");
const buttonName = document.createElement("button");
description.appendChild(buttonName);
buttonName.innerText = "Modifiy Text and color";
buttonName.style.color = "#f5f5f5";
buttonName.style.border = "#f5f5f5 1px solid";
buttonName.style.borderRadius = "5px";
buttonName.style.backgroundColor = "#F7BED5";
buttonName.style.padding = "10px 7px";

buttonName.addEventListener("click", function () {
  buttonName = prompt("What's your name ?");
});
