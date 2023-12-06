const { Router } = require("express");

const extrairToken = require("../middleware/extrairToken");

const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const mensagemRoutes = require("./mensagem.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/auth", authRoutes);
routes.use("/mensagem", extrairToken, mensagemRoutes);

module.exports = routes;
