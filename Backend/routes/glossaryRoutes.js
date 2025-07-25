const express = require("express");
const router = express.Router();
const controller = require("../controllers/glossaryController");

// GET
router.get("/", controller.getAllTerms);
router.get("/en/:search", controller.getTermByEngSearch);
router.get("/es/:search", controller.getTermByEspSearch);

module.exports = router;
