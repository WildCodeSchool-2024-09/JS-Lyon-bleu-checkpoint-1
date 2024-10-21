const newImage = document.getElementById('av1');

newImage.addEventListener('click', () => {
    newImage.src ='./image/avatar-bis.png'
});

const newName = document.getElementById('newname');
const oldName = document.getElementById('firstname');
const color = document.getElementById('background');

color.addEventListener('click', () => {
    const newColor = prompt ('enter color');
    color.style.backgroundColor = '#750ff7'


})

newName.addEventListener('click', () => {
    const userName = prompt ("what's your name?");
    oldName.innerText = `${userName}`;
    oldName.style.color = '#ffffff';
});

