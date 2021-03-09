import React, { useEffect } from "react";

import { Typography, Paper } from "@material-ui/core";
import socket from "./Socket";
import ChatMsg from "./ChatMsg";

export default function ChatMessages({ messages, name, setMessages }) {
  useEffect(() => {
    socket.on("messages", (msg) => {
      setMessages([...messages, msg]);
    });
  }, [messages, setMessages]);

  /* useEffect(() => {
    socket.on("picture", (pic) => {
      setMessages([...messages, pic]);
    });
  }, [messages, setMessages]); */
  console.log("mesjs", messages);
  return (
    <Paper
      variant="outlined"
      square
      style={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        alignSelf: "center",
        minHeight: "100px",
        height: "500px",
        maxHeight: "300px",
        width: "300px",
        paddingBlockStart: "20px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {messages &&
        messages.map((m) => (
          <ChatMsg
            avatar={m.name[0]}
            side={m.name === name ? "right" : "left"}
            messages={[m.message]}
          />
        ))}
    </Paper>
  );
}
