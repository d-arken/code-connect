const btnPrincipal = document.querySelector("#btnPrincipal")
const saida1 = document.querySelector("#saida1")
const saida2 = document.querySelector("#saida2")
const saida3 = document.querySelector("#saida3")

btnPrincipal.addEventListener("click", () => {
    const precoAtualDoProduto = Number(prompt("Qual preço atual do produto"))
    const precoAnteriorDoProduto = Number(prompt("Qual preço anterior do produto?"))
    
    saida1.innerText = `o produto custava R$${precoAnteriorDoProduto} e agora custa R$${precoAtualDoProduto}`
    
    if(precoAtualDoProduto > precoAnteriorDoProduto) {
        saida2.innerText = "Hoje o produto está mais caro!"
        saida3.innerText = `O preço subiu R$${precoAtualDoProduto - precoAnteriorDoProduto} em relação ao preço anterior.`
    } else if(precoAtualDoProduto == precoAnteriorDoProduto) {
        saida2.innerText = "Preço não sofreu alterações."
    } else {
        saida2.innerText = "Hoje o produto está mais barato!"
        saida3.innerText = `O preço caiu R$${precoAnteriorDoProduto - precoAtualDoProduto} em relação ao preço anterior.`
    }
})
