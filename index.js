const express = require("express");
const socketIo = require("socket.io");

// App setup
const app = express();
const server = app.listen(5000, () => {
  console.log("Listening to requests on port 5000.");
});

// Socket setup
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("Made socket connection", socket.id);
});
