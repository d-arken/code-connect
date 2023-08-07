//listas
    //representada pelo []
    // cada elemento da lista está posicionado dentro de um identificador
    //tamanho de lista: inicia no 0 
        //exemplo: [10, 40, 50, 80, 100]
        //          0    1   2   3   4    => tamanho da lista: length = 5 mas a posição é de 0 à 4
        //length = 5
        // indice = index
        //exemplo prático
    var lista = ["batata", "cebola", "alho", "coca-cola", "pão"];
    const meio = Math.floor(lista.length / 2); //chegar o item do meio da lista, pois está dividida por2
    console.log(lista[meio]);




//DUAS ESTRUTURAS DE LOOP MAIS CONHECIDAS:

    //while: executa o bloco em loop
    let i = 0 //let=ENQUANTO
    while (i <20) {
        i = i +1;
        console.log(i);
    }
        //no exemplo acima, enquanto i for menor que 20 ele irá executar em loop por conta do WHILE, pode até travar a máquina se usar o while sem um let, porque o loop não tem um fim.


    //for
        //um interador com condição de contagem e condição de parada => possui variável de controle
    function forEach(fn, lista) {
        for (let i = 0; i < lista.length; i++){
            fn(Lista[i], i);
        }
    }
    forEach((v, i) => console.log(v, i), Lista);


    var lista = ["batata", "cebola", "alho", "coca-cola", "pão"];


    //OBJETO
    //{} chaves e valores
    const compras = {
        batata: true,
        cebola: false,
        pepino: false,
        sucoDeUva: false,
    };

    

//diferença entre listas e objetos:
    //listas: ordenadas, sem pular nenhuma "ordem": 0, 1, 2,....
    //objetos: lsita sem lógica, ela pode ir do 0 para o 2, inexistindo o ítem 1. 

//BUSCA BINÁRIA:
    //só funciona em listas, partindo do principio de consultar o meio, o meio do meio... tudo precisa estar "ordenado"



    var produtos = [
        {
            nome: "Veja",
            preco: 8,
        },
        {
            nome: "Pão",
            preco: 2,
        },
        {
            nome: "Salada",
            preco: 3,
        },
        {
            nome: "Hamburger",
            preco: 10,
        },        
    ]; 

    var total = 0;
    produtos.forEach((p) => {
        console.log (`O produto ${p.nome} custa R$ ${p.preco}`);
        total = total + p.preco;
    });
    console.log("Total R$: " + total);