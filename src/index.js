function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    
    navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
  }
  
//   document.querySelector('.navbar-toggler')
//     .addEventListener('click', classToggle);
// }



let slideIndex = 0;
showSlides(slideIndex);
carousel();
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function carousel() {
    let i;
    let autoSlides = document.getElementsByClassName("mySlides");
    for (i = 0; i < autoSlides.length; i++) {
        autoSlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > autoSlides.length)  {slideIndex = 1}
    autoSlides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}