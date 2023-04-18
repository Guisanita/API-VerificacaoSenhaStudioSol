const express = require("express");
const routes = require("../src/routes/password.routes");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080);