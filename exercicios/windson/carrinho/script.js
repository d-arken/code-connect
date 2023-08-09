const btnInserir = document.getElementById("btnInserir");
const tableProducts = document.getElementById("tableProducts");

const products = [];

function renderTable() {
  criarPlanilha();
  products.forEach((element) => {
    linha.setAttribute("id", element.id);
    coluna1.innerHTML = element.id;
    coluna2.innerHTML = element.price;
  });
}

function inserir() {
  const product = document.getElementById("inputPrice").value;

  products.push({
    id: products.length + 1,
    price: product,
  });

  renderTable();
}

function criarPlanilha() {
  linha = tableProducts.insertRow(-1);

  coluna1 = linha.insertCell(0);
  coluna2 = linha.insertCell(1);
  coluna3 = linha.insertCell(2);
  coluna4 = linha.insertCell(3);

  coluna1.setAttribute("class", "row-data");
  coluna2.setAttribute("class", "row-data");
  coluna3.setAttribute("class", "row-data");
  coluna4.setAttribute("class", "row-data");
}

btnInserir.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("cliccou");
  inserir();
});
