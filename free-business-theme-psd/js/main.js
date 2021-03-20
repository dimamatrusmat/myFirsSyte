let slides = document.getElementsByClassName('header-pc-bg'),
    dots = document.getElementsByClassName('header-pc-late'),
    dotsWrap = document.querySelector('.header-pc-lates'),
    slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}
function plusSlide(n) {
    showSlides(slideIndex += n);
}
function currnetSlide(n) {
    showSlides(slideIndex = n);
}
dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('header-pc-late') && event.target == dots[i - 1]) {
            currnetSlide(i);
        }
    }
});
