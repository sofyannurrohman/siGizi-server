const express = require("express");
const router = express.Router();
const { format } = require("util");
const uploadImageToGCS = require("../middleware/upload"); // Import GCS upload function
const { Storage } = require("@google-cloud/storage");

const { ArticleImage } = require("../models");
const processFile = require("../middleware/upload");
keyFilename = "credentials.json";
const storage = new Storage({ keyFilename });
const bucket = storage.bucket("article-images-caps");

router.post("/articles/:id/upload", async (req, res) => {
  try {
    const articleID = req.params.id;
    await processFile(req, res);

    if (!req.file) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    // Create a new blob in the bucket and upload the file data.
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on("error", (err) => {
      res.status(500).send({ message: err.message });
    });

    blobStream.on("finish", async (data) => {
      // Create URL for directly file access via HTTP.
      const publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      );

      try {
        // Make the file public
        await bucket.file(req.file.originalname).makePublic();
      } catch {
        return res.status(500).send({
          message: `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
          url: publicUrl,
        });
      }
      const newImage = await ArticleImage.create({
        articleID: articleID,
        filename: `${req.file.originalname}`,
        url: publicUrl,
      });

      res.status(200).send({
        message: "Uploaded the file successfully: " + req.file.originalname,
        url: publicUrl,
        data: newImage,
      });
    });

    blobStream.end(req.file.buffer);
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
});

module.exports = router;
