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
var time = new Date();

io.on("connection", (socket) => {
  socket.on("conectado", (name) => {
    if (name !== "") {
      names = [...names, name];
      io.emit("guests", names);
      io.emit("conectado", name);
      console.log(names);
    } else return;
  });
  socket.on("message", (name, message) => {
    io.emit("messages", {
      sender: name,
      timestamp: time.getTime(),
      type: "text",
      content: message,
    });
  });
  socket.on("image", async (name, image, tags) => {
    io.emit("messages", {
      sender: name,
      timestamp: time.getTime(),
      type: "image",
      content: { image: image.toString("base64"), tags },
    });
  });
});

server.listen(3001, () => console.log("arrancó en el 3001"));
