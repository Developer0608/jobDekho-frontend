// src/App.js

import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const UserAvatar = 'https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-picture-7301051-6012170.png?f=webp&w=256';
const BotAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjFCL8buwwGuuZKRsN8IqT84-PPujC-DVuIHzFS86Pj_xnLVnnFao_6vDmE7s0IJPTFY';

const UpgradePopup = ({ onClose }) => {
  return (
    <div className="UpgradePopupOverlay">
      <div className="UpgradePopup">
        <div className="UpgradePopupHeader">
          <span onClick={onClose} className="UpgradePopupCloseButton">
            &times;
          </span>
        </div>
        <div className="UpgradePopupContent">
          <h2>Upgrade to Premium Plan</h2>
          <p>To enjoy the Beta Version Exclusive Access.</p>
          <ul>
            <li>Access to ChatAI-V2, our most capable model</li>
            <li>Browse, create, and use ChatAI</li>
            <li>Access to additional tools like Upload PDF, Data Parsing, and many more</li>
          </ul>
          <button className="UpgradeButton" onClick={onClose}>
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const messagesRef = useRef(null);

  const openNewChat = () => { 
    setMessages([]); 
  };

  useEffect(() => {
    
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (text) => {
    setMessages([...messages, { text, isUser: true }]);
    const api = 'https://40e1-223-233-85-68.ngrok-free.app/module/v1/response';

    try {
      setLoading(true);

      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ request: text }),
      });

     

      const apiResponse = await response.json();
      setMessages([
        ...messages,
        { text: text, isUser: true },
        { text: apiResponse.message.response, isUser: false },
      ]);
    } catch (err) {
      console.error('API Error:', err);
       
    } finally {
      setLoading(false);
    }
  };

  const openUpgradePopup = () => {
    setShowUpgradePopup(true);
  };

  const closeUpgradePopup = () => {
    setShowUpgradePopup(false);
  };

  return (
    <div className="App">
      <div className="Sidebar">
        <button className="NewChatButton" onClick={openNewChat}>+ New Chat</button>
        <div className="UserNameSection">
          <span className="UserName" onClick={() => console.log('User clicked')}>User Name</span>
          <div className="UserDropdown">
            <span onClick={() => console.log('Settings clicked')}>Settings</span>
            <span onClick={() => console.log('Logout clicked')}>Logout</span>
          </div>
        </div>
      </div>
      <div className="ChatWindow">
        <div className="Help">
          <h1><b>chatAI</b></h1>
        </div>
        <div className="Messages" ref={messagesRef}>
          {loading && <div className="Loader"></div>}
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} isUser={msg.isUser} />
          ))}
        </div>
        <div className="InputArea">
          <input
            type="text"
            placeholder="Type a message..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                sendMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <button
            className="SendButton"
            onClick={() => {
              const input = document.querySelector('.InputArea input');
              if (input.value.trim() !== '') {
                sendMessage(input.value);
                input.value = '';
              }
            }}
          >
            Send
          </button>
        </div>
        <div className="UpgradeButton">
          <button onClick={openUpgradePopup}>Upgrade</button>
        </div>
        {showUpgradePopup && (
          <UpgradePopup onClose={closeUpgradePopup} />
        )}

        <div className="Footer">
          <p>ChatAI can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  );
};

const Message = ({ text, isUser }) => {
  return (
    <div className={`Message ${isUser ? 'user' : 'bot'}`}>
      <img
        className="Avatar"
        src={isUser ? UserAvatar : BotAvatar}
        alt={isUser ? 'User Avatar' : 'Bot Avatar'}
      />
      <div className={`Text ${isUser ? 'user' : 'bot'}`}>{text}</div>
    </div>
  );
};

export default App;
