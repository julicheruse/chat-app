import React, { useEffect } from "react";
import socket from "./Socket";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

export default function GuestList({ guests, setGuests, name }) {
  useEffect(() => {
    socket.on("guests", (guests) => {
      setGuests(guests);
    });
  }, [guests, setGuests, name]);

  return (
    <Paper
      variant="outlined"
      square
      style={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "flex-start",
        alignSelf: "center",
        width: "200px",
        height: "500px",
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
          Guest List
        </Typography>
      </div>
      <List dense={true}>
        {guests !== []
          ? guests.map((g) => (
              <ListItem key={g}>
                <ListItemAvatar>
                  <Avatar>{g[0] && g[0].toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={g} color="#FFFFFF" />
              </ListItem>
            ))
          : null}
      </List>
    </Paper>
  );
}
