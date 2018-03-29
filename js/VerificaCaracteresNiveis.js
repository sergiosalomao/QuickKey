
function verificaCaractereNivel(nivelSelecionado) {
    if (nivelSelecionado == 1) { arquivo = 'level-01.txt' }
    if (nivelSelecionado == 2) { arquivo = 'level-02.txt' }
    if (nivelSelecionado == 3) { arquivo = 'level-03.txt' }

    document.getElementById('textoDesafio').value = '';
    var textarea = document.getElementById('textoDesafio');
    var src = 'inc/' + arquivo;

    var ajax = new XMLHttpRequest();
    //abre o arquivo coloca no textArea pega a quantidade de caractes e limpa.
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            textarea.value = ajax.responseText;

            if (nivelSelecionado == 1) { document.getElementById("menuNivel1").innerHTML = 'Facil (' + textarea.value.length + ') Caracteres.'; }
            if (nivelSelecionado == 2) { document.getElementById("menuNivel2").innerHTML = 'Moderado (' + textarea.value.length + ') Caracteres.'; }
            if (nivelSelecionado == 3) { document.getElementById("menuNivel3").innerHTML = 'Dificil (' + textarea.value.length + ') Caracteres.'; }

           

            // limpa o campo que foi usado pra abrir os arquivos e pegar a quantidade de caracteres.
            textarea.value = '';
        }
    }

    ajax.open('POST', src);

    ajax.send(null);

    return false;
}

