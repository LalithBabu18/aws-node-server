const express = require('express');
const routes = express.Router();
const { users } = require('./controller');
const { login, register, getUserById } = require('./controller');


routes.get("/", users);
routes.post("/login", login);
routes.post("/register", register);
routes.get("/:id", getUserById)

module.exports = routes;