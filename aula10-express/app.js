const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req.cookies);
  const auth = req.headers.authorization;

  if (auth === "aklsdalskd") {
    res.send({ data: "Oi" });
    return;
  }

  res.send({ data: "Não te conheço" });
});

app.listen(3000, () => {
  console.log("Listening");
});
