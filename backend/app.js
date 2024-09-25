const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const env = require("dotenv").config();
const app = express();
const router = require("./routes/todontroutes");
const consumer = require("./consumer/consumer");

const HOST_URL = process.env.HOST_URL || "http://localhost";
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: "*", // Eller specifika origins om du vill begränsa det, t.ex. 'http://localhost'
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

//Try to connect to mongodb server
connectDB();

//Start consumer
consumer();

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
