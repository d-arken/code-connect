function validarNome(nome) {
  const regexNome = /^[a-zA-ZÀ-ÿ]+(([',. -][a-zA-ZÀ-ÿ ])?[a-zA-ZÀ-ÿ]*)*$/;

  return regexNome.test(nome);
}

function validarFormatoEmail(email) {
  const regexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  return regexEmail.test(email);
}

function validarFormatoSenha(senha) {
  if (!senha) {
    return;
  }
  if (senha.length < 8) {
    return false;
  }
  if (!/\d/.test(senha)) {
    return false;
  }

  return true;
}

export { validarNome, validarFormatoEmail, validarFormatoSenha };
