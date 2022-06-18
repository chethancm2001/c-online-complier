const express = require("express");
const handlepost = require("./controller");
const router = express.Router();

router.post("/api", handlepost);

module.exports = router;
