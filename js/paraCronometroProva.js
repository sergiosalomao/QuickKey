function paraCronometroProva() {
    clearInterval(cronometroProva);
    //nao permite a edicao do texto
    document.getElementById("textoEntrada").readOnly = true;
    
    //desabilita botao parar
    document.getElementById("btnParar").setAttribute("disabled","disabled");
    
    //Habilita botao iniciar
    document.getElementById("btnIniciar").removeAttribute("disabled");
    
    //Habilita botao Nivel
    document.getElementById("btnNivel").removeAttribute("disabled");
    
    //Desabilita campo de digitacao
    document.getElementById("textoEntrada").setAttribute("disabled","disabled");
   
     //chama a classe o campo parado do campo de digitacao
     document.getElementById("textoEntrada").setAttribute("class","campo-parado");

     //muda o focus para o textoDesafio para mostrar a marcação do texto digitado.
     document.getElementById("textoDesafio").focus();
  }