const express = require("express");
const router = express.Router();

const { getDirectories, getImages } = require("../controllers/imageController");
const authenticateApiKey = require("../middleware/auth");

// Apply API key middleware
router.get("/directories", authenticateApiKey, getDirectories);
router.get("/images/:folder", authenticateApiKey, getImages);

module.exports = router;