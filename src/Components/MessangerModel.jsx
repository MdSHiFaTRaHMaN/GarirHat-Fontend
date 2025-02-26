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
// Nice! Let's catch up soon
    // Simulate reply
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: "Thank you for your message. Your message will be answered shortly.", sender: "other" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Modal
      open={isMessangerModel}
      onCancel={onClose}
      style={{padding: "0px"}}
      footer={null}
      centered
      width={400} // Fixed size for a better look
      className="!p-0 !rounded-lg" // Remove extra padding
      
    >
      {/* Chat Container */}
      <div style={{padding: "0px"}} className="w-full dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center bg-blue-600 text-white p-3 relative">
          <FaUserCircle className="text-3xl mr-2" />
          <div>
            <h3 className="font-semibold">Shakib Al Hasan</h3>
            <p className="text-sm text-green-300">Active now</p>
          </div>
          {/* Close Button */}
          {/* <button
            onClick={onClose}
            className="absolute right-3 text-black bg-red-500 px-2 py-1 rounded text-sm"
          >
            Close
          </button> */}
        </div>

        {/* Chat Body */}
        <div className="p-4 h-96 overflow-y-auto flex flex-col">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[75%] p-3 rounded-lg transition-all duration-300 ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-300 text-gray-900"
              } mb-2`}
            >
              {msg.text}
            </div>
          ))}
          {isTyping && <p className="text-gray-500 text-sm">Vendor is typing...</p>}
          <div ref={chatRef}></div>
        </div>

        {/* Chat Input */}
        <div className="flex items-center p-3 bg-white dark:bg-gray-800">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded p-2 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-600 text-white p-2 rounded-full"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MessengerModal;
