const express = require("express");
const cors = require("cors");
const routes = require("./routes/imageRoutes");
const authenticate = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Protect all API routes with API key
app.use("/api", authenticate, routes);

module.exports = app;