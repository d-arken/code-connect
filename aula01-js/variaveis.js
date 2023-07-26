var meuNumero = 1;

// char => letra => tradução pela tabela ASCII ((0x41) = 0101 = 65 = A)
// usuario: matheus

// lista   = 0,1,2,3,4,5,6,7
// matheus = m,a,t,h,e,u,s,(0x20)
// string : palavra

var idade = 28;
//var nome = "matheus" + " " + idade + " " + "anos";

var nome = `matheus ${idade} anos`;

// console.log(nome);

var nome1 = "mateus";
var nome2 = "matheus";

// igualdade ==
// E (AND) &&
// OU (OR) ||
// negação (NOT) !

var resposta = nome1 == nome2;

// booleano

// number 1

var a = 2;
var b = 3;

var soma = a + b;
var sub = a - b;
var div = a / b;
var mult = a * b;

var potencia = a ** a;
var mod = b % a;

// console.log(mod);

// funções

function mostraNome() {
  console.log("matheus");
}

function adciona(primeiroParametro, segundoParametro) {
  return primeiroParametro + segundoParametro;
}

var result1 = adciona(1, 2);
var result2 = mostraNome();

console.log(result1);
