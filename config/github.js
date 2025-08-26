const OWNER = process.env.OWNER;
const REPO = process.env.REPO;
const BASE_URL = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

module.exports = { BASE_URL };