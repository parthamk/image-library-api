const express = require("express");
const cors = require("cors");
require("dotenv").config();

const imageRoutes = require("./routes/imageRoutes");

const app = express();
const PORT = process.env.PORT || 8066;

app.use(cors());

// Routes
app.use("/api", imageRoutes);

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
