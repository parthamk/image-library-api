const express = require("express");
const {
  getDirectories,
  getImagesByFolder,
} = require("../controllers/imageController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// protect with API key
router.get("/directories", authenticate, getDirectories);
router.get("/images/:folder", authenticate, getImagesByFolder);

module.exports = router;