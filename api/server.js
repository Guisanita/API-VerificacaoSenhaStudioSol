const app = require('./index');
const routes = require("../src/routes/password.routes");

app.use(express.json());
app.use(routes);

app.listen(8080);