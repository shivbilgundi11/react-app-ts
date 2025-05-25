import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UserProfile from '../assets/user.jpg';

export default function ChatBotPage() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { sender: 'user', text: input }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: "I'm here to help! Ask me anything." },
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="container mx-auto flex h-16 w-full items-center justify-between border-b p-4">
        <Link to={'/dashboard'} className="text-xl font-bold italic">
          edu<b className="text-green-600">.</b>
          <i className="text-orange-600">AI</i>
        </Link>
        <Avatar>
          <AvatarImage src={UserProfile} alt="user image" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </nav>

      {/* Chat Container */}
      <main className="container mx-auto flex h-[80vh] flex-col items-center justify-between p-4">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">
          🤖 Got questions? Let AI help you learn faster and smarter!
        </h2>
        {/* Chat Box */}
        <Card className="w-full flex-grow overflow-y-auto rounded-lg border p-4 shadow-sm">
          <CardContent className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`overflow-hidden rounded-lg px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-black'
                  } ${msg.sender === 'user' ? 'w-max max-w-[65%]' : 'w-max max-w-[65%]'}`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Chat Input */}
        <div className="mt-4 flex w-full items-center gap-2">
          <Input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </main>
    </>
  );
}
