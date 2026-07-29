function meuescopo (){
const form =document.querySelector('.form')

// form.onsubmit = function (evento) {
//     evento.preventdefault()
// }
// }
let contador = 1
function receventoform (evento){
    evento.preventdefault () ;
    console.log (`Form não foi enviado ${contador}`)
    contador ++;
}


}