let saber_mais = document.querySelector('.saber_mais')
let nav = document.querySelector('nav')
let header = document.querySelector('header')
let article = document.querySelector('article')

let menu = document.querySelector('.span')
let menu_open = document.querySelector('.menu_open')

let fechar = document.querySelector('.fechar')

let part1 = document.querySelector('.article1')
let part2 = document.querySelector('.article2')

let teoria = document.querySelector('#teory')
let calculos = document.querySelector('#calc')

let navWidth = +window.getComputedStyle(nav).height.replace('px' , '')
let headerWidth = +window.getComputedStyle(header).height.replace('px' , '')
let articleWidth = +window.getComputedStyle(article).height.replace('px' , '')
let part1Height = +window.getComputedStyle(part1).height.replace('px' , '')
let part2Height = +window.getComputedStyle(part2).height.replace('px' , '')

saber_mais.addEventListener('click' , scrollSaberMais)
teoria.addEventListener('click' , scrollTeoria)
calculos.addEventListener('click' , scrollCalculos)

fechar.addEventListener('click' , closedMenu)
menu.addEventListener('click' , openMenu)

const heightHeader = navWidth + headerWidth + articleWidth
const downTeoria = heightHeader
const downCalculos = part1Height + part2Height + heightHeader

function scrollSaberMais() {
    window.scrollTo(0, heightHeader);
}

function scrollTeoria() {
    window.scrollTo(0 , downTeoria)
}

function scrollCalculos() {
    window.scrollTo(0 , window.screen.height * 10)
}

function openMenu() {
    menu_open.style.display = 'flex'
    menu_open.style.animation = 'entrada_menu .5s'
}

function closedMenu() {
    menu_open.style.animation = 'saida_menu .5s'
    setTimeout(() => {
        menu_open.style.display = 'none'
    } , 495)
}