const buttonPrincal = document.querySelector("#buttonPrincipal")
const resultado = document.querySelector("#saida")

buttonPrincal.addEventListener("click", () => {
    const metrosPercorridos = Number(prompt("Quantos Metros foram percorridos?"))

    const km = metrosPercorridos / 1000
    resultado.innerText = `Foram percorridos em Km ${km}`
    
})