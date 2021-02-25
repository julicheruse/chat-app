import React, { useState } from "react";
import UsersList from "./UsersList";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function Chat(props) {
  const { name } = props;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([""]);

  return (
    <div>
      <ChatMessages name={name} messages={messages} />
      <ChatInput
        message={message}
        messages={messages}
        setMessage={setMessage}
        setMessages={setMessages}
      />
      <UsersList name={name} />
    </div>
  );
}
