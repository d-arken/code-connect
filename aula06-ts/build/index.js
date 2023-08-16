"use strict";
// Array carrinho contendo produtos iniciais.
const produtos = [
    {
        nome: "Copo americano de bar",
        preco: 1.99,
        imagem: "copo.webp",
        quantidade: 1,
    },
    {
        nome: "Mesa de bar skol amarela",
        preco: 49.9,
        imagem: "cadeira-bar.jpg",
        quantidade: 1,
    },
    {
        nome: "Litrão de skol",
        preco: 49.9,
        imagem: "litrao-skol.jpeg",
        quantidade: 1,
    },
    {
        nome: "Cadeira de praia",
        preco: 19.9,
        imagem: "cadeira-praia.webp",
        quantidade: 1,
    },
];
const carrinho = {
    produtos: produtos,
    total: 0,
    quantidadeProdutos: 0,
    cupom: null,
    calculaTotal() {
        const totalProdutos = this.produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
        this.total = totalProdutos;
        if (this.cupom) {
            this.total = totalProdutos - this.cupom.desconto;
        }
        render();
    },
    atualizarQuantidade(idx, quantidade) {
        this.produtos[idx].quantidade = Number(quantidade);
        this.calculaTotal();
    },
    adcionaCupom(cupom) {
        this.cupom = cupom;
        this.calculaTotal();
    },
    removeCupom() {
        this.cupom = null;
        this.calculaTotal();
    },
    adcionarProduto(produto) {
        this.produtos.push(produto);
        this.calculaTotal();
    },
    removerProduto(idx) {
        this.produtos.splice(idx, 1);
        this.calculaTotal();
    },
};
// Função que retorna o HTML para representar um produto na interface.
const produtoComponent = (p, index) => {
    return `
  <div class="row-carrinho padding-produto">
    <img class="col-opcoes img-produto" src="img/${p.imagem}" height="60px" />
    <div class="col-produto">${p.nome}</div>
    <div class="col-preco">R$ ${p.preco}</div>
    <div class="col-quantidade">
    <input class="input-qtd" onBlur="carrinho.atualizarQuantidade(${index}, event.target.value)" value=${p.quantidade} />
    </div>
    <div class="col-opcoes"> 
     <p class="remover align-opcoes" onClick="carrinho.removerProduto(${index})">
        <i class="fa-solid fa-circle-minus"></i>
     </p>
  </div>
`;
};
function validaCupom(cupom) {
    const cupoms = ["-10CODE"];
    for (let i = 0; i < cupoms.length; i++) {
        if (cupoms[i] == cupom) {
            return true;
        }
    }
    return false;
}
function aplicarCupom(event) {
    const inputCupom = document.getElementById("input-cupom");
    if (inputCupom) {
        const codigoCupom = inputCupom.value;
        if (validaCupom(codigoCupom)) {
            carrinho.adcionaCupom({
                cupom: codigoCupom,
                desconto: 10,
            });
        }
        else {
            alert("Ixii! Não funcinou");
        }
    }
}
// Função para adicionar um novo produto ao carrinho.
function adcionarProduto() {
    // Obtém elementos do HTML para o nome e preço do novo produto.
    const elNomeProduto = (document.getElementById("nome-produto"));
    const elPrecoProduto = (document.getElementById("preco-produto"));
    if (elNomeProduto && elPrecoProduto) {
        // Cria um novo objeto Produto com os valores inseridos.
        const produto = {
            nome: elNomeProduto.value,
            preco: Number(elPrecoProduto.value),
            quantidade: 1,
            imagem: "",
        };
        carrinho.adcionarProduto(produto); // Adiciona o novo produto ao array.
    }
}
// Função para renderizar os produtos, adicionar listener de evento e mostrar o total.
function render() {
    // Seção de renderização dos produtos.
    const elCarrinho = document.getElementById("produtos");
    if (elCarrinho) {
        elCarrinho.innerHTML = ""; // Limpa o conteúdo anterior.
        // Itera pelos produtos no carrinho e gera a representação HTML.
        carrinho.produtos.map((p, i) => {
            elCarrinho.innerHTML += produtoComponent(p, i);
        });
    }
    // Seção de adicionar produtos.
    const btnAdcionar = document.getElementById("btn-adcionar");
    if (btnAdcionar) {
        btnAdcionar.addEventListener("click", adcionarProduto); // Adiciona listener para adicionarProduto.
    }
    // Seção do total.
    // Calcula o total dos preços dos produtos no carrinho.
    const elTotal = document.getElementById("total");
    if (elTotal) {
        elTotal.innerHTML = `R$ ${carrinho.total.toFixed(2)}`; // Atualiza o elemento de exibição do total.
    }
    const elDesconto = document.getElementById("desconto");
    if (elDesconto && carrinho.cupom) {
        elDesconto.innerHTML = `R$ ${carrinho.cupom.desconto.toFixed(2)}`;
    }
    const btnAplicar = document.querySelector("#btn-aplicar");
    if (btnAplicar) {
        btnAplicar.addEventListener("click", aplicarCupom);
    }
}
carrinho.calculaTotal();
