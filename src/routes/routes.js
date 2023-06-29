
const express = require("express");
const Route = express.Router();
const cors = require("cors");

Route.use(express.json());
Route.use(cors());

const userController = require("../controller/user.controller");

Route.get("/user", userController.getUserData);


module.exports = Route;