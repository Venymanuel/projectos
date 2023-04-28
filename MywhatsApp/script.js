let Myimg = document.querySelector('#img')
let input = document.querySelector('input')
input.onchange = (e) =>{
    if (input.files[0]){
        Myimg.src = URL.createObjectURL(input.files[0])
    }
}