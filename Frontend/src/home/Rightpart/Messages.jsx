import React from "react";
import Message from "./Message";

function Messages() {
  return (
    <div
      className="flex-1 overflow-auto"
      style={{ maxHeight: "calc(92vh - 8vh)" }}
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
