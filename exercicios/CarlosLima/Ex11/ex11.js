const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const aleatorio = Math.floor(Math.random() * 1000) + 1;

  resp.innerText = `${aleatorio} foi seu número sorteado`;
});
