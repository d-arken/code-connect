const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ano = Number(frm.inAno.value);

  const idade = 2023 - ano;

  resp.innerText = `Você tem ${idade} anos`;
});
