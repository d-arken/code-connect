type Produto = {
  preco: number;
  nome: string;
  imagem: string;
};

const carrinho: Produto[] = [
  {
    nome: "Copo americano de bar",
    preco: 1.99,
    imagem: "copo.webp",
  },
  {
    nome: "Mesa de bar skol amarela",
    preco: 49.99,
    imagem: "cadeira-bar.jpg",
  },
  {
    nome: "Litrão de skol",
    preco: 49.99,
    imagem: "litrao-skol.jpeg",
  },
  {
    nome: "Cadeira de praia",
    preco: 19.99,
    imagem: "cadeira-praia.webp",
  },
];

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

function removerProduto(index: number) {
  carrinho.splice(index, 1);
  render();
}

function validaCupom(cupom: string): boolean {
  const cupons = ["-10CODE"];

  for (let i = 0; i < cupons.length; i++) {
    if (cupons[i] == cupom) {
      return true;
    }
  }

  return false;
}

function aplicarCupom() {
  const inputCupom = <HTMLInputElement>document.getElementById("input-cupom");
  if (inputCupom) {
    const codigoCupom = inputCupom.value;

    if (validaCupom(codigoCupom)) {
      alert("Parabéns seu cupom funcionou");
    } else {
      alert("Ixii! Não funcionou");
    }
  }
}

function adicionarProduto() {
  const elNomeProduto = <HTMLInputElement>(
    document.getElementById("nome-produto")
  );
  const elPrecoProduto = <HTMLInputElement>(
    document.getElementById("preco-produto")
  );
  const elImagemProduto = <HTMLInputElement>(
    document.getElementById("imagem-produto")
  );

  if (elNomeProduto && elPrecoProduto && elImagemProduto) {
    const produto: Produto = {
      nome: elNomeProduto.value,
      preco: Number(elPrecoProduto.value),
      imagem: elImagemProduto.value, // Define a imagem do novo produto.
    };

    carrinho.push(produto);
    render();
  }
}

function render() {
  const elCarrinho = document.getElementById("produtos");
  if (elCarrinho) {
    elCarrinho.innerHTML = "";

    carrinho.map((p, i) => {
      elCarrinho.innerHTML += produtoComponent(p, i);
    });
  }

  const btnAdicionar = document.getElementById("btn-adicionar");
  if (btnAdicionar) {
    btnAdicionar.addEventListener("click", adicionarProduto);
  }

  const total = carrinho.reduce((acc, p) => acc + p.preco, 0);
  const elTotal = document.getElementById("total");
  if (elTotal) {
    elTotal.innerHTML = `R$ ${total.toFixed(2)}`;
  }

  const btnAplicar = document.querySelector("#btn-aplicar");
  if (btnAplicar) {
    btnAplicar.addEventListener("click", aplicarCupom);
  }
}

render();
