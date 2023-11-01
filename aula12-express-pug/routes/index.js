var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mogi das Cruzes",
    vizinhos: ["João", "Cleber", "Souza"],
  });
});

module.exports = router;
