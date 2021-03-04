import React, { useEffect, useState } from "react";
import socket from "./Socket";
import UsersList from "./UsersList";
import GuestList from "./GuestList";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatToolbar from "./ChatToolbar";

export default function Chat({ name }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [guests, setGuests] = useState([]);
  useEffect(() => {
    socket.emit("conectado", name);
  }, [name]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <UsersList name={name} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "end",
        }}
      >
        <ChatMessages
          name={name}
          messages={messages}
          setMessages={setMessages}
        />
        <ChatInput
          name={name}
          message={message}
          messages={messages}
          setMessage={setMessage}
          setMessages={setMessages}
        />
        <ChatToolbar />
      </div>
      <GuestList guests={guests} setGuests={setGuests} name={name} />
    </div>
  );
}
