const express = require("express");
const { verifyPassword } = require("../controllers/password.controllers");

const routes = express();

routes.post("/verify", verifyPassword);

module.exports = routes;