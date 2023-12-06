const { Router } = require("express")

const AuthController = require("../controllers/AuthControler")

const authRouter = Router()
const authController = new AuthController();

authRouter.post("/", authController.login)

module.exports = authRouter;

