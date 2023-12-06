const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    try {
      const { nome, email, senha } = request.body;
      const database = await sqliteConnection();

      await database.run(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [nome, email, senha]
      );

      response.json({ success: true });
    } catch (error) {
      buscar;
      response.status(500).json({ error: "Erro ao criar conta" });
    }
  }
  async fetchPerfil(request, response) {
    try {
      const database = await sqliteConnection();
      const perfil = await database.all("SELECT * FROM users WHERE id = ?", [ request.userId ]);
      response.json(perfil[0]);
    } catch (error) {
      console.error("erro ao obter perfil", error);
      response.status(404).json({ error: "perfil não encontrado" });
    }
  }
  async updatePerfil(request, response) {
    const { name, email, password} = request.body.content
    try {
      const database = await sqliteConnection()

      await database.run(
        `UPDATE users SET
        name = ?,
        email = ?,
        password = ?
        WHERE id = ?`,
        [name, email, password, request.userId]
      )
    } catch (error) {
      throw new AppError("Erro ao alterar perfil", error);
    }
  }

}

module.exports = UsersController;
