const { Router } = require("express");

const extrairToken = require("../middleware/extrairToken");
const UsersController = require("../controllers/UsersController");

const usersRouter = Router();
const userController = new UsersController();

usersRouter.post("/", userController.create);
usersRouter.get("/", extrairToken, userController.fetchPerfil);
usersRouter.put("/", extrairToken, userController.updatePerfil)

module.exports = usersRouter;
