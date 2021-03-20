let mainTag = document.getElementsByClassName('main__top-item'),
    mainTagWrap = document.querySelector('.main__top-block');

function removeClass() {
    for (let i = 0; i < mainTag.length; i++) {
        mainTag[i].classList.remove('active');
    }
};
mainTagWrap.addEventListener('click', function (event) {
    removeClass();
    for (let i = 0; i < mainTag.length; i++) {
        if (event.target.classList.contains('main__top-item')) {
            event.target.classList.add('active');
        }
    }

})