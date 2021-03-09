import React from "react";

import ImageDialog from "./ImageDialog";

export default function ChatToolbar({ name }) {
  return (
    <div>
      <ImageDialog name={name} />
    </div>
  );
}
