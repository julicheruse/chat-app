import React from "react";

import {
  Typography,
  Paper,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

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
      <div
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#80d197",
        }}
      >
        <Typography align="center" variant="button">
          You're logged as:
        </Typography>
      </div>
      <p
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#80bad1",
          borderRadius: 10,
          color: "white",
        }}
      >
        <ListItem key={name}>
          <ListItemAvatar>
            <Avatar>{name[0] && name[0].toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} />
        </ListItem>
      </p>
    </Paper>
  );
}
