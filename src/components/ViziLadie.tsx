import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, RefreshCw } from 'lucide-react';

export function ViziLadie() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 0,
      sender: 'VIZI LADIE',
      text: 'Hello! I\'m VIZI LADIE, your immigration support assistant. How can I help you today?',
      type: 'received'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // AI-powered response simulator
  const generateResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    const responses = {
      'hi': 'Hi there! Welcome to EasyVizi. What visa information can I help you with?',
      'help': 'I\'m here to assist you with visa applications, document requirements, and general immigration queries.',
      'visa': 'We offer support for various visa types including Work, Student, Tourist, Family, and Investment visas.',
      'document': 'I can guide you through the necessary documents for your specific visa type. Which visa are you interested in?',
      'processing time': 'Processing times vary by visa type. I can provide you with estimated timelines for your specific application.',
      'fee': 'Fees depend on the visa category. Would you like me to break down the costs for a specific visa type?'
    };

    // Find the most relevant response
    const matchedResponse = Object.keys(responses).find(key => 
      lowerMessage.includes(key)
    );

    return matchedResponse 
      ? responses[matchedResponse as keyof typeof responses]
      : 'I\'m not sure about that. Could you please provide more details?';
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length,
      sender: 'User',
      text: inputMessage,
      type: 'sent'
    };

    // Add AI response
    const aiResponse = {
      id: messages.length + 1,
      sender: 'VIZI LADIE',
      text: generateResponse(inputMessage),
      type: 'received'
    };

    setMessages(prevMessages => [...prevMessages, userMessage, aiResponse]);
    setInputMessage('');
  };

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Main Container */}
      <div 
        className={`
          ${isOpen ? 'w-96 h-[500px]' : 'w-16 h-16'}
          transition-all duration-300 
          bg-white 
          rounded-xl 
          shadow-xl 
          border 
          overflow-hidden
          flex
          flex-col
        `}
      >
        {/* Chat Header */}
        <div 
          className="
            bg-[#003875]
            text-white 
            p-3 
            flex 
            justify-between 
            items-center 
            cursor-pointer
            flex-shrink-0
          "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span>VIZI LADIE</span>
            </div>
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
          
          {isOpen && (
            <X 
              className="cursor-pointer hover:text-gray-200 transition-colors" 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }} 
            />
          )}
        </div>

        {/* Chat Messages */}
        {isOpen && (
          <div 
            className="
              flex-grow
              overflow-y-auto 
              p-4 
              space-y-3
            "
          >
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`
                  flex 
                  ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}
                `}
              >
                <div 
                  className={`
                    max-w-[70%] 
                    p-3
                    rounded-2xl
                    ${
                      msg.type === 'sent' 
                        ? 'bg-[#003875] text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Message Input */}
        {isOpen && (
          <div className="p-3 border-t flex items-center gap-2 bg-gray-50">
            <div className="flex-grow relative">
              <input 
                ref={inputRef}
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="
                  w-full
                  py-2
                  px-4
                  rounded-full
                  border-2
                  border-gray-200
                  focus:border-[#003875]
                  focus:ring-2
                  focus:ring-[#003875]/20
                  focus:outline-none
                  transition-all
                  placeholder:text-gray-400
                  text-gray-700
                "
              />
            </div>
            <button 
              onClick={handleSendMessage}
              className="
                bg-[#003875]
                text-white 
                p-2.5
                rounded-full
                hover:bg-[#002855]
                transition-colors
                flex-shrink-0
                focus:outline-none
                focus:ring-2
                focus:ring-[#003875]/20
              "
            >
              <Send size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}