import React, { useState, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: "Hello ! Ask me anything about Sokhna's work and experiences.", sender: 'bot' }]);
    }
  }, [isOpen]);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Here you would typically send the message to a backend API
      // and handle the response. For now, we'll just echo the message.
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `You asked about: ${input}`, sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col mb-4">
          <CardHeader className="flex justify-between items-center">
            <h3 className="font-semibold">Chatbot</h3>
            <Button variant="ghost" size="icon" onClick={toggleChatbot}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                {message.sender === 'bot' && (
                  <Bot className="h-4 w-4 inline-block mr-2 text-teal-500" />
                )}
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSendMessage} className="flex w-full">
              <Input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-teal-500 hover:bg-teal-600 text-white"
        onClick={toggleChatbot}
      >
        <Bot className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Chatbot;
