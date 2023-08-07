const quantidadeProdutoCamisa = document.querySelector<HTMLInputElement>("#quantidade-camisa")
const quantidadeProdutoJaqueta = document.querySelector<HTMLInputElement>("#quantidade-jaqueta")
const subTotalDoValorDaCamisa = document.querySelector<HTMLSpanElement>(".subValorCamisa")
const subTotalDoValorDaJaqueta = document.querySelector<HTMLSpanElement>(".subValorJaqueta")
const subTotalPagamento = document.querySelector<HTMLSpanElement>("#subTotal")
const valorSerPago = document.querySelector<HTMLSpanElement>("#total")

const cupomCode = document.querySelector<HTMLInputElement>("#cupomCode")
const btnAplicarCupom = document.querySelector<HTMLButtonElement>("#btnCupom")
const cupomValidos: string[] = ["-10code", "+1code", "digi"]
let isValid:boolean = false;

interface Produto {
    produto: string;
    preco: number;
    quantidade: HTMLInputElement;
    subTotal: HTMLSpanElement
}

const produtos: Produto[] = [
    {produto: "Camisa T-short", preco: 177, quantidade: quantidadeProdutoCamisa, subTotal: subTotalDoValorDaCamisa},
    {produto: "Jaqueta", preco: 245, quantidade: quantidadeProdutoJaqueta, subTotal: subTotalDoValorDaJaqueta}
]

function atualizarSubTotal() {
    let valorTotal: number = 0

   produtos.forEach((produtoAtual) => {
    const quantidade: number = Number(produtoAtual.quantidade.value)

    if(quantidade <= 0) {
        produtoAtual.quantidade.value = "0"
    }

    const valorSubTotalDoProduto = calcularValor(produtoAtual.preco, quantidade)
    produtoAtual.subTotal.innerText = `R$${valorSubTotalDoProduto.toFixed(2)}`
    valorTotal += valorSubTotalDoProduto
   })

   if(isValid) {
    valorTotal *= 0.9 //aplicar desconto de 10%
   }
   subTotalPagamento.innerText = `R$${valorTotal.toFixed(2)}`
   valorSerPago.innerText = isValid 
   ? `10% desconto ativado: R$${valorTotal.toFixed(2)}`
   : `R$${valorTotal.toFixed(2)}`
}


function calcularValor(preco:number, quantidade:number) {
    return preco * quantidade
}

function verificarCupom(){
    const valorInputDoCupom: string = cupomCode.value;
    isValid = cupomValidos.includes(valorInputDoCupom)

    if (isValid) {
        cupomCode.classList.add("isValid");
      } else {
        cupomCode.classList.remove("isValid");
    }

    atualizarSubTotal()
}

quantidadeProdutoCamisa?.addEventListener("input", atualizarSubTotal)
quantidadeProdutoJaqueta?.addEventListener("input", atualizarSubTotal)
btnAplicarCupom?.addEventListener("click", verificarCupom)