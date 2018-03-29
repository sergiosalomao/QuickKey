function mudaNivel(nivelSelecionado){
nivel = nivelSelecionado;
    if (nivelSelecionado == 1) {nivelSelecionado = 'Facil'}
    if (nivelSelecionado == 2) {nivelSelecionado = 'Moderado'}
    if (nivelSelecionado == 3) {nivelSelecionado = 'Dificil'}
document.getElementById("statusNivel").innerText = 'Nivel: ' + nivelSelecionado;
abreFileNivel(nivel)

}
