const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const respDataHora = document.getElementById("dataHora");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataHoraString = respDataHora.value;

  const dataHoraObj = new Date(dataHoraString);

  if (isNaN(dataHoraObj)) {
    resp.innerText = "Data e hora inválidas!";
  } else {
    let dia = dataHoraObj.getDate(); // DIA DO MÊS
    let mes = dataHoraObj.getMonth() + 1; // MÊS
    let ano = dataHoraObj.getFullYear(); // DEFINE UM ANO PARA DATA
    let hora = dataHoraObj.getHours(); // DEFINE AS HORAS
    let minutos = dataHoraObj.getMinutes(); // DEFINE OS MINUTOS

    resp.innerText =
      "Data e horas " +
      dia +
      "/" +
      mes +
      "/" +
      ano +
      " " +
      hora +
      ":" +
      minutos;
  }
});
