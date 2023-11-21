const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");
const novaMesangem = require("./novaMesangem");

async function migrationRun() {
  const schemas = [createUsers, novaMesangem].join(";");
  try {
    const database = await sqliteConnection();

    //executar migrations
    await database.exec(schemas);
  } catch (error) {
    console.error("Erro ao executar migrações:", error);
  }
}

module.exports = migrationRun;