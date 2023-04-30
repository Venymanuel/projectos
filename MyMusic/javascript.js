let openMenu = document.querySelector('.menu-icon')
let closeMenu = document.querySelector('.nav-menu-icon')
let menu = document.querySelector('.navgation')

openMenu.addEventListener('click', ()=>{
    menu.classList.add('active')
}
)
closeMenu.onclick = ()=>{
    menu.classList.remove('active')

}