const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("conectado", (name) => {
    io.emit("guests", name);
    io.emit("conectado", name);
    console.log(name);
  });
  socket.on("message", (name, message) => {
    io.emit("messages", { name, message });
  });
});

server.listen(3001, () => console.log("arrancó en el 3001"));
