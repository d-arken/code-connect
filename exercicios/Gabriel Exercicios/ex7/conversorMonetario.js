let btnConverter = document.querySelector("#btn-converter")
const resultado = document.querySelector("#resultado");

let quantiaEmReal = document.querySelector("#quantiaEmReal")
let quantidadeEmDolar = 0

async function pegarCotacao() {
    try {
        const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao obter cotação", error)
        return null
    }
}

async function converterDolarParaReal() {
    const cotacao = await pegarCotacao()

    if (cotacao && cotacao.USDBRL) {
        const resultado = (Number(quantiaEmReal.value) / cotacao.USDBRL.bid).toFixed(2)
        quantidadeEmDolar = resultado
    }
    resultado.innerText = `${quantidadeEmDolar}$ USD`
}



btnConverter.addEventListener("click", converterDolarParaReal)
