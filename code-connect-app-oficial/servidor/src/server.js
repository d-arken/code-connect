const sqliteConnection = require("./database/sqlite");
const migrationRun = require("./database/sqlite/migrations");

const express = require("express");
const cors = require("cors");

const app = express();

const routes = require("./routes");
const PORT = 3333;

app.use(cors());
app.use(express.json());

sqliteConnection();
migrationRun();

app.use(routes);

// inicia servidor
app.listen(PORT, () => {
  console.log("👩‍🚒 ON FIRE 👩‍🚒");
});
