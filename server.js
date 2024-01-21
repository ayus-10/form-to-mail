// Require modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const main = require("./mail");

const PORT = process.env.PORT;

// Initialize express
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.post("/submit", (req, res) => {
  const data = req.body;
  const messageBody = `Email: ${data.email}, Message: ${data.message}`;
  main(messageBody)
    .then(() => {
      res.status(200).send("Successfully sent your message.");
    })
    .catch((error) => {
      res.status(500).send("Sorry, internal server error occured.");
    });
});
