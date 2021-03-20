let tab = document.getElementsByClassName("tabs__btn"),
    tabText = document.getElementsByClassName("tabs__text"),
    tabsButton = document.querySelector(".tabs__button");

function hideTabContent(a) {
    for (let i = a; i < tabText.length; i++) {
        tabText[i].classList.remove('show');
        tabText[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}
hideTabContent(1)
function showTabContent(b) {
    if (tabText[b].classList.contains("hide")) {
        hideTabContent(0);
        tabText[b].classList.remove('hide');
        tab[b].classList.add('active');
        tabText[b].classList.add('show');
    }
}


tabsButton.addEventListener('click', function (event) {
    let target = event.target;
    if (target.className == 'tabs__btn') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabContent(i);

                break;
            }
        }
    }
})
