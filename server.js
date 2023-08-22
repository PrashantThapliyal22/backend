// create server with the use of express
const express = require("express");
const app = express();

// use bodyparse to  parse data from req body
const bodyparse = require("body-parser");

// use bodyparse in app for json
app.use(bodyparse.json());

// start the sever with the hgelp of app.listen
app.listen(8000, () => {
  console.log("server started at port 8000");
});

// use routing like '/'   ,'/home'
// use get method for feteching data from  seerver
app.get("/", (req, res) => {
  console.log("fetching some data using get method");
  res.send("hey there, prashant is here");
});

// use post method for  adding data to server
app.post("/home", (req, res) => {
  const { name, price } = req.body;
  res.send("all set to go");
});
