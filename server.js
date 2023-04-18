const app = require('express')();
const routes = require("./src/routes/password.routes");

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);