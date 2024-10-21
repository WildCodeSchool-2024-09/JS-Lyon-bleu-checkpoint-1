const changeAvatar = document.getElementById('avatar');

changeAvatar.addEventListener('click', function () {
    changeAvatar.src = "./image/avatar.svg";
    changeAvatar.alt = "Beautiful new avatar";
});
