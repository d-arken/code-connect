"use strict";
const carrinho = [
  {
    nome: "Copo americano de bar",
    preco: 1.99,
  },
  {
    nome: "Mesa de bar skol amarela",
    preco: 49.9,
  },
];
carrinho.map((p) => {
  const elCarrinho = document.getElementById("carrinho");
  if (elCarrinho) {
    elCarrinho.innerHTML += `<div>
        <h1>${p.nome}</h1>
        <h4>${p.preco}</h4>
    </div>`;
  }
});
