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

var names = [];

io.on("connection", (socket) => {
  socket.on("conectado", (name) => {
    names = [...names, name];
    io.emit("guests", names);
    io.emit("conectado", name);
    console.log(names);
  });
  socket.on("message", (name, message) => {
    io.emit("messages", { name, message });
  });
  socket.on("image", (name, image, tags) => {
    io.emit("messages", { name, image, tags });
  });
});

server.listen(3001, () => console.log("arrancó en el 3001"));
