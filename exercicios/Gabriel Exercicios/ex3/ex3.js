const btnPrincipal = document.querySelector("#btn-principal")


btnPrincipal.addEventListener("click", mostrarNumeroAntesEDepois)

function mostrarNumeroAntesEDepois(){
    const numeroEscolhido = parseInt(prompt("Digite um n°, que queira descobrir o antes e depois dele!"))
    const numeroAntecessor = numeroEscolhido - 1
    const numeroDepois = numeroEscolhido + 1
    alert(`Antecessor do numero é ${numeroAntecessor}! o depois é ${numeroDepois}`)
}


