const toggleBtn = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

// navbar toggle
toggleBtn.addEventListener('click', function(){
  navLinks.classList.toggle('active');
})

// function to show top button
const topBtn = document.querySelector(".top");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// function to move to top
function topFunction() {
  document.documentElement.scrollTop = 0;
}