const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const env = require("dotenv").config();
const app = express();
const router = require("./routes/todontroutes");

const HOST_URL = process.env.HOST_URL || "http://localhost";
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: true,
};

//Try to connect to mongodb server
connectDB();

//Middleware
//Parse JSON
app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.get("/", (req, res) => {
  res.json("Hello from the Backend Goblins!");
});

app.post("/", (req, res) => {
  const content = req.body;
  console.log(content);

  res.json(content);
});

//Start server
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
