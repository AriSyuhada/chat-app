import React from "react";

export default function MessagesFrame({messages, username}) {
  return (
    <div className="messages" id="messages">
      {
        messages.map((message) => (
          <div className={`message ${message.sender === username ? 'm-right sender' : 'm-left receiver'}`} key={message.id}>
            <p className='message-name'>{message.sender}</p>
            <p className='message-body'>{message.body}</p>
            <div className='bubble-notch'></div>
          </div>
        ))
      }
    </div>
  );
}