const btnPrincipal = document.querySelector("#btn-principal")

const saida = document.querySelector("#saida")

btnPrincipal.addEventListener("click", () => {
    const valorA = Number(prompt("Qual valor de A?"))
    const valorB = Number(prompt("Qual valor de b?"))
    const valorC = Number(prompt("Qual valor de C?"))
    const formulaBhaskara = (valorB ** 2 ) - (4 * valorA * valorC)

    saida.innerText = `A equação atual é ${valorA}x² + ${valorB}x + ${valorC} = 0
    o cálculo realizado será Δ = ${valorB}² - 4 .${valorA} . ${valorC}
    O valor calculado foi Δ = ${formulaBhaskara}`
    
})