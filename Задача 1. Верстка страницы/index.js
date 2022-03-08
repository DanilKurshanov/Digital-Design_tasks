window.onscroll = () => {
    if (window.scrollY > 500) {
        document.querySelector('.arrowUp').classList.remove('arrowUp_hide');
    } else if (window.scrollY < 500) {
        document.querySelector('.arrowUp').classList.add('arrowUp_hide');
    }
}