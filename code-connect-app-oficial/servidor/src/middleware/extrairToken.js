const jwt = require("jsonwebtoken");

const extrairToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"].replace(/^Bearer /, "");
    jwt.verify(token, "chaveSecreta", (erro, userDescriptografado) => {
      req.userId = userDescriptografado.user[0].id;
    });
    next();
  } catch (error) {
    res
      .status(401)
      .json({ error: "falha na authenticação", message: error.message });
  }
};

module.exports = extrairToken;