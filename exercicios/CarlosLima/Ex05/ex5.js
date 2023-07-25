const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const aluno = frm.inNome.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);
  const nota3 = Number(frm.inNota3.value);

  const media = (nota1 + nota2 + nota3) / 3;

  const resposta =
    media >= 7
      ? `Meus parabéns ${aluno}, você foi aprovado com a média ${media.toFixed(
          2
        )}`
      : media >= 4
      ? `${aluno} está em exame com a média ${media.toFixed(2)}`
      : `${aluno} está em recuperação com a média ${media.toFixed(2)}`;

  const color = media >= 7 ? "#007bff" : media >= 4 ? "green" : "red";

  resp2.innerText = resposta;
  resp2.style.color = color;

  /*
  if (media >= 7) {
    resp2.innerText = ` Meus parabéns ${aluno} você foi aprovado com a média ${media.toFixed(
      2
    )}`;
    resp2.style.color = "#007bff";
  } else if (media >= 4) {
    resp2.innerText = ` ${aluno} está em exame com a média ${media.toFixed(2)}`;
    resp2.style.color = "green";
  } else {
    resp2.innerText = ` ${aluno} está em recuperação com a média ${media.toFixed(
      2
    )}`;
    resp2.style.color = "red";
  }
  */
});
