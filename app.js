const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const usersRouter = require("./routes/users");
const AuthRouter = require("./routes/Auth");
const morgan = require("morgan");

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
app.use("/api/users", usersRouter);
app.use("/api/auth", AuthRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Server

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
