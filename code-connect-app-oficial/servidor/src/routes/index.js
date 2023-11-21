const { Router } = require("express");

const extrairToken = require("../middleware/extrairToken");

const loginRouter = require("./login.routes");
const registerRouter = require("./register.routes");
const mensagem = require("./mensagem.routes");

const routes = Router();

routes.use("/login", loginRouter);
routes.use("/cadastro", registerRouter);
routes.use("/mensagem", extrairToken, mensagem);

module.exports = routes;
