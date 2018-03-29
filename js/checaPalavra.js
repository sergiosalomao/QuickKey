function checaPalavra() {
    //document.getElementById("textoDesafio").focus();
    //document.getElementById("textoEntrada").focus();
      
    textoDesafio = document.getElementById("textoDesafio").value;
    textoEntrada = document.getElementById("textoEntrada").value;
        
        comparavel = textoDesafio.substring(0, textoEntrada.length);
      
        if (textoEntrada == comparavel) {
            document.getElementById("textoEntrada").setAttribute("class","campo-padrao");
            document.getElementById("checado").value = 'sim';
           } else {
            document.getElementById("textoEntrada").setAttribute("class","campo-vermelho");
            document.getElementById("checado").value = 'nao';
           
          }
          
  
  }