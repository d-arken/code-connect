export function validarFormatoEmail(email) {
  const regexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  return regexEmail.test(email)
}

export function validarFormatoSenha(senha) {
  // Verifica o comprimento mínimo
  if (senha.length < 8) {
    return false;
  }
  // Verifica se contém pelo menos um número
  if (!/\d/.test(senha)) {
    return false;
  }

  return true
}
