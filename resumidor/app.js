const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API em execução na porta ${PORT}!`);
});

module.exports = app;
