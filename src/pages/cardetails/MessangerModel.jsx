import { Modal } from "antd";
import { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";
import io from "socket.io-client";
import Sound from "../../assets/images/tone.mp3";
import SendSound from "../../assets/images/notify.mp3";
import { useChatList, useUserProfile, useVendorbyChat } from "../../api/api";
import { LuBadgeInfo } from "react-icons/lu";

const socket = io("https://api.garirhat.com", { autoConnect: false });

const MessengerModal = ({ isMessangerModel, onClose, vendorId, vechileId }) => {
  const { userProfile } = useUserProfile();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatBodyRef = useRef(null);
  const venId = "v" + vendorId;
  const senderId = "u" + userProfile?.id;
  const { chatList, refetch } = useChatList({ venId, senderId });
  const { singleVendor } = useVendorbyChat({ venId, senderId });

  console.log("Messages:", messages);

  // Ensure socket connection
  useEffect(() => {
    if (venId) {
      socket.connect();
      socket.emit("userConnected", senderId);
    }

    return () => {
      socket.disconnect();
    };
  }, [venId]);

  // optional funsion

  useEffect(() => {
    setMessages(chatList);
  }, [chatList]);

  useEffect(() => {
    const messageHandler = (message) => {
      refetch();
      if (message.sender_id !== senderId) {
        const audio = new Audio(SendSound);
        audio
          .play()
          .catch((error) => console.error("Audio play failed:", error));
      } else {
        const audio = new Audio(Sound);
        audio
          .play()
          .catch((error) => console.error("Audio play failed:", error));
      }
    };

    socket.on("receiveMessage", messageHandler);

    return () => {
      socket.off("receiveMessage", messageHandler);
    };
  }, []);

  // Send message
  const onSend = () => {
    if (input.trim()) {
      const messageData = {
        sender_id: senderId,
        receiver_id: venId,
        message: input,
        vehicle_id: vechileId,
      };
      console.log("ssssss", messageData)
      socket.emit("sendMessage", messageData);
      refetch();
      setMessages((prev) => [...prev, messageData]);

      setInput("");
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatList]);

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
        <div className="flex items-center justify-between border-b">
          <div className="flex items-center bg-white text-black p-2 border-gray-300">
            <img
              src={singleVendor.profile_picture}
              width={48}
              className="text-3xl text-gray-700 mr-2 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{singleVendor.name}</h3>
              <p
                className={`text-sm font-semibold ${
                  singleVendor?.is_active ? "text-green-500" : "text-red-500"
                }`}
              >
                {singleVendor?.is_active ? "Online" : "Offline"}
              </p>
            </div>
          </div>
          <div>
            <LuBadgeInfo className="text-2xl text-TextColor cursor-pointer"/>
          </div>
        </div>

        {/* Chat Body */}
        <div
          ref={chatBodyRef}
          className="p-4 h-96 overflow-y-auto flex flex-col bg-white scrollbar-hide"
        >
          {chatList.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 rounded-md ${
                msg.sender_id === senderId
                  ? "bg-TextColor text-white self-end"
                  : "bg-gray-200 text-black self-start"
              }`}
            >
              {msg.message}
              <span
                className={`block text-xs text-right mt-1 ${
                  msg.sender_id === senderId ? "text-white" : "text-black"
                }`}
              >
                {new Date(msg.created_at).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex items-center p-3 bg-white border-t border-gray-300">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border bg-gray-100 rounded p-2 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
          />
          <button
            onClick={onSend}
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
