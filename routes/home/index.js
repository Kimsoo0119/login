"uset strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); //home.ctrl 연결

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router