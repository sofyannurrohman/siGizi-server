const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const usersRouter = require("./routes/users");
const articlesRouter = require("./routes/articles");
const AuthRouter = require("./routes/Auth");
const morgan = require("morgan");

const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

dotenv.config();
//Middleware
app.use(express.json());
// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// });
app.use(morgan("dev"));
app.use(cors());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
//Routing
app.use("/api/users", usersRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/", articlesRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Server

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
