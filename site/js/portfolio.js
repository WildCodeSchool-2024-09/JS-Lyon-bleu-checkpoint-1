const avatar = document.querySelector("#avatar2");
const button = document.querySelector("#button");
const firstname = document.querySelector("#firstname");
const color = document.querySelector(".description");
avatar.addEventListener("click", function () {
  avatar.src = "image/avatar.svg";
});
button.addEventListener("click", function () {
  const promptname = prompt("Entrer votre nom");
  const promptcolor = prompt("Entrer votre couleur");
  firstname.innerText = `${promptname}`;
  firstname.style.color = "white";
  color.style.backgroundColor = `#${promptcolor}`;
});
