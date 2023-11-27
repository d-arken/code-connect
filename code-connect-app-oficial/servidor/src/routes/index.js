const { Router } = require("express");

const extrairToken = require("../middleware/extrairToken");

const loginRouter = require("./login.routes");
const registerRouter = require("./register.routes");
const mensagemRouter = require("./mensagem.routes");
const perfilRouter = require("./perfil.routes")

const routes = Router();

routes.use("/login", loginRouter);
routes.use("/cadastro", registerRouter);
routes.use("/mensagem", extrairToken, mensagemRouter);
routes.use("/perfil", extrairToken, perfilRouter)

module.exports = routes;
