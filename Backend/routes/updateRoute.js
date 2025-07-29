const express = require("express");
const router = express.Router();
const controller = require("../controllers/updateController");

router.put("/:userId", controller.updateUser);

module.exports = router;
