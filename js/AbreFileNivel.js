function abreFileNivel(nivel){

    if (nivel == 1) {nivel = 'level-01.txt'}
    if (nivel == 2) {nivel = 'level-02.txt'}
    if (nivel == 3) {nivel = 'level-03.txt'}
    var textarea = document.getElementById('textoDesafio');
    var src = 'inc/' + nivel;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4){
            textarea.value = ajax.responseText;

            document.getElementById("maxProgressBar").value  = textarea.value.length;
        }
    }

    ajax.open('POST', src);
    ajax.send(null);
    return false;
}
