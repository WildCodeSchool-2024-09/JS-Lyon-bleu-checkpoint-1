const avatar = document.querySelector('#avatar');
const firstname = document.querySelector('#firstname')
const bouton = document.querySelector('#btnmod')
const couleur = document.querySelector('.description')
const pinkbg = document.querySelector('.pink-bg')

avatar.addEventListener('click',function(){
    avatar.src = "/site/image/avatar.svg"
});

bouton.addEventListener('click', function(){
    const prompt1 = prompt("quelle est votre prenom?");
    const prompt2 = prompt("choisi ta couleur?");
    const prompt3 = prompt("choisi la couleur des elements")
    firstname.innerText = `${prompt1}`;
    firstname.style.color = 'white';
    couleur.style.backgroundColor = `#${prompt2}`;
    pinkbg.style.color = `#${prompt3}`

});



