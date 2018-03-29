function finalizaJogo(){



if (document.getElementById("checado").value =='sim'){
    paraCronometroProva();
    window.location = 'pages/frmCadRecord.php?char=' + qtdChar +
'&word=' + qtdPalavras +
'&cps=' + document.getElementById("tempCPS").value +
'&pps=' + document.getElementById("tempPPS").value
}
else
{
    
    paraCronometroProva();
    alert('fim de jogo tente novamente.');
}
}