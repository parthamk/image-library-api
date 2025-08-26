import { Router } from "express";
import { getDirectories, getImages } from "../controllers/imageController.js";
import { authenticateApiKey } from "../middleware/authMiddleware.js";

const router = Router();

// Apply API key authentication to all routes
router.use(authenticateApiKey);

// Routes
router.get("/directories", getDirectories);
router.get("/images/:folder", getImages);

export default router;