function preparaNovaPartida() {
    //escode texto de status
    document.getElementById('statusTempoProva').style.display = 'none';
    document.getElementById("statusTempoRestante").style.display = 'none';
    document.getElementById('statusMediaCaractere').style.display = 'none';
    document.getElementById('statusMediaPalavras').style.display = 'none';
    
    document.getElementById("qtdPalavras").style.display = 'none';
    document.getElementById("qtdChar").style.display = 'none';
    document.getElementById("textoEntrada").readOnly = true;
    //desabilita botao Parar porque ja esta parado.
    document.getElementById("btnParar").setAttribute("disabled","disabled");
    //desabilita os campos de desafio e de entrada e define as classes padrao.
    document.getElementById("textoEntrada").setAttribute("disabled","disabled");
   //document.getElementById("textoDesafio").setAttribute("disabled","disabled");
    document.getElementById("textoDesafio").readOnly = true;
    document.getElementById("textoEntrada").setAttribute("class","campo-parado");
    //limpa campo de digitacao
    document.getElementById("textoEntrada").value = "";

    verificaCaractereNivel(3);
    verificaCaractereNivel(2);
    verificaCaractereNivel(1);
   
   
   
   
    
    
    
  
    
   

  }