const btnPrincipal = document.querySelector("#btnPrincipal")
const saida = document.querySelector("#saida")

btnPrincipal.addEventListener("click", () => {
    const anoEscolhido = Number(prompt("Qual ano tu deseja verificar?"))

    if((anoEscolhido % 4 === 0 && anoEscolhido % 100 !== 0) || anoEscolhido % 400 === 0) {
        console.log("é bi");
        saida.innerText = `${anoEscolhido} É um ano bissexto!`
    } else {
        console.log("nao é bi");
        saida.innerText = `${anoEscolhido} NÂO é um ano bissexto!`
    }
})