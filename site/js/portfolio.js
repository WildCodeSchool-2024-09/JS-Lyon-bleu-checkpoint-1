const profilPicture = document.getElementById("profil-picture");
const firstname = document.getElementById("firstname");
const modifyButton = document.getElementById("modify-btn");
const pinkElements = document.querySelectorAll(".pink-bg");
const pinkTexts = document.querySelectorAll(".pink-text");
const anchors = document.querySelectorAll("a");
const devTools = document.querySelectorAll(".dev-tool");
const devtoolBtn = document.querySelector(".dev-tool-btn");
const input = document.querySelector("#input-create");
const addTextBtn = document.querySelector("#add-text-btn");
const list = document.querySelector(".text-list");

// step 1
profilPicture.addEventListener("click", () => {
  profilPicture.src = "./image/avatar.svg";
});

// step 2 & 3 & 4 & 5
modifyButton.addEventListener("click", () => {
  const name = prompt("quel est ton nom jeune pousse ?");
  const color = prompt("choisis ta couleur");

  firstname.innerText = name;

  firstname.style.color = "white";

  pinkElements.forEach((element) => {
    element.style.backgroundColor = color;
  });
  pinkTexts.forEach((element) => {
    element.style.color = color;
  });

  anchors.forEach((element) => {
    element.style.color = color;
  });
});

// step 6
devtoolBtn.addEventListener("click", () => {
  devTools[0].innerText = "Github";
  devTools[1].innerText = "VScode";
  devTools[2].innerText = "Terminal";
});

// step 7
addTextBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.innerText = input.value;
  list.append(newItem);
});
