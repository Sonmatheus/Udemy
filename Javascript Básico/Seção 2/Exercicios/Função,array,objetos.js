function meuescopo (){
const form =document.querySelector('.form')


let contador = 1
function receventoform (evento){
    evento.preventdefault () ;
    console.log (`Form não foi enviado ${contador}`)
    contador ++;
}


}