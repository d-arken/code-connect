const sqliteConnection = require("../database/sqlite");

class MensagemController {
  async fetchMessage(request, response) {
    try {
      const database = await sqliteConnection();

      const messages = await database.all(
        "SELECT * FROM messages JOIN users ON messages.user_id = users.id"
      );
      response.json(messages);
    } catch (error) {
      console.error("Erro ao obter mensagens:", error);
      res.status(500).json({ error: "erro ao obter mensagens" });
    }
  }

  async createMessage(request, response) {
    const { content } = request.body;
    try {
      const database = await sqliteConnection();
      await database.run(
        "INSERT INTO messages (content, user_id) VALUES (?, ?)",
        [content, request.userId]
      );
      response.json({ success: true });
    } catch (error) {
      console.error("erro ao obter mensagem:", error);
      response.status(500).json();
    }
  }
}

module.exports = MensagemController;
