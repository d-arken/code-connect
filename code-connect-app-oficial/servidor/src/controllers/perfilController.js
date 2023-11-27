const sqliteConnection = require("../database/sqlite")

async function obterPerfil(req, res) {
  const database = await sqliteConnection();
  try{
    const perfis = await database.all(
      "SELECT * FROM users WHERE id = ?", [req.userId]
    )
    res.json(perfis[0])
  } catch(error) {
    console.error("erro ao obter perfis:", error);
  }
}

async function alterarNome(req, res) {
  const {content} = req.body
  const database = await sqliteConnection();
  try {
    await database.run(
      'UPDATE users SET name = ? WHERE id = ?', [content, req.userId]
    )
  } catch(error) {
    console.error(error);
  }
}

async function alterarEmail(req, res) {
  const { content } = req.body;
  const database = await sqliteConnection();
  try {
    await database.run(
      'UPDATE users SET email = ? WHERE id = ?', [content, req.userId]
    )
  } catch (error) {
    console.error(error);
  }
}

async function alterarSenha(req, res) {
  const { content } = req.body;
  const database = await sqliteConnection();
  try {
    await database.run(
      'UPDATE users SET password = ? WHERE id = ?', [content, req.userId]
    )
  } catch(error) {
    console.error(error);
  }
}

module.exports = { obterPerfil, alterarNome, alterarEmail, alterarSenha }