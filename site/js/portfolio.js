const image = document.getElementById('image1')

image.addEventListener("click", toggleImage);
function toggleImage() 
{
    if (image.getAttribute("data-img") === "avatar") {
      image.src = "./image/avatar.svg"; //remplace l'image par une autre
      image.setAttribute("data-img", "image2");
    } else {
      image.src = "./image/avatar-bis.png"; 
      image.setAttribute("data-img", "avatar"); // cette ligne me rénitialise à l'image de base
    }
}

const nom = document.getElementById('firstname')//je selectionne dans le span le nom à changer
const button = document.createElement('button')// je cree le boutton
// nommer le lieu de residence du boutton
const lieu = document.querySelector('.description') //jappelle le lieu par sa classe
// je vais lier le boutton au lieu 
lieu.appendChild(button)
//ajouter du texte dans mon boutton
button.innerText= "modify text and color"
//modifier la couleur du boutton 
button.style.backgroundColor = "pink"

// selectionner les elements rose à remplacer en violet
let pinktitle = document.querySelectorAll(".pink-text")
let pinkback = document.querySelectorAll(".pink-bg")


function changename() {
  // const firstname = getElementById("firstname")//aller chercher l'élément first name
  let name =  prompt("wha't your name") // stocker le nom saisi par l'utilisateur dans name
// remplacer l'innertext de nom qui correspond à firstname matt
nom.innerText = name //changer le texte de matt par le texte rempli par l'utilisateur
//changer la couleur du prenom en blanc
nom.style.color = "white" 
//changer la couleur du background
lieu.style.backgroundColor ="#750ff7"
//remplacer tous les éléments rose en violet:
for (let i=0; i< pinktitle.length; i=i+1){
    pinktitle[i].style.color = "#750ff7"
}
//petit soucis ici
// for (let i=0; i< pinkback.length; i=i+1){
//     pinkback[i].style.color = "#750ff7"
// }
}

// a chaque click se declenche le chang de nom et le prompt
button.addEventListener("click", changename);



