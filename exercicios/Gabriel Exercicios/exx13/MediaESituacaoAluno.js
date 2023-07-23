const btnPrincipal = document.querySelector("#btnPrincipal")
const saida1 = document.querySelector("#saida1")
const saida2= document.querySelector("#saida2")

btnPrincipal.addEventListener("click", () => {
    const nomeAluno = prompt("Qual nome do aluno?")
    const primeiraNota = Number(prompt(`Qual a primeira nota de ${nomeAluno}`))
    const segundaNota = Number(prompt(`Qual a segunda nota de ${nomeAluno}`))
    const mediaDoAluno = (primeiraNota + segundaNota) / 2
    
    if((primeiraNota <= 10) && (segundaNota <= 10)) {
        if(mediaDoAluno < 3) {
            saida1.innerText = `Com as notas ${primeiraNota} e ${segundaNota}, a média é ${mediaDoAluno}`
            saida2.innerText = `Com média abaixo de 3.0, ${nomeAluno} está REPROVADO!`
        } else if(mediaDoAluno < 6) {
            saida1.innerText = `Com as notas ${primeiraNota} e ${segundaNota}, a média é ${mediaDoAluno}`
            saida2.innerText = `Com média ente 3.0 e 6.0, ${nomeAluno} está em RECUPERAÇÃO!`
        } else {
            saida1.innerText = `Com as notas ${primeiraNota} e ${segundaNota}, a média é ${mediaDoAluno}`
            saida2.innerText = `Com a média acima de 6.0, ${nomeAluno} está APROVADO!`
        }
    } else {
        alert("As notas vão apenas até 10. Tente novamente!")
    }
    

})