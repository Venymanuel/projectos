
// selecionando todas as variaveis

let openMenu = document.querySelector('.menu-icon')
let closeMenu = document.querySelector('.nav-menu-icon')
let menu = document.querySelector('.navgation')
let iframe = document.querySelector('iframe')
let contenier = document.querySelector('.articleContenier')

let  openIfram = ()=>{
    iframe.classList.add('active')
    contenier.style.display = 'none'
}

openMenu.addEventListener('click', ()=>{
    menu.classList.add('active')
}
)
closeMenu.onclick = ()=>{
    menu.classList.remove('active')

}




