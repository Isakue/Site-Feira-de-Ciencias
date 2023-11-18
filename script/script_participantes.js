let menu = document.querySelector('.menu')
let menu_open = document.querySelector('.menu_')

let fechar = document.querySelector('.fechar')

menu.addEventListener('click' , openMenu)
fechar.addEventListener('click' , closedMenu)

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