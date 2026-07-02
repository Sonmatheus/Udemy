const numero = Number(prompt("Digite um número;"));
const numerotitulo=document.getElementById('numero-titulo');
const text=document.getElementById('texto');

numerotitulo.innerHTML= numero;
text.innerHTML+=`<p>Raiz quadrada = ${Math.sqrt( numero)}</p>`;
text.innerHTML+=`<p>${numero}é inteiro = ${Number.isInteger(numero)}</p>`;
text.innerHTML+=`<p>E NaN : ${Number.isNaN(numero)}</p>`;
text.innerHTML+=`<p>Arredondando para baixo : ${Math.floor(numero)}</p>`;
text.innerHTML+=`<p>Arredondando para cima : ${Math.ceil(numero)}</p>`;
text.innerHTML+=`<p>Com duas casas decimais :${numero.toFixed(2)}</p>`;


