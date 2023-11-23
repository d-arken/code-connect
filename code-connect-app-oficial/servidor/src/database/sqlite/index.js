const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

async function sqliteConnection() {
  
  try {
    const database = await sqlite.open({
      filename: path.resolve(__dirname, "..", "database.db"),
      driver: sqlite3.Database,
    });
    return database;
  } catch (error) {
    console.error("Erro na conexão com o banco de dados:", error);
    throw error;
  }
}

module.exports = sqliteConnection;
