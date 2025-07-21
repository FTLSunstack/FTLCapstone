// setup all routes
const express = require("express");
const router = express.Router();
const controller = require("../controllers/geminiController");

router.post("/explain-code", controller.explainCode);

module.exports = router;
