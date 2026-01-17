const OWNER = process.env.OWNER;
const REPO = process.env.REPO;
const BASE_URL = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

async function getDirectoryContents(path = "") {
  const res = await fetch(`${BASE_URL}/${path}`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

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
