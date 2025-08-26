import React from "react";

function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <div className="message-text">{text}</div>
    </div>
  );
}

export default Message;
