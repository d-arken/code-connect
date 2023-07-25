const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = frm.YourName.value;
  resp.innerText = ` Hello ${name} This is your first interaction`;
});
