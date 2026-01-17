// const express = require("express");
// const { getDirectories, getImages } = require("../controllers/imageController");
// const authenticate = require("../middleware/authMiddleware");

// const router = express.Router();

// // Apply API key authentication to all routes
// router.use(authenticate);

// // Routes
// router.get("/directories", getDirectories);
// router.get("/images/:folder", getImages);

// module.exports = router;

const express = require("express");
const { getDirectories, getImages } = require("../controllers/imageController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authenticate);

router.get("/directories", getDirectories);
router.get("/images/:folder", getImages);
router.get("/images/:folder/:subfolder", getImages);

module.exports = router;
