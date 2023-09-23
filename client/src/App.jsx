import { useEffect, useState } from 'react'
import './App.css'
import { MessageInput, MessagesFrame, RoomAddModal, RoomsContainer, UserInfo } from './components';

const WS_URL = 'ws://localhost:3000/cable';

function App() {
  const [currentRoom, setCurrentRooms] = useState('');
  const [guid, setGuid] = useState('');
  const [messages, setMessages] = useState([]);
  const [modalIsShow, setModalIsShow] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const messagesContainer = document.getElementById("messages");

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    if (currentRoom !== '') {
      setGuid(Math.random().toString(36).substring(2,15));
      fetchMessages();
    }
  }, [currentRoom]);

  useEffect(() => {
    resetScroll();
    if (messages.length > 0 || currentRoom !== '') {
      handleWebSocketReconnect();
    }
  }, [messages, currentRoom])

  const setupWebSocket = () => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log('WebSocket connection established');

      ws.send(
        JSON.stringify({
          command: 'subscribe',
          identifier: JSON.stringify({
            id: guid,
            channel: `MessageChannel`,
            room_id: currentRoom
          }),
        })
      );
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === "ping") return;
      if (data.type === "welcome") return;
      if (data.type === "confirm_subscription") return;

      const message = data.message;
      if (message) {
        setMessagesAndResetScroll([...messages, message]);
      }
    };

    // For debugging purposes
    // ws.onerror = (error) => {
    //   console.error('WS Error:', error);
    // };

    setSocket(ws);
  };

  const handleWebSocketReconnect = () => {
    if (socket) {
      socket.close();
    }

    setupWebSocket();
  };

  const fetchRooms = async () => {
    const response = await fetch("http://localhost:3000/rooms.json");
    const data = await response.json();
    setRooms(data);
    if (data.length > 0) {
      setCurrentRooms(data[0].id);
    }
  };

  const fetchMessages = async () => {
    const response = await fetch(`http://localhost:3000/room/${currentRoom}/messages`);
    const data = await response.json();
    setMessagesAndResetScroll(data);
  };

  const resetScroll = () => {
    if (!messagesContainer) return;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const setMessagesAndResetScroll = (data) => {
    setMessages(data);
    resetScroll();
  };

  if (!rooms || !messages) return <>Loading...</>;

  return (
    <>
      <div className="message-header">
        <h1>Wass-Up</h1>
      </div>
      <UserInfo 
        setUsername={setUsername} 
        username={username} 
      />
      <RoomsContainer
        fetchRooms={fetchRooms}
        rooms={rooms} 
        currentRoom={currentRoom}
        setCurrentRooms={setCurrentRooms}
        setModalIsShow={setModalIsShow}
      />
      <MessagesFrame 
        messages={messages} 
        username={username} 
      />
      <MessageInput 
        currentRoom={currentRoom} 
        username={username} 
      />
      {
        modalIsShow ? 
          <RoomAddModal fetchRooms={fetchRooms} setModalIsShow={setModalIsShow} />
        :
          <></>
      }
    </>
  )
}

export default App
