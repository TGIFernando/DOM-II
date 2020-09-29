/*
 * `mouseover`
 * `keydown`
 * `wheel`
 * `load`
 * `focus`
 * `resize`
 * `scroll`
 * `select`
 * `dblclick`
 * `drag / drop`
 */

let signButtn = document.querySelectorAll('.content-pick .btn');
let navLink = document.querySelectorAll('nav a');
let navBar = document.querySelector('.main-navigation');
let mainPics = document.querySelectorAll('.img-content')

//sign in button effects
signButtn.forEach(bttn => bttn.addEventListener('mouseover', () => {
    bttn.style.backgroundColor = 'red';
}));
signButtn.forEach(bttn => bttn.addEventListener('mouseleave', () => {
    bttn.style.backgroundColor = '#17A2B8';
}));

//stopping nav items from refreshing the page
navLink.forEach(bttn => bttn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    navBar.style.backgroundColor = 'white';
}));

//changing nav bar color
navBar.addEventListener('click', () => {
    navBar.style.backgroundColor = 'blue';
});

//hover effects for pics
mainPics.forEach(pic => pic.addEventListener('mouseover', () => {
    pic.style.opacity = '50%';
}));
mainPics.forEach(pic => pic.addEventListener('mouseleave', () => {
    pic.style.opacity = '100%';
}));