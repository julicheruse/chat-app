import React, { useState } from "react";
import { Link, Router } from "react-router-dom";

import { Typography, Button, TextField, Paper } from "@material-ui/core";

export default function LoginBox(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitiado");
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit} style={{ padding: "100px" }}>
        <Typography variant="h5">Welcome to My Chat APP</Typography>
        <Typography variant="h6">What's your name?</Typography>
        <TextField onChange={(e) => props.setName(e.target.value)} />
        <br />

        <Button
          component={Link}
          to={`/chat`}
          type="submit"
          variant="contained"
          color="primary"
        >
          Enter Chat
        </Button>
      </form>
    </Paper>
  );
}
