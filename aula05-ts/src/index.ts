// Definição do tipo de objeto Produto, contendo propriedades de preço e nome.
type Produto = {
  preco: number;
  nome: string;
  imagem: string;
};

// Array carrinho contendo produtos iniciais.
const carrinho: Produto[] = [
  {
    nome: "Copo americano de bar",
    preco: 1.99,
    imagem: "copo.webp",
  },
  {
    nome: "Mesa de bar skol amarela",
    preco: 49.9,
    imagem: "cadeira-bar.jpg",
  },
  {
    nome: "Litrão de skol",
    preco: 49.9,
    imagem: "litrao-skol.jpeg",
  },
  {
    nome: "Cadeira de praia",
    preco: 19.9,
    imagem: "cadeira-praia.webp",
  },
];

// Função que retorna o HTML para representar um produto na interface.
const produtoComponent = (p: Produto, index: number) => {
  return `
  <div class="row-carrinho padding-produto">
    <img class="col-opcoes img-produto" src="img/${p.imagem}" height="60px" />
    <div class="col-produto">${p.nome}</div>
    <div class="col-preco">R$ ${p.preco}</div>
    <div class="col-quantidade"><input class="input-qtd"/></div>
    <div class="col-opcoes"> 
     <p class="remover align-opcoes" onClick="removerProduto(${index})">
        <i class="fa-solid fa-circle-minus"></i>
     </p>
  </div>
`;
};

// Função para remover um produto do carrinho com base no índice.
function removerProduto(index: number) {
  carrinho.splice(index, 1); // Remove o produto do array.
  render(); // Atualiza a interface.
}

function validaCupom(cupom: string): boolean {
  const cupoms = ["-10CODE"];

  for (let i = 0; i < cupoms.length; i++) {
    if (cupoms[i] == cupom) {
      return true;
    }
  }

  return false;
}

function aplicarCupom(event: Event) {
  const inputCupom = <HTMLInputElement>document.getElementById("input-cupom");
  if (inputCupom) {
    const codigoCupom = inputCupom.value;

    if (validaCupom(codigoCupom)) {
      alert("Parabéns seu cupom funcionou");
    } else {
      alert("Ixii! Não funcinou");
    }
  }
}

// Função para adicionar um novo produto ao carrinho.
function adcionarProduto() {
  // Obtém elementos do HTML para o nome e preço do novo produto.
  const elNomeProduto = <HTMLInputElement>(
    document.getElementById("nome-produto")
  );
  const elPrecoProduto = <HTMLInputElement>(
    document.getElementById("preco-produto")
  );

  if (elNomeProduto && elPrecoProduto) {
    // Cria um novo objeto Produto com os valores inseridos.
    const produto: Produto = {
      nome: elNomeProduto.value,
      preco: Number(elPrecoProduto.value),
    };

    carrinho.push(produto); // Adiciona o novo produto ao array.
    render(); // Atualiza a interface.
  }
}

// Função para renderizar os produtos, adicionar listener de evento e mostrar o total.
function render() {
  // Seção de renderização dos produtos.
  const elCarrinho = document.getElementById("produtos");
  if (elCarrinho) {
    elCarrinho.innerHTML = ""; // Limpa o conteúdo anterior.

    // Itera pelos produtos no carrinho e gera a representação HTML.
    carrinho.map((p, i) => {
      elCarrinho.innerHTML += produtoComponent(p, i);
    });
  }

  // Seção de adicionar produtos.
  const btnAdcionar = document.getElementById("btn-adcionar");
  if (btnAdcionar) {
    btnAdcionar.addEventListener("click", adcionarProduto); // Adiciona listener para adicionarProduto.
  }

  // Seção do total.
  // Calcula o total dos preços dos produtos no carrinho.
  const total = carrinho.reduce((acc, p) => acc + p.preco, 0);
  const elTotal = document.getElementById("total");
  if (elTotal) {
    elTotal.innerHTML = `R$ ${total.toFixed(2)}`; // Atualiza o elemento de exibição do total.
  }

  const btnAplicar = document.querySelector("#btn-aplicar");
  if (btnAplicar) {
    btnAplicar.addEventListener("click", aplicarCupom);
  }
}

render(); // Chama a função de renderização para exibir os produtos iniciais.
