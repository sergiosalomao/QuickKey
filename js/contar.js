function contar() {
    //pega o numero de caracteres
    qtdChar = document.getElementById('textoEntrada').value.length;
    document.getElementById("qtdChar").innerText = 'Caracteres [' + qtdChar + ']';

    //pega o numero de palavaras
    texto = document.getElementById('textoEntrada').value;
    qtdPalavras = texto.split(/\S+/).length - 1;
    document.getElementById("qtdPalavras").innerText = 'Palavras [' + qtdPalavras + ']';

    
    //atualiza barra de progresso
    atualizaProgressBar();
    
  }