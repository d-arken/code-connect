const buttonPrincipal = document.querySelector("#buttonPrincipal")
const resultado = document.querySelector("#saida")


buttonPrincipal.addEventListener("click", () => {
    const celsius = Number(prompt("Qual a temperatura atual em celsius?"))
    const conversorParaFahr = ((celsius * 1.8) + 32).toFixed(1)
    
    resultado.innerText = `Temperatura em Fahr é ${conversorParaFahr}`
})


//multiplicar a temperatura em graus Celsius por 1,8 e somar 32