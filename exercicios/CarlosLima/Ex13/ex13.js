const frm = document.querySelector("form");
const resp1 = document.getElementById("respOne");
const resp2 = document.getElementById("respTwo");
const resp3 = document.getElementById("respThree");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const saque = Number(frm.inSaque.value);

  if (saque % 10 !== 0) {
    alert(`Valor inválido para R$10, R$50, R$100`);
    frm.inSaque.focus();
    return;
  }

  const notaCem = Math.floor(saque / 100);
  const restoCem = saque % 100;

  const notaCinquenta = Math.floor(restoCem / 50);
  const restoCinquenta = restoCem % 50;

  const notaDez = Math.floor(restoCinquenta / 10);

  if (notaCem > 0) {
    resp1.innerText = `Notas Cem: ${notaCem}`;
  } else {
    resp1.innerText = "";
  }

  if (notaCinquenta > 0) {
    resp2.innerText = `Notas Cinquenta: ${notaCinquenta}`;
  } else {
    resp2.innerText = "";
  }

  if (notaDez > 0) {
    resp3.innerText = `Notas Dez: ${notaDez}`;
  } else {
    resp3.innerText = "";
  }
});
