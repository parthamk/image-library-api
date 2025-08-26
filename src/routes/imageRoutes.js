const { Router } = require("express");
const { getDirectories, getImages } = require("../controllers/imageController");
const { authenticateApiKey } = require("../middleware/authMiddleware");

const router = Router();

// Apply API key authentication
router.use(authenticateApiKey);

// Routes
router.get("/directories", getDirectories);
router.get("/images/:folder", getImages);

module.exports = router;