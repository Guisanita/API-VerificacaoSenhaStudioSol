const express = require("express");
const routes = require("./server");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080);