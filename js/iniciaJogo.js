function iniciaJogo() {
     
    //Mostra os Contadores e textos de status
    document.getElementById('statusTempoProva').style.display = 'block';
    document.getElementById("statusTempoRestante").style.display = 'block';
    document.getElementById('statusMediaCaractere').style.display = 'block';
    document.getElementById('statusMediaPalavras').style.display = 'block';
    document.getElementById("qtdPalavras").style.display = 'block';
    document.getElementById("qtdChar").style.display = 'block';
   
    //habilita botao parar
    document.getElementById("btnParar").removeAttribute("disabled");
   
    //desabilita botao iniciar
    document.getElementById("btnIniciar").setAttribute("disabled","disabled");
   
    //desabilita botao nivel
    document.getElementById("btnNivel").setAttribute("disabled","disabled");
   
    //habilita campo de digitacao e seta o focus
    document.getElementById("textoEntrada").removeAttribute("disabled");
    document.getElementById("textoEntrada").readOnly = false;
    document.getElementById("textoEntrada").focus();

    //limpa campo de digitacao  
    document.getElementById("textoEntrada").value = "";
   
    //mostra tempo da prova
    
    document.getElementById("statusTempoProva").innerText = 'Tempo de Prova: ' +  tempoProva + 'seg';
    //chama a classe padrao do campo texto 
    document.getElementById("textoEntrada").setAttribute("class","campo-padrao");
    
    //abre arquivo do desafio pelo level
    abreFileNivel(nivel);
    
       // adiciona o valor a barra
       document.getElementById("progressBar").setAttribute("style", 'width: 0%');


   
   tempoRestante = tempoProva;





   
    x = document.getElementById("statusTempoRestante");

    cronometroProva = setInterval(

      function () {

        if (tempoRestante == 0) {

          
          paraCronometroProva();

          

        }
       tempoRestante--;

        x.innerHTML = "Tempo Restante: [" + tempoRestante + "] seg";

//mostra a media de caracteres por segundo

document.getElementById("tempCPS").value = mascaraValor((tempoProva - tempoRestante ) / qtdChar);
document.getElementById("statusMediaCaractere").innerHTML = "CPS [" + mascaraValor((tempoProva - tempoRestante ) / qtdChar)  + "]";

//mostra a media de caracteres por segundo
document.getElementById("tempPPS").value = mascaraValor((tempoProva - tempoRestante ) / qtdPalavras);
document.getElementById("statusMediaPalavras").innerHTML = "PPS [" + mascaraValor((tempoProva - tempoRestante ) / qtdPalavras)  + "]";
  


      }
        , 1000);




}