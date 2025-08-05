const express = require("express");
const router = express.Router();
const controller = require("../controllers/snippetController");

router.get("/:userId", controller.getAllSnippets);
router.post("/:userId", controller.saveSnippet);
router.get("/snippet/:codeId", controller.getSnippet);
router.put("/snippet/:codeId", controller.updateSnippet);
router.delete("/snippet/:codeId", controller.deleteSnippet);

module.exports = router;
