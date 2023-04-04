

let btn_mobile = document.querySelector('.menu-btn')
let header = document.querySelector('header')
btn_mobile.addEventListener('click',  ()=>{
    header.classList.toggle('active')
    console.log('ola')
})