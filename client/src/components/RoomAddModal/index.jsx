import React from "react";

export default function RoomAddModal({fetchRooms, setModalIsShow}) {
  const handleSubmitRoom = async (e) => {
    e.preventDefault();
    const name = e.target.room.value;
    e.target.room.value = '';
    
    await fetch("http://localhost:3000/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });

    setModalIsShow(false);

    fetchRooms();
  };

  return (
    <div className='modal'>
      <h2>Add Room</h2>
      <form onSubmit={handleSubmitRoom} className="group-form">
        <input className="group-input" type="text" name="room" />
        <button className="group-send-button" type="submit">
          Save
        </button>
      </form>
      <div onClick={() => setModalIsShow(false)} className="close-modal-button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  );
}