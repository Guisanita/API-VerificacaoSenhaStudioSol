require('dotenv').config();
const cors = require('cors');
const express = require('express');
const routes = require("./routes/password.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(8080);
