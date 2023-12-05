const sqliteConnection = require("../database/sqlite");

async function obterPerfil(req, res) {
  const database = await sqliteConnection();
  try {
    const perfis = await database.all("SELECT * FROM users WHERE id = ?", [
      req.userId,
    ]);
    res.json(perfis[0]);
  } catch (error) {
    console.error("erro ao obter perfis:", error);
  }
}

async function alterarPerfil(req, res) {
  const database = await sqliteConnection();
  const { name, email, password } = req.body.content;

  try {
    await database.run(
      `UPDATE users SET
      name = ?,
      email = ?,
      password = ?
      WHERE id = ?`,
      [name, email, password, req.userId]
    );
  } catch (error) {
    throw new AppError("Erro ao alterar perfil", error);
  }
}

module.exports = { obterPerfil, alterarPerfil };
