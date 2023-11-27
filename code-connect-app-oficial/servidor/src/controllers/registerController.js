const sqliteConnection = require("../database/sqlite");

async function registerController(req, res) {
  const { nome, email, senha } = req.body;
  const database = await sqliteConnection();

  await database.run(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [nome, email, senha],
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao criar conta" });
      }
    }
  );
  res.json({ success: true });
}

module.exports = registerController;
