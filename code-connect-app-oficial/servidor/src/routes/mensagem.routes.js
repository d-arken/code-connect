const { Router } = require("express");

const MensagemController = require("../controllers/mensagemController");

const mensagemRouter = Router();
const mensagemController = new MensagemController();

mensagemRouter.get("/", mensagemController.fetchMessage)
mensagemRouter.post("/", mensagemController.createMessage)

module.exports = mensagemRouter