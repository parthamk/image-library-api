const { Router } = require("express");
const { getDirectories, getImages } = require("../controllers/imageController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

// Apply API key authentication
router.use(authenticate);

// Routes
router.get("/directories", getDirectories);
router.get("/images/:folder", getImages);

module.exports = router;