const button = document.getElementById("button");
const div = document.getElementById("firstname");
function changeContent() {
  div.innerHTML = "prompt";
}

button.addEventListener("click", function () {
  let result = prompt("Enter your Name");
  div.innerHTML = result;
});
