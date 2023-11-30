const sqliteConnection = require("../database/sqlite");

async function obterMensagens(req, res) {
  const database = await sqliteConnection();
  try {
    const messages = await database.all(
      "SELECT * FROM messages JOIN users ON messages.user_id = users.id"
    );
    res.json(messages);
  } catch (error) {
    console.error("Erro ao obter mensagens:", error);
    res.status(500).json({ error: "erro ao obter mensagens" });
  }
}

async function adicionarMensagemController(req, res) {
  const { content } = req.body;
  const database = await sqliteConnection();

  try {
    await database.run(
      "INSERT INTO messages (content, user_id) VALUES (?, ?)",
      [content, req.userId]
    );
    res.json({ success: true });
  } catch (error) {
    console.error("erro ao obter mensagens:", error);
    res.status(500).json({ error: "erro ao adicionar mensagem" });
  }
}

module.exports = { obterMensagens, adicionarMensagemController }