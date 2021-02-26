import React, { useEffect } from "react";
import socket from "./Socket";
import { Typography, Paper, List, ListItem } from "@material-ui/core";

export default function GuestList({ guests, setGuests, name }) {
  useEffect(() => {
    socket.on("guests", (guest) => {
      setGuests([...guests, guest]);
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
      <Typography>Guest List</Typography>
      <List dense={true}>
        {guests !== []
          ? guests.map((g) => (
              <ListItem key={g}>
                <Typography>{g}</Typography>
              </ListItem>
            ))
          : null}
      </List>
    </Paper>
  );
}
