const frm = document.querySelector("form");
const respErros = document.getElementById("outErros");
const respChances = document.getElementById("outChances");
const respDica = document.getElementById("outDica");

const erros = []; //Vetor para armazenar os números apostados.
const sorteado = Math.floor(Math.random() * 100) + 1; //Váriavel contendo o número aleatório.
const CHANCES = 6;

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  if (numero == sorteado) {
    respDica.innerText = `Parabéns!! Você acertou 😁  ${numero}. Tente outro número.`;
    frm.btSubmit.disabled = true;
    frm.btNovo.className = "exibe";
  } else {
    if (erros.includes(numero)) {
      alert(`Você apostou o ${numero}. Tente outro...`);
    } else {
      erros.push(numero);
      const numErros = erros.length;
      const numChances = CHANCES - numErros;
      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram...");
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe";
        respDica.innerText = `Game over! Numero sorteado: ${sorteado}`;
      } else {
        const dica = numero < sorteado ? "maior" : "menor";
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
  }
  frm.inNumero.value = "";
  frm.inNumero.focus();
  frm.btNovo.addEventListener("click", () => {
    location.reload();
  });
});
