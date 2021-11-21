const express = require("express");
const app = express();
const PORT = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Anyone but Republicans, 2024!");
});

const server = app.listen(PORT, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
