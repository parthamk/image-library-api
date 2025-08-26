const { BASE_URL } = require("../config/github");

// Fetch contents from GitHub repo
async function getDirectoryContents(path = "") {
  const res = await fetch(`${BASE_URL}/${path}`);
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }
  return res.json();
}

// Recursively collect images
async function collectImages(path) {
  const contents = await getDirectoryContents(path);
  const images = [];

  for (const item of contents) {
    if (item.type === "file" && /\.(png|jpe?g|gif|svg)$/i.test(item.name)) {
      images.push({
        name: item.name,
        path: item.path,
        url: item.download_url,
      });
    } else if (item.type === "dir") {
      const subImages = await collectImages(item.path);
      images.push(...subImages);
    }
  }

  return images;
}

module.exports = { getDirectoryContents, collectImages };