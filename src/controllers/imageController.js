const {
  getDirectoryContents,
  collectImages,
} = require("../services/githubService");

exports.getDirectories = async (req, res) => {
  try {
    const contents = await getDirectoryContents();
    const directories = [];

    for (const item of contents) {
      if (item.type === "dir") {
        const images = await collectImages(item.path);
        directories.push({
          name: item.name,
          path: item.path,
          imageCount: images.length,
        });
      }
    }

    res.json(directories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getImagesByFolder = async (req, res) => {
  try {
    const { folder } = req.params;
    const images = await collectImages(folder);
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};