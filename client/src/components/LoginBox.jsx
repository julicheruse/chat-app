import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button, TextField, Paper } from "@material-ui/core";

export default function LoginBox(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit} style={{ padding: "100px" }}>
        <Typography
          variant="h4"
          align="inherit"
          style={{ marginBottom: "25px" }}
        >
          WELCOME TO MY CHAT APP!
        </Typography>
        <Typography color="textPimary" variant="subtitle1" display="block">
          What's your name?
        </Typography>
        <TextField
          onChange={(e) => props.setName(e.target.value)}
          style={{ width: "300px" }}
        />

        <Button
          component={Link}
          to={`/chat`}
          type="submit"
          variant="contained"
          color="secondary"
          style={{
            color: "white",
            marginLeft: "20px",
          }}
        >
          Enter Chat
        </Button>
      </form>
    </Paper>
  );
}
