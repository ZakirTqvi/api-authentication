import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// TODO: Replace the values below with your own before running this file.
const yourUsername = "zakir";
const yourPassword = "zakir@123";
const yourAPIKey = "9609997e-0b36-4403-bfc6-d6e8111350dc";
const yourBearerToken = "59face65-72ee-40fc-8e34-0ed95ad1433d";

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
  });
  

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });