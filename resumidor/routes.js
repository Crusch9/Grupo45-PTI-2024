const express = require("express");
const router = express.Router();
const { summarizeContent } = require("./controllers/summary.controller");

router.post("/resumo", summarizeContent);

module.exports = router;
