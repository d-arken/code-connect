const jwt = require("jsonwebtoken");
const sqliteConnection = require("../database/sqlite");

class AuthController {
  async login(request, response) {
    const { email, password } = request.body;
    const database = await sqliteConnection();
    try {
      const user = await database.all(
        "SELECT * FROM users WHERE email = ? AND password = ?", [email, password]
        );
      if (user.length > 0) {
        const token = jwt.sign({ user }, "chaveSecreta", { expiresIn: "24h" });
        response.json({ sucess: true, token });
      } else {
        response.status(401).json({ error: "Credenciais inválidas" });
      }
    } catch (error) {
      console.error("user não encontrado");
      response.status(500).json({ message: "Erro ao fazer login", error });
    }
  }
}

module.exports = AuthController;
