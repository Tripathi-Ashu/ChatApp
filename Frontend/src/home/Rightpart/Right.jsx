import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";

function Right() {
  return (
    <div className="w-[70%] bg-slate-900 text-gray-300 ">
      <Chatuser></Chatuser>
      <div
        className="flex-1 overflow-auto"
        style={{ minHeight: "calc(92vh - 8vh)" }}
      >
        <Messages></Messages>
      </div>
      <Typesend></Typesend>
    </div>
  );
}

export default Right;
