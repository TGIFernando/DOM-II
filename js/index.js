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
signButtn.forEach(bttn => bttn.addEventListener('mouseover', () => {
    bttn.style.backgroundColor = 'red';
}));
signButtn.forEach(bttn => bttn.addEventListener('mouseleave', () => {
    bttn.style.backgroundColor = '#17A2B8';
}));