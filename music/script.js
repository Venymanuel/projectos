
let btn_mobile = document.querySelector('#btn-mobile');


function menu(evento){
    if (evento.type == 'touchstart'){
        evento.preventDefaul()
    } 
    let nav = document.querySelector('nav');
    let header = document.querySelector('header');
    nav.classList.toggle('active')
    header.classList.toggle('active')
    const active = nav.classList.contains('active')
    evento.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        evento.currentTarget.setAttribute('aria-label', 'feixar menu')}else{
            evento.currentTarget.setAttribute('aria-label', 'abrir menu')
        }

}
btn_mobile.addEventListener('click', menu)
btn_mobile.addEventListener('touchstart', menu)