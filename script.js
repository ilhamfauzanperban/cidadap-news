const navbarNav = document.querySelector('.navbar-nav')
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
const hamburger = document.querySelector('#hamburger-menu')
document.addEventListener('click', function(e){
    if(! hamburger.contains(e.target)&& ! navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

var slideIndex = 0;
var slides = document.getElementsByClassName("news-item");

function showSlide() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide, 3000);
}

showSlide();