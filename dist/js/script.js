const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const counters = document.querySelectorAll('.skills__block-percent'),
        lines = document.querySelectorAll('.skills__block-slideins');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


// hamburger.addEventListener('click', ()=> {
//     menu.classList.remove('active');
//     hamburger.classList.remove('active');
// });