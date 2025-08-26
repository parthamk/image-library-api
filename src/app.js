const express = require("express");
const cors = require("cors");
const routes = require("./routes/imageRoutes");
const authenticate = require("./middleware/authMiddleware");
const frontendPage = require("./frontend");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Public landing page (no API key required)
app.get("/", (req, res) => {
  res.send(frontendPage());
});

// Apply API key middleware first
app.use(authenticate);

// Then mount routes
app.use("/api", routes);

module.exports = app;