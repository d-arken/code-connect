const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number1 = Number(frm.inNumber1.value);
  const number2 = Number(frm.inNumber2.value);

  const resposta =
    number1 > number2
      ? `${number1} é maior que ${number2}`
      : number1 >= number2
      ? `${number1} e ${number2} são iguais`
      : `${number2} é maior que ${number1}`;

  resp.innerText = resposta;

  /* 
  Está é a primeira forma de verificação acima está o código com operador condicional. 
  if (number1 > number2) {
    resp.innerText = `${number1} é maior que ${number2} `;
  } else if (number1 >= number2) {
    resp.innerText = `${number1} e ${number2} são iguais`;
  } else {
    resp.innerText = `${number2} é maior que ${number1}`;
  }
  */
});
