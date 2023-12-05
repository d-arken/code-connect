const { Router } = require("express");

const { obterPerfil, alterarPerfil } = require("../controllers/perfilController")

const routes = Router();


routes.get("/", obterPerfil);
routes.put("/alterarPerfil", alterarPerfil)

module.exports = routes;