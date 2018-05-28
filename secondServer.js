const express = require("express");
const request = require("request");
const app = express();

app.get("/", (req, res) => {
  request("http://localhost:3000", function (error, response, body) {
      console.log("error:", error); 
      console.log("statusCode:", response && response.statusCode); 
      console.log("body:", body); 
  });
  res.send("Hello World!")
});

app.listen(3300, () => console.log("Example app listening on port 3000!"));
