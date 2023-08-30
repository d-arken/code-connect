const btnInserir = document.getElementById("btnInserir") as HTMLButtonElement;
const tableProducts = document.getElementById(
  "tableProducts"
) as HTMLTableElement;

interface IProduct {
  id: number;
  price: string;
}

interface ITable {
  linha: HTMLTableRowElement | null;
  coluna: HTMLTableCellElement[];
}

const products: IProduct[] = [];
const table: ITable = { linha: null, coluna: [] };

function renderTable() {
  criarPlanilha();
  products.forEach((element, index) => {
    if (table.linha) {
      table.linha.setAttribute("id", element.id.toString());
      table.coluna[index].innerHTML = element.id.toString();
    }
  });
}

function inserir() {
  if (document.getElementById("inputPrice").value) {
    const product = document.getElementById("inputPrice").value;
  }

  products.push({
    id: products.length + 1,
    price: product,
  });

  renderTable();
}

const criarPlanilha = () => {
  table.linha = tableProducts.insertRow(-1);
  for (let index = 0; index < 3; index++) {
    table.coluna[index + 1].setAttribute("class", "row-data");
  }
};

btnInserir.addEventListener("click", (e) => {
  e.preventDefault();
  inserir();
});
