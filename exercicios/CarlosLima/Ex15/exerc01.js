const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const tabela = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const clubes = frm.inClube.value;

  tabela.push(clubes);

  frm.btListar.dispatchEvent(new Event("click"));

  frm.inClube.value = "";
  frm.inClube.focus();
});

frm.btListar.addEventListener("click", () => {
  if (tabela.length == 0) {
    alert("Não há clubes na lista");
    inClube.focus();
    return;
  }

  let lista = "";

  for (const clubes of tabela) {
    lista += clubes + "\n";
  }

  resp.innerText = lista;
});

frm.btTabela.addEventListener("click", () => {
  const tam = tabela.length;

  if (tam == 0 || tam % 2 == 1) {
    alert("Deve haver tabelas em pares");
    inClubes.focus();
    return;
  }

  let jogos = "";

  const ultimo = tam - 1;

  for (i = 0; i < tam / 2; i++) {
    jogos += tabela[i] + " x " + tabela[ultimo - i] + "\n";
  }

  resp.innerText = jogos;
});
