const { Router } = require("express");
const { obterMensagens, adicionarMensagemController } = require("../controllers/mensagemController");

const routes = Router();

routes.get("/obterMensagem", obterMensagens)
routes.post("/adicionarMensagem", adicionarMensagemController)

module.exports = routes;