const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumero.value);

  const resposta = num % 2 === 0 ? `${num} é par` : `${num} é impar`;

  resp.innerText = resposta;

  /*
  if (num % 2 == 0) {
    resp.innerText = `${num} é par`;
  } else {
    resp.innerText = `${num} é impar`;
  }
  */
});
