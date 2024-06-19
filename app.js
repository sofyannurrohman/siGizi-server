const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const usersRouter = require("./routes/users");
const articlesRouter = require("./routes/articles");
const articleImageRouter = require("./routes/article_image");
const commentsRouter = require("./routes/comments");
const predictRouter = require("./routes/predict");
const childsRouter = require("./routes/child");
const AuthRouter = require("./routes/Auth");
const morgan = require("morgan");

const multer = require("multer");

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().getTime() + "-" + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

dotenv.config();
//Middleware
app.use(express.json());
// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// });
app.use(morgan("dev"));
app.use(cors());

//Routing
app.use("/api/v1/", usersRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/", articlesRouter);
app.use("/api/v1/", articleImageRouter);
app.use("/api/v1/", commentsRouter);
app.use("/api/v1/", predictRouter);
app.use("/api/v1/", childsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
