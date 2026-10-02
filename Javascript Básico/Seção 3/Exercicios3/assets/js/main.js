const Peso=document.getElementById('Peso')
const pesoEmNumero = Number(Peso.value)

const Altura=document.getElementById('Altura')
const AlturaemNumero= Number(Altura.value)

const Botao=document.getElementById('Button')
Botao.addEventListener("click", (e)=>{
 e.preventDefault()
});

let IMC = pesoEmNumero/ (AlturaemNumero * AlturaemNumero)
const resultado= document.getElementById('Resultado')
resultado.textContent= IMC

if(IMC < 18.5){
resultado.textContent='Abaixo do peso'
}else if (IMC >= 18.5 && IMC <= 24.9){
    resultado.textContent="Peso normal"
}else if (IMC >= 25 && IMC <= 29.9){
    resultado.textContent="Sobrepeso"
}else if (IMC >= 30 && IMC <= 34.9){
    resultado.textContent="Obesidade grau 1"
}else if (IMC >= 35 && IMC <= 39.9){
    resultado.textContent="Obesidade grau 2"
}else if (IMC > 40){
    resultado.textContent="Obesidade grau 3"
}else {
    resultado.textContent ="Nenhum valor digitado"
}

