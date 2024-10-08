// components/Chatbot.tsx
import { useState } from 'react';
import { FaRobot } from 'react-icons/fa'; // Import robot icon

export function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage chat window visibility

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

  return (
    <div className="fixed bottom-4 right-4">
      <FaRobot 
        className="text-4xl cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)} // Toggle chat window visibility
      />
      {isOpen && ( // Render chat window only if isOpen is true
        <div className="bg-white p-4 rounded-lg shadow-lg mt-2">
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