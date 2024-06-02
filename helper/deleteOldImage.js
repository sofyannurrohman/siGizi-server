async function deleteOldImage(filename) {
  const fs = require("fs/promises");
  const path = require("path");
  try {
    const filePath = path.join(__dirname, "../" + filename);

    await fs.unlink(filePath);
  } catch (error) {
    console.error("Error deleting old image:", error);
  }
}

module.exports = deleteOldImage;
