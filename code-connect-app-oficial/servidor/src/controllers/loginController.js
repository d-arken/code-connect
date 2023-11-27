const jwt = require("jsonwebtoken");
const sqliteConnection = require("../database/sqlite");

async function loginController(req, res) {
  const { email, senha } = req.body;
  const database = await sqliteConnection();
  
  try {
    const user = await database.all(
      "SELECT * FROM USERS WHERE email = ? AND password = ?",
      [email, senha]
      );
    if (user.length > 0) {
      const token = jwt.sign({ user }, "chaveSecreta", { expiresIn: "24h" });
      res.json({ success: true, token });
    } else {
      res.status(401).json({ error: "Credenciais inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login", error });
  }
}

module.exports = loginController;
