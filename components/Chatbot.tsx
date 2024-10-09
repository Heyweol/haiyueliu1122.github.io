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

      const response = await fetch('https://chat-with-morgan.replit.app/api/chat', {
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div 
      ref={chatbotRef}
      className="fixed bottom-4 right-4 bg-slate-400 shadow-lg rounded-lg" // Set a solid background for the chat window
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img 
        src={isOpen ? '/images/face.jpg' : '/images/wave.jpg'} // Use different images based on isOpen state
        alt="Chat Icon"
        className="w-16 h-16 cursor-pointer rounded-full" // Make the avatar rounded
        onClick={() => setIsOpen(!isOpen)} // Toggle chat window visibility
      />
      {isOpen && ( // Render chat window only if isOpen is true
        <div className="p-4 mt-2 w-64">
          <div className="flex flex-col h-64 overflow-y-auto">
            {chatHistory.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-2 p-2 rounded-lg max-w-xs ${
                  msg.startsWith('You:') 
                  ? 'bg-blue-500 text-white self-end' // User message bubble
                  : 'bg-gray-300 text-black self-start' // Bot message bubble
                }`}
              >
                {msg.replace(/^You: |^Bot: /, '')}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress} // Add key press handler
            className="border rounded p-2 mt-2 w-full"
            placeholder="Chat with me!"
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded p-2 mt-2 w-full hover:bg-blue-600 transition-colors">
            Send
          </button>
        </div>
      )}
    </div>
  );
}