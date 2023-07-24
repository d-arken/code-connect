const btnPrincipal = document.querySelector("#btnPrincipal")
const h2 = document.querySelector("#h2")
const paragrafo = document.querySelector("#paragrafo")

btnPrincipal.addEventListener("click", () => {
    const nomeProduto = prompt("Qual produto voce vai comprar?")
    const precoProduto = Number(prompt("Qual valor do produto?"))
    const desconto = (precoProduto * 0.1).toFixed(2)
    const valorComDesconto = (precoProduto - desconto).toFixed(2) 

    h2.innerText = `Calculando desconto de 10% para ${nomeProduto}`
    paragrafo.innerText = `O preço original era R$${precoProduto}.
    você acabou de ganhar ${desconto} de desconto (-10%).
    No fim você vai pagar ${valorComDesconto} no produto ${nomeProduto}.`
})