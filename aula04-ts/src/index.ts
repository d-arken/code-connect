type Produto = {
  preco: number;
  nome: string;
};

const carrinho: Produto[] = [
  {
    nome: "Copo americano de bar",
    preco: 1.99,
  },
  {
    nome: "Mesa de bar skol amarela",
    preco: 49.9,
  },
];

const produtoComponent = (p: Produto) => {
  return `<div>
  <h1>${p.nome}</h1>
  <h4>${p.preco}</h4>
</div>`;
};

function render() {
  // Renderiza produtos
  carrinho.map((p) => {
    const elCarrinho = document.getElementById("carrinho");
    if (elCarrinho) {
      elCarrinho.innerHTML += produtoComponent(p);
    }
  });
}

render();
