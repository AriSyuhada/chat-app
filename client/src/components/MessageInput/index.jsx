import React from "react";

export default function MessageInput({currentRoom, username}) {
  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    const body = e.target.message.value;
    e.target.message.value = '';

    await fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        room_id: currentRoom,
        sender: username,
        body: body,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmitMessage} className="message-form">
      <input className="message-input" type="text" name="message" />
      <button className="message-send-button" type="submit">
        Send
      </button>
    </form>
  );
}