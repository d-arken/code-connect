const btnPrincipal = document.querySelector("#buttonPrincipal")

btnPrincipal.addEventListener("click", () => {
    const produtoSendoComprado = prompt("O que você está comprando?")
    const valorProduto = parseInt(prompt(`O valor do produto sendo comprado(${produtoSendoComprado}), custa quanto?`))
    const dinheroDoCliente = parseInt(prompt(`Qual valor você deu para comprar o ${produtoSendoComprado}?`))
    const troco = dinheroDoCliente - valorProduto

    alert(`Você comprou o ${produtoSendoComprado} que custou ${valorProduto}. Deu R$${dinheroDoCliente} em dinheiro e vai receber R$${troco} de troco.`)
})