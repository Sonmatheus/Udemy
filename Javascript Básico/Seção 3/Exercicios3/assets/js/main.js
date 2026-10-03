const Peso=document.getElementById('Peso')
const Altura=document.getElementById('Altura')
const Botao=document.getElementById('Button') 

Botao.addEventListener("click", (e)=>{  
 e.preventDefault()

 const resultado= document.getElementById('Resultado')
 
 
 if(Peso.value === ``){
  resultado.textContent= 'Peso não foi inserido'
 }else if(Altura.value === ``){
  resultado.textContent= 'Altura não foi inserido'
 } else{ 
 const pesoEmNumero = Number(Peso.value)
 const AlturaemNumero= Number(Altura.value)
 let IMC = pesoEmNumero/ (AlturaemNumero * AlturaemNumero)
 resultado.textContent= IMC
if(IMC < 18.5){
resultado.textContent=`Seu IMC e: ${IMC.toFixed(2)} - Abaixo do peso`
}else if (IMC >= 18.5 && IMC <= 24.9){
    resultado.textContent=`Seu IMC e: ${IMC.toFixed(2)} - Peso normal`
}else if (IMC >= 25 && IMC <= 29.9){
    resultado.textContent=`Seu IMC e:${IMC.toFixed(2)} - Sobrepeso`
}else if (IMC >= 30 && IMC <= 34.9){
    resultado.textContent=`Seu IMC e: ${IMC.toFixed(2)} - Obesidade grau 1`
}else if (IMC >= 35 && IMC <= 39.9){
    resultado.textContent=`Seu IMC e: ${IMC.toFixed(2)} - Obesidade grau 2`
}else if (IMC > 40){
    resultado.textContent=`Seu IMC e: ${IMC.toFixed(2)} - Obesidade grau 3`
}else{
    resultado.textContent=`Nenhum valor digitado`
}




}})
