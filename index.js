const express = require("express");

// App setup
const app = express();
const server = app.listen(5000, () => {
  console.log("Listening to requests on port 5000.");
});
