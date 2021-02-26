import React, { useEffect } from "react";

import { Typography, Paper } from "@material-ui/core";
import socket from "./Socket";

export default function ChatMessages({ messages, name, setMessages }) {
  useEffect(() => {
    socket.on("messages", (msg) => {
      setMessages([...messages, msg]);
    });
  }, [messages, setMessages]);
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
        width: "300px",
        paddingBlock: "20px",
      }}
    >
      {messages &&
        messages.map((m) => (
          <Typography
            variant="body2"
            style={
              m.name !== name
                ? {
                    textAlign: "left",
                  }
                : {
                    textAlign: "right",
                  }
            }
          >
            {m !== "" ? m.name + ": " + m.message : null}
          </Typography>
        ))}
    </Paper>
  );
}
