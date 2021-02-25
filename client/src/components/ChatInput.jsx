import React, { useState } from "react";

import { Typography, Button, TextField, Paper } from "@material-ui/core";

export default function UsersList(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setMessages([...props.messages, props.message]);
  };
  return (
    <Paper>
      <form
        onSubmit={handleSubmit}
        label="Write your message"
        style={{ padding: "10px", flexDirection: "column" }}
      >
        <TextField onChange={(e) => props.setMessage(e.target.value)} />
        <br />

        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Paper>
  );
}
