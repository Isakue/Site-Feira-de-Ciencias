let saber_mais = document.querySelector('.saber_mais')
let nav = document.querySelector('nav')
let header = document.querySelector('header')
let article = document.querySelector('article')

let navWidth = +window.getComputedStyle(nav).height.replace('px' , '')
let headerWidth = +window.getComputedStyle(header).height.replace('px' , '')
let articleWidth = +window.getComputedStyle(article).height.replace('px' , '')

saber_mais.addEventListener('click' , scrollSaberMais)

const heightWindow = navWidth + headerWidth + articleWidth

function scrollSaberMais() {
    window.scrollTo(0, heightWindow);
}