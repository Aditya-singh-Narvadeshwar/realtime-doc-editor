import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [text, setText] = useState('');
  const textareaRef = useRef();

  useEffect(() => {
    socket.on('load-document', doc => {
      setText(doc);
    });

    socket.on('receive-changes', newText => {
      setText(newText);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    socket.emit('send-changes', newText);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📝 Real-Time Collaborative Document Editor</h2>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        rows={20}
        cols={80}
        style={{ padding: '1rem', fontSize: '1rem' }}
      />
    </div>
  );
}

export default App;
