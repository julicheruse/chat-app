import React, { useEffect, useState } from "react";

import { Paper } from "@material-ui/core";
import socket from "./Socket";
import ChatMsg from "./ChatMsg";
import { Dialog } from "@material-ui/core";
import ViewImage from "./ViewImage";

export default function ChatMessages({ messages, name, setMessages }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("messages", (msg) => {
      console.log(msg);
      setMessages([...messages, msg]);
    });
  }, [messages, setMessages]);

  const handleClick = () => {
    console.log(open);
    setOpen(true);
  };

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
        messages.map((m) =>
          m.image ? (
            <div>
              <ChatMsg
                key={m.messages}
                avatar={m.name[0]}
                side={m.name === name ? "right" : "left"}
                messages={[
                  <img
                    alt="imagen"
                    width="150"
                    src={m.image}
                    onClick={handleClick}
                  ></img>,
                ]}
              />
              <ViewImage
                open={open}
                setOpen={setOpen}
                image={m.image}
                tags={m.tags}
              ></ViewImage>
            </div>
          ) : (
            <ChatMsg
              key={m.messages}
              avatar={m.name[0]}
              side={m.name === name ? "right" : "left"}
              messages={[m.message]}
            />
          )
        )}
    </Paper>
  );
}
