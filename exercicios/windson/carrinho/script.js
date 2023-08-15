const product = document.getElementById("inputProduct");
const price = document.getElementById("inputPrice");
const subTotal = document.getElementById("subTotal");

const btnInserir = document.getElementById("btnInserir");
const tableProducts = document.getElementById("tableProducts");

const carrinho = [];

const products = [
  {
    id: 1,
    product: "teste",
    price: "R$1,91",
  },
  {
    id: 2,
    product: "teste2",
    price: "R$1,92",
  },
];

console.log(products);

populaCombo();

function populaCombo() {
  products.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = element.product.toLocaleUpperCase();
    option.value = element.id;
    product.appendChild(option);
  });
}

product.addEventListener("change", (e) => {
  const escolha = e.target.value;
  price.value = products.find(({ id }) => id == escolha).price;
});

function renderTable() {
  criarPlanilha();
  carrinho.forEach((element) => {
    linha.setAttribute("id", element.id);
    coluna1.innerHTML = element.id;
    coluna2.innerHTML = element.product;
    coluna3.innerHTML = element.price;
    coluna4.innerHTML = element.amount;
    coluna5.innerHTML = element.subTotal;
    console.log(element.product);
  });
}

function inserir() {
  const product = document.getElementById("inputProduct").value;
  const price = document.getElementById("inputPrice").value;
  const amount = document.getElementById("inputAmount").value;

  const priceConvertido = parseFloat(price.replace("R$", "").replace(",", "."));
  const amountConvertido = parseInt(amount);

  carrinho.push({
    id: products.length + 1,
    product: product,
    price: priceConvertido,
    amount: amountConvertido,
    subTotal: (priceConvertido * amountConvertido).toFixed(2),
  });

  const reduceSubTotal = carrinho.reduce(
    (acumulador, currentValue) =>
      acumulador + parseFloat(currentValue.subTotal),
    0
  );

  subTotal.innerText = reduceSubTotal.toFixed(2);

  renderTable();
}

function criarPlanilha() {
  linha = tableProducts.insertRow(-1);

  coluna1 = linha.insertCell(0);
  coluna2 = linha.insertCell(1);
  coluna3 = linha.insertCell(2);
  coluna4 = linha.insertCell(3);
  coluna5 = linha.insertCell(4);

  coluna1.setAttribute("class", "row-data");
  coluna2.setAttribute("class", "row-data");
  coluna3.setAttribute("class", "row-data");
  coluna4.setAttribute("class", "row-data");
  coluna5.setAttribute("class", "row-data");
}

btnInserir.addEventListener("click", (e) => {
  e.preventDefault();
  inserir();
});

// product.addEventListener("input", (e) => {
//   e.preventDefault();
//   console.log(product.value);
// });
