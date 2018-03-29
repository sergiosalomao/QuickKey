
function atualizaProgressBar() {
  
            // adiciona o valor a barra
            progress = (document.getElementById('textoEntrada').value.length * 100) / document.getElementById('maxProgressBar').value;
            document.getElementById("progressBar").setAttribute("style", 'width: ' + progress + '%');
                if (progress == 100){
                    finalizaJogo();
                }
           
}

