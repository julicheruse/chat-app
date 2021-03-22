import React, { useEffect, useState } from "react";

import { Paper } from "@material-ui/core";
import socket from "./Socket";
import ChatMsg from "./ChatMsg";
import ViewImage from "./ViewImage";

export default function ChatMessages({ messages, name, setMessages }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    socket.on("messages", (msg) => {
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
        paddingBlockLeft: "20px",
        paddingBlockRight: "20px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e3e3e3",
        }}
      >
        MESSAGES
      </div>
      {messages &&
        messages.map((m) =>
          m.image ? (
            <div>
              <ChatMsg
                key={m.image}
                avatar={m.sender[0]}
                side={m.name === name ? "right" : "left"}
                messages={[
                  <img
                    alt="imagen"
                    width="150"
                    src={m.image}
                    onClick={() => {
                      setTags(m.tags);
                      setImage(m.image);
                      handleClick();
                    }}
                  ></img>,
                ]}
              />
            </div>
          ) : (
            <ChatMsg
              key={m.timestamp}
              avatar={m.sender[0]}
              side={m.sender === name ? "right" : "left"}
              messages={
                m.type === "text"
                  ? [m.content]
                  : [
                      <img
                        alt="imagen"
                        width="150"
                        src={`data:image/jpg;base64,${m.content.image}`}
                        onClick={() => {
                          setTags(m.content.tags);
                          setImage(m.content.image);
                          handleClick();
                        }}
                      ></img>,
                    ]
              }
            />
          )
        )}
      {open ? (
        <ViewImage
          open={open}
          setOpen={setOpen}
          image={image}
          tags={tags}
        ></ViewImage>
      ) : null}
    </Paper>
  );
}
