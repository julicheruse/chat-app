import React from "react";

import { Typography, Button, TextField, Paper } from "@material-ui/core";

export default function LoginBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitiado");
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit} style={{ padding: "100px" }}>
        <Typography variant="h5">Welcome to My Chat APP</Typography>
        <Typography variant="h6">What's your name?</Typography>
        <TextField></TextField>
        <br />
        <Button type="submit" variant="contained" color="primary">
          Enter Chat
        </Button>
      </form>
    </Paper>
  );
}
