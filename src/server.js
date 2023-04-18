require('dotenv').config();
const cors = require('cors');
const express = require('express');
const routes = require("./routes/password.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("teste")
})

app.use(routes);

app.listen(process.env.PORT || 3000);

module.exports.handler = serverless(app);