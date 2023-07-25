const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  if (
    ladoA + ladoB <= ladoC ||
    ladoB + ladoC <= ladoA ||
    ladoC + ladoA <= ladoB
  ) {
    resp1.innerText = `Lados não podem formar um triângulo`;
  } else {
    resp1.innerHTML = "Lados podem formar um triângulo";

    if (ladoA === ladoB && ladoA === ladoC) {
      resp2.innerText = `Tipo: Equilátero`;
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      resp2.innerText = `Tipo: Isóceles`;
    } else {
      resp2.innerText = `Tipo: Escaleno`;
    }
  }
});
