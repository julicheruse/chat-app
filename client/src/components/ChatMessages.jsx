import React, { useEffect } from "react";

import { Typography, Paper } from "@material-ui/core";

export default function ChatMessages(props) {
  /*  useEffect(() => {}, [props.messages]); */
  console.log("mesjs", props);
  return (
    <Paper
      variant="outlined"
      square
      style={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        alignSelf: "center",
      }}
    >
      {props.messages &&
        props.messages.map((m) => (
          <Typography variant="body2">
            {props.name}: {m}
          </Typography>
        ))}
    </Paper>
  );
}
