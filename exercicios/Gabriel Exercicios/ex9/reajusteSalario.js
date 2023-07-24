const btnPrincipal = document.querySelector("#btnPrincipal")
const paragrafo = document.querySelector("#paragrafo")
const h2 = document.querySelector("#h2")


btnPrincipal.addEventListener("click", () => {
    const nomeFuncionario = prompt("Digite o nome")
    const salarioAtualDoFuncionario = Number(prompt("Salário atual do funcionario"))
    const porcetagemDeAumento = Number(prompt("Digite a porcentagem que irá ganhar de aumento"))
    const valorAumentadoDoSalario = (porcetagemDeAumento / 100) * salarioAtualDoFuncionario

    h2.innerText = `${nomeFuncionario} recebeu um aumento salarial`
    paragrafo.innerText = `O salário era ${salarioAtualDoFuncionario}.
    Com aumento de ${porcetagemDeAumento}%, o salário vai aumentar R$${valorAumentadoDoSalario} no próximo mês.
    E a partir dai, ${nomeFuncionario} vai passar a ganhar R$${salarioAtualDoFuncionario + valorAumentadoDoSalario}.`
})