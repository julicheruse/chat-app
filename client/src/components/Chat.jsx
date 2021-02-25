import React from "react";
import { useParams } from "react-router-dom";
import UsersList from "./UsersList";

export default function Chat(props) {
  const { name } = props;
  return <div>{name}</div>;
}
