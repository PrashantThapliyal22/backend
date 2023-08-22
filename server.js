const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  console.log("kaise,ho saare");
  res.send("ke haal hai");
});
app.delete("/demo", (req, res) => {
  res.send("kaim chod");
});
