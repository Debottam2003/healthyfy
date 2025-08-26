import React, { useState } from "react";
import Message from "./Message";

function Generate() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Generate your Recipe" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    // Fake bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "You said: " + input }
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">💬 Chat UI</div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <Message key={i} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Generate;
