"use strict";
const quantidadeProdutoCamisa = document.querySelector("#quantidade-camisa");
const quantidadeProdutoJaqueta = document.querySelector("#quantidade-jaqueta");
const subTotalDoValorDaCamisa = document.querySelector(".subValorCamisa");
const subTotalDoValorDaJaqueta = document.querySelector(".subValorJaqueta");
const subTotalPagamento = document.querySelector("#subTotal");
const valorSerPago = document.querySelector("#total");
const cupomCode = document.querySelector("#cupomCode");
const btnAplicarCupom = document.querySelector("#btnCupom");
const cupomValidos = ["-10code", "+1code", "digi"];
let isValid = false;
const produtos = [
    { produto: "Camisa T-short", preco: 177, quantidade: quantidadeProdutoCamisa, subTotal: subTotalDoValorDaCamisa },
    { produto: "Jaqueta", preco: 245, quantidade: quantidadeProdutoJaqueta, subTotal: subTotalDoValorDaJaqueta }
];
function atualizarSubTotal() {
    let valorTotal = 0;
    produtos.forEach((produtoAtual) => {
        const quantidade = Number(produtoAtual.quantidade.value);
        if (quantidade <= 0) {
            produtoAtual.quantidade.value = "0";
        }
        const valorSubTotalDoProduto = calcularValor(produtoAtual.preco, quantidade);
        produtoAtual.subTotal.innerText = `R$${valorSubTotalDoProduto.toFixed(2)}`;
        valorTotal += valorSubTotalDoProduto;
    });
    if (isValid) {
        valorTotal *= 0.9; //aplicar desconto de 10%
    }
    subTotalPagamento.innerText = `R$${valorTotal.toFixed(2)}`;
    valorSerPago.innerText = isValid
        ? `10% desconto ativado: R$${valorTotal.toFixed(2)}`
        : `R$${valorTotal.toFixed(2)}`;
}
function calcularValor(preco, quantidade) {
    return preco * quantidade;
}
function verificarCupom() {
    const valorInputDoCupom = cupomCode.value;
    isValid = cupomValidos.includes(valorInputDoCupom);
    if (isValid) {
        cupomCode.classList.add("isValid");
    }
    else {
        cupomCode.classList.remove("isValid");
    }
    atualizarSubTotal();
}
quantidadeProdutoCamisa === null || quantidadeProdutoCamisa === void 0 ? void 0 : quantidadeProdutoCamisa.addEventListener("input", atualizarSubTotal);
quantidadeProdutoJaqueta === null || quantidadeProdutoJaqueta === void 0 ? void 0 : quantidadeProdutoJaqueta.addEventListener("input", atualizarSubTotal);
btnAplicarCupom === null || btnAplicarCupom === void 0 ? void 0 : btnAplicarCupom.addEventListener("click", verificarCupom);
