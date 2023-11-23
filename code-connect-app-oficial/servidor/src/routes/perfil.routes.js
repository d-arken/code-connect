const { Router } = require("express");

const { obterPerfil, alterarNome, alterarEmail, alterarSenha } = require("../controllers/perfilController")

const routes = Router();

routes.get("/", obterPerfil);
routes.put("/alterarNome", alterarNome)
routes.put("/alterarEmail", alterarEmail)
routes.put("/alterarSenha", alterarSenha)

module.exports = routes;