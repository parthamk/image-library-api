// // controllers/imageController.js
// const {
//   collectImages,
//   getDirectoryContents,
// } = require("../services/githubService");

// // Get all directories with image counts
// const getDirectories = async (req, res) => {
//   try {
//     const contents = await getDirectoryContents();
//     const directories = [];

//     for (const item of contents) {
//       if (item.type === "dir") {
//         const images = await collectImages(item.path);
//         directories.push({
//           name: item.name,
//           path: item.path,
//           imageCount: images.length,
//         });
//       }
//     }

//     res.json(directories);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get images from a specific folder
// const getImages = async (req, res) => {
//   try {
//     const { folder } = req.params;
//     const images = await collectImages(folder);
//     res.json(images);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = { getDirectories, getImages };

const { getDirectoryContents } = require("../services/githubService");

// Get all top-level categories inside images/
const getDirectories = async (req, res) => {
  try {
    const contents = await getDirectoryContents("images"); // only look under /images
    const directories = [];

    for (const item of contents) {
      if (item.type === "dir") {
        const subContents = await getDirectoryContents(item.path);
        const subFolders = subContents.filter((f) => f.type === "dir");
        directories.push({
          name: item.name,
          path: item.path,
          subfolderCount: subFolders.length,
        });
      }
    }

    res.json({
      summary: {
        totalCategories: directories.length,
        totalSubfolders: directories.reduce(
          (sum, d) => sum + d.subfolderCount,
          0
        ),
      },
      categories: directories,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get details inside images/<category>/[<subfolder>]
const getImages = async (req, res) => {
  try {
    const { folder, subfolder } = req.params;
    const basePath = subfolder
      ? `images/${folder}/${subfolder}`
      : `images/${folder}`;

    const contents = await getDirectoryContents(basePath);

    const folders = [];
    const images = [];

    for (const item of contents) {
      if (item.type === "dir") {
        const subContents = await getDirectoryContents(item.path);
        const imgCount = subContents.filter(
          (f) => f.type === "file" && /\.(png|jpe?g|gif|svg)$/i.test(f.name)
        ).length;

        folders.push({
          name: item.name,
          path: item.path,
          imageCount: imgCount,
        });
      } else if (
        item.type === "file" &&
        /\.(png|jpe?g|gif|svg)$/i.test(item.name)
      ) {
        images.push({
          name: item.name,
          path: item.path,
          url: item.download_url,
        });
      }
    }

    res.json({
      summary: {
        totalSubfolders: folders.length,
        totalImages: images.length,
      },
      currentPath: basePath,
      subfolders: folders,
      images: images,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getDirectories, getImages };