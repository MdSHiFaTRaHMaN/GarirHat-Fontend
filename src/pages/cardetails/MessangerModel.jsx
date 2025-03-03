import { Modal } from "antd";
import { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const MessengerModal = ({ isMessangerModel, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, what's up?", sender: "other" },
    { id: 2, text: "Nothing much, you?", sender: "me" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { id: messages.length + 1, text: input, sender: "me" };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate reply
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: "Thank you for your message. We'll reply shortly.", sender: "other" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Modal
      open={isMessangerModel}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      className="!p-0 !rounded-lg"
    >
      {/* Chat Container */}
      <div className="w-full overflow-hidden bg-white">
        
        {/* Header */}
        <div className="flex items-center bg-white text-black p-3 border-b border-gray-300">
          <FaUserCircle className="text-3xl text-gray-700 mr-2" />
          <div>
            <h3 className="font-semibold">Shakib Al Hasan</h3>
            <p className="text-sm text-green-500">Active now</p>
          </div>
        </div>

        {/* Chat Body */}
        <div className="p-4 h-96 overflow-y-auto flex flex-col bg-white scrollbar-hide">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[75%] p-3 rounded-lg shadow-md ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 text-gray-900"
              } mb-2`}
            >
              {msg.text}
            </div>
          ))}

          {isTyping && (
            <p className="text-gray-500 text-sm italic">Vendor is typing...</p>
          )}
          <div ref={chatRef}></div>
        </div>

        {/* Chat Input */}
        <div className="flex items-center p-3 bg-white border-t border-gray-300">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border bg-gray-50 rounded p-2 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MessengerModal;
