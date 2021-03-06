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

  socket.on("streamSelected", (data) => {
    io.sockets.emit("streamSelected", data);
  });
});

// Setup for Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
