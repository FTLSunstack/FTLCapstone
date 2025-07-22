const express = require("express");
const router = express.Router();
const controller = require("../controllers/glossaryController");

// GET
router.get("/", controller.getAllTerms);
router.get("/:search", controller.getTermBySearch);

module.exports = router;
