interface Altura {
  cm: string;
  ft: string;
}

interface Humano {
  idade: number;
  nome: string;
  altura?: Altura;
}

const listaHumanos: Humano[] = [
  {
    idade: 19,
    nome: "João",
    altura: {
      cm: "180cm",
      ft: "80ft",
    },
  },
  {
    idade: 18,
    altura: {
      cm: "180cm",
      ft: "80ft",
    },
    nome: "José",
  },
];

listaHumanos.map((h) => {
  console.log(h?.altura?.cm);
});
