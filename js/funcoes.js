
// converte numero float para 2 casas decimais (media de digitacao)
function mascaraValor(valor) {
  return parseFloat(valor.toFixed(2))
}

function limpaCampoDigitacao(){
  //Limpa campo
  document.getElementById('textoEntrada').value = '';
   
}
