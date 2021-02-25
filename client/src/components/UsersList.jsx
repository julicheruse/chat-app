import React from "react";

import { Typography, Paper } from "@material-ui/core";

export default function UsersList(props) {
  return (
    <Paper
      variant="outlined"
      square
      style={{
        display: "flex",
        justifySelf: "end",
        alignSelf: "center",
      }}
    >
      <Typography>{props.name}</Typography>
    </Paper>
  );
}
