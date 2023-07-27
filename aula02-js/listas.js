// listas
// []
// 0    1   2   3   4
// [10, 40, 50, 80, 100]
// length = 5
// indíce = index

//            0    1   2   3   4
var lista = [
  "batata",
  "cebola",
  "alho",
  "coca-cola",
  "pão",
  "presunto",
  "veja",
];

const meio = Math.floor(lista.length / 2);

// // while
// let i = 1;

// while (i < 20) {
//   i = i + i;
//   console.log(i);
// }

// // for
// for (let i = 0; i < 20; i = i + 1) {
//   console.log(i);
// }

// forEach((v, i) => console.log(v, i), lista);

// console.log(listaNova);

lista.forEach((v) => {
  console.log(v);
});

// objeto
// {}
//
//

// busca binaria
// 10 == i
// [0,1,2,3,4,5,6,7,8,9,10,11]
// 6
// [ ]

const compras = {
  batata: true,
  cebola: false,
  pepino: false,
  sucoDeUva: false,
};

var key = "chave-que-eu-quiser";

compras[key] = false;

//console.log(compras[key]);

delete compras[key];

//console.log(compras);

// Lista de objetos

var produtos = [
  {
    nome: "Veja",
    preco: 8,
    foto: "veja.jpg",
  },
  {
    nome: "Pão",
    preco: 2,
    foto: "pao.jpg",
  },
  {
    nome: "Salada",
    preco: 3,
    foto: "salado.jpg",
  },
  {
    nome: "Hamburger",
    preco: 10,
    foto: "hamb.jpg",
  },
];

var total = 0;

produtos = produtos.sort((a, b) => {
  //console.log(b.preco - a.preco);
  return b.preco - a.preco;
});

produtos.forEach((p) => {
  //console.log(`O produto ${p.nome} custa R$ ${p.preco}`);
  total = total + p.preco;
});
//console.log("Total R$: " + total);

// i  0
// v ['a']

for (let i in produtos) {
  console.log(produtos[i]);
}

for (let p of produtos) {
  console.log(p);
}

for (let i in { a: 1, b: 2 }) {
  console.log(i);
}
