// components/Chatbot.tsx
import { useState, useRef, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa'; // Import robot icon

export function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage chat window visibility
  const [conversationId, setConversationId] = useState<string | null>(null);
  const chatbotRef = useRef<HTMLDivElement>(null); // Ref for the chatbot container

  // Use useEffect to ensure this runs only on the client-side
  useEffect(() => {
    // Any client-side initialization can go here
  }, []);

  const handleSendMessage = async () => {
    if (!message) return;

    // Add user message to chat history
    setChatHistory((prev) => [...prev, `You: ${message}`]);

    try {
      const requestBody = conversationId
        ? { message, conversation_id: conversationId }
        : { message };

      const response = await fetch('https://08582fd1-0dd3-40ff-8b8b-73ccfed86e64-00-x10n427pqnry.kirk.replit.dev/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Update this line to use data.response instead of data.reply
      setChatHistory((prev) => [...prev, `Bot: ${data.response}`]);
      
      // Update this condition to check for data.conversation_id
      if (!conversationId && data.conversation_id) {
        setConversationId(data.conversation_id);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setChatHistory((prev) => [...prev, 'Bot: Sorry, there was an error processing your request.']);
    }

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
        <div className="bg-inherit p-4 rounded-lg shadow-lg mt-2 w-64">
          <div className="flex flex-col h-64 overflow-y-auto">
            {chatHistory.map((msg, index) => (
              <p key={index} className="text-sm mb-2">{msg}</p>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded p-2 mt-2 w-full"
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded p-2 mt-2 w-full hover:bg-blue-600 transition-colors">
            Send
          </button>
        </div>
      )}
    </div>
  );
}