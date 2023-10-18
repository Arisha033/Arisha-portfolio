const button = document.querySelector("#nav-mobile");
const navLinks = document.querySelector(".links");

// navbar toggle
const navBtn = document.querySelector('#nav-mobile');
navBtn.addEventListener('click', function(){
    console.log("hey");
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