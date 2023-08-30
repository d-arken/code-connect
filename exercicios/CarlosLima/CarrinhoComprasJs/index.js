const addCarrinho = document.querySelectorAll(".add");
const carrinho = [];

const add = (e) => {
  const card = e.target.parentNode;
  const produtoNome = card.querySelector("p").textContent;
  const produtoPreco = parseFloat(
    card.querySelector("h3").textContent.slice(2)
  );

  const item = {
    nome: produtoNome,
    preco: produtoPreco,
  };

  carrinho.push(item);
  atualizacaoCarrinho();
  totalCarrinho();
};

addCarrinho.forEach((button) => {
  button.addEventListener("click", add);
});

const atualizacaoCarrinho = () => {
  const listaCarrinho = document.querySelector(".itens");
  listaCarrinho.innerHTML = "";

  carrinho.forEach((item) => {
    const itemLi = document.createElement("li");
    itemLi.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(itemLi);
  });
};

const totalCarrinho = () => {
  const total = carrinho.reduce((acumulador, cur) => acumulador + cur.preco, 0);
  const cartTotal = document.querySelector(".card-total");
  cartTotal.textContent = `R$ ${total.toFixed(2)}`;
};
