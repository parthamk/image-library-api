const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

const app = express();
app.use(cors());
app.use("/api", imageRoutes);

module.exports = app; // export for Vercel