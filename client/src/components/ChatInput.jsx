import React from "react";

import { Button, TextField, Paper } from "@material-ui/core";
import socket from "./Socket";

export default function ChatInput({ name, message, setMessage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", name, message);
    setMessage("");
  };
  return (
    <Paper style={{ margin: "10px", display: "flex", alignSelf: "flex-end" }}>
      <form
        onSubmit={handleSubmit}
        style={{ padding: "10px", display: "flex", flexDirection: "column" }}
      >
        <label
          style={{
            padding: "10px",
            display: "flex",
            justifySelf: "flex-start",
          }}
        >
          Write your message
        </label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={message ? false : true}
            style={{ margin: "10px", color: "white" }}
          >
            Send
          </Button>
        </div>
      </form>
    </Paper>
  );
}
