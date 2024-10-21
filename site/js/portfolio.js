const avatar = document.querySelector('#avatar');
const firstname = document.querySelector('#firstname')
const bouton = document.querySelector('#btnmod')
const couleur = document.querySelector('.description')
const pinktxt = document.querySelectorAll('.pink-bg')

avatar.addEventListener('click',function(){
    avatar.src = "/site/image/avatar.svg"
});

bouton.addEventListener('click', function(){
    const prompt1 = prompt("quelle est votre prenom?");
    const prompt2 = prompt("choisi ta couleur?");
    firstname.innerText = `${prompt1}`;
    firstname.style.color = 'white';
    couleur.style.backgroundColor = `#${prompt2}`;
    pinktxt.style.color = '#750ff7';

});



