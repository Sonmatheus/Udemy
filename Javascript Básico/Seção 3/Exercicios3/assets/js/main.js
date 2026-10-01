const Peso=document.getElementById('Peso')
const pesoEmNumero = Number(Peso.value)

const Altura=document.getElementById('Altura')
const AlturaemNumero= Number(Altura.value)

const Botao=document.getElementById('Button')
Botao.addEventListener("click", (e)=>{
 e.preventDefault()
const pesoEmNumero = Number(Peso.value)
const AlturaemNumero= Number(Altura.value)
});



