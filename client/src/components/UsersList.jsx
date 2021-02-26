import React from "react";

import { Typography, Paper } from "@material-ui/core";

export default function UsersList({ name }) {
  return (
    <Paper
      variant="outlined"
      square
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        width: "200px",
        height: "500px",
        justifyContent: "flex-start",
      }}
    >
      <Typography>You're logged as:</Typography>
      <p>
        <Typography>{name}</Typography>
      </p>
    </Paper>
  );
}
