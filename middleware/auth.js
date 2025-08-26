function authenticateApiKey(req, res, next) {
  const key = req.headers["x-api-key"] || req.query.api_key;
  if (!key || key !== process.env.API_KEY) {
    return res.status(401).json({ error: "Unauthorized. Invalid API key." });
  }
  next();
}

module.exports = authenticateApiKey;