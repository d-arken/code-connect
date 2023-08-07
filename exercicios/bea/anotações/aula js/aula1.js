var meuNumber = 1;

// char => letra => tradução pela tabela ASCII (0x41) = 0101 =65 = A
// number => inteiro
// usuário: beatriz
// uma palavra é como se fosse uma lista de coisas, exemplo BEATRIZ = b, e, a, t, r, i, z. Uma lista de char's
// string: palavra/texto
    //exemplo: se eu quero armazenar um nome na variável NOME em uma string:

var nome = "bea";
console.log (nome[0]);

//representação de string 1:
var idade = 25;

//representação de string 02:
var nome = `bea ${idade} anos`;

function media() {
    let nom = window.prompt('Qual é o nome do aluno?') 
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2 
    
    let msg // cria uma variável e deixa ela vazia
    if (med >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Meus parabéns!'
    } else { // senão...
        msg = 'Estude um pouco mais!'
    }
    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>` // Note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha ;)
}



var nome1 = "chris"
var nome2 = "bea"
var resposta = nome1 == nome2;


//achar uma palavra em uma frase 
    



var a = "a"; //string sempre precisa de aspas
var b = 2;
console.log(a + b);

var soma = a + b; //NaN = not a number (não é um número)
var sub = a - b;
var div = a / b;
var mult = a * b;


var a = 2;
var b = 3;

var potencia = a ** a;
var mod = b % a; //mod é o resto de uma divisão


//FUNÇÕES
    //guardar um bloco de execução do código
    function mostrarNome() {
        console.log("bea");
    };

    function adiciona(primeiroParametro, segundoParametro) {
        return primeiroParametro + segundoParametro;
    }

    //pesquisar o que é um parâmetro: uma pequena variável da função.

//Qual a diferença entre método e função
    //FUNÇÃO tem entrada e saíde, manipula e devolve, ou seja, tem retorno
            // 2 tipos: a que retorna algo e a que não retorna
            //ANY E VOID são tipos
            //any pode ser qualquer coisa
            //void sem retorno

    //MÉTODO é uma função de um objeto 


    var n = prompt("Digite um numero");
    var total = n/2;
    
    if(n & 1){
        alert("Impar");
    } else {
        alert("Par");
    }
    
    alert(total);


    console.log(8 == 1); 

