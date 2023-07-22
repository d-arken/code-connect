const btnPrincipal = document.querySelector("#btn-principal")

btnPrincipal.addEventListener("click", () => {
    const nomeUsuario = prompt("Digite seu nome")
    const idade = prompt(`Ola, ${nomeUsuario}! quantos anos você tem?`)
    alert(`acabei de conhecer ${nomeUsuario} , quem tem ${idade} anos de idade!`)
})