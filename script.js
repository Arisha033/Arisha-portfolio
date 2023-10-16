const button = document.querySelector('#nav-mobile');
const navLinks = document.querySelector('.links');

button.addEventListener('click', function(){
    navLinks.classList.toggle('active');
})