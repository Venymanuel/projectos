
// selecionando todas as variaveis

let openMenu = document.querySelector('.menu-icon')
let closeMenu = document.querySelector('.nav-menu-icon')
let menu = document.querySelector('.navgation')
let mainContenier = document.querySelector('.main-contenier')
let boxContenier =document.querySelectorAll('.box-contenier')
let musicDiplay = document.querySelector('.playSongsList')
let principalImg = document.querySelector('#principal')
let songsTema = document.querySelector('.songsTema')
let playList =document.querySelector('.playList')

let troca = ()=>{
    console.log('ola')
    console.log(boxContenier[0])

}
openMenu.addEventListener('click', ()=>{
    menu.classList.add('active')
}
)
closeMenu.onclick = ()=>{
    menu.classList.remove('active')

}
function openBoxPlay1(){
    musicDiplay.classList.add('active')

    let contenier = music[0]

    principalImg.src  = contenier.image;
    songsTema.innerHTML = contenier.name
    console.log(principalImg)

}




