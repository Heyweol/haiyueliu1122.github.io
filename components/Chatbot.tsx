// components/Chatbot.tsx
import { useState, useRef } from 'react';
import { FaRobot } from 'react-icons/fa'; // Import robot icon

export function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage chat window visibility
  const chatbotRef = useRef<HTMLDivElement>(null); // Ref for the chatbot container

  const handleSendMessage = async () => {
    if (!message) return;

    // Add user message to chat history
    setChatHistory((prev) => [...prev, `You: ${message}`]);

    // Send message to your backend
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setChatHistory((prev) => [...prev, `Bot: ${data.reply}`]);
    setMessage('');
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (chatbotRef.current) {
      const { offsetTop, offsetLeft } = chatbotRef.current;
      event.dataTransfer.setData('text/plain', `${offsetLeft},${offsetTop}`);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const [left, top] = event.dataTransfer.getData('text/plain').split(',');
    if (chatbotRef.current) {
      chatbotRef.current.style.left = `${event.clientX - parseInt(left)}px`;
      chatbotRef.current.style.top = `${event.clientY - parseInt(top)}px`;
    }
  };

  return (
    <div 
      ref={chatbotRef}
      className="fixed bottom-4 right-4 bg-inherit" // Use bg-inherit for consistent background color
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <FaRobot 
        className="text-4xl cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)} // Toggle chat window visibility
      />
      {isOpen && ( // Render chat window only if isOpen is true
        <div className="bg-inherit p-4 rounded-lg shadow-lg mt-2">
          <div className="flex flex-col">
            {chatHistory.map((msg, index) => (
              <p key={index} className="text-sm">{msg}</p>
            ))}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded p-2 mt-2"
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded p-2 mt-2">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}