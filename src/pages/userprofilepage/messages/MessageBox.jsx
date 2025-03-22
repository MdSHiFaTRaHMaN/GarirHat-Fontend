import { useEffect, useState, useRef } from "react";
import { Avatar, Input } from "antd";
import { useLocation } from "react-router-dom";
import socket from "../../../socket";
import { useChatList } from "../../../api/api";
import TopberMessage from "./TopberMessage";
import SendSound from "../../../assets/images/notify.mp3";

const { Search } = Input;

function MessageBox({ userID }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const senderId = params.get("sender");
  const userId = "u" + userID;

  const { chatList, refetch } = useChatList({
    venId: senderId,
    senderId: userId,
  });
  const [newMessage, setNewMessage] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (senderId) socket.emit("userConnected", senderId);
    return () => socket.off("userConnected");
  }, [senderId]);

  useEffect(() => {
    const messageHandler = (message) => {
      refetch();
      if (message.sender_id !== userId) {
        const audio = new Audio(SendSound);
        audio.play().catch((err) => console.error("Audio play failed:", err));
      }
      scrollToBottom();
    };

    socket.on("receiveMessage", messageHandler);
    return () => socket.off("receiveMessage", messageHandler);
  }, [userId]);

  const scrollToBottom = () => {
    setTimeout(
      () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  };

  const onSend = (value) => {
    if (value.trim()) {
      socket.emit("sendMessage", {
        sender_id: userId,
        receiver_id: senderId,
        message: value,
        vehicle_id: 2,
      });
      setNewMessage("");
      scrollToBottom();
    }
  };

  return (
    <div className="flex flex-col h-[75vh] md:h-full">
      {!senderId ? (
        <div className="flex justify-center items-center h-full text-gray-500">
          Please select a user
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <TopberMessage
            senderId={senderId}
            userId={userId}
            setProfilePic={setProfilePic}
          />
          <div className="flex-1 overflow-y-auto scrollbar-hide p-4 bg-gray-100 md:max-h-[65vh]">
            {chatList.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end mb-3 ${
                  msg.sender_id === userId ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender_id !== userId && (
                  <Avatar src={profilePic} className="mr-2" />
                )}
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs md:max-w-sm ${
                    msg.sender_id === userId
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none shadow"
                  }`}
                >
                  {msg.message}
                  <span
                    className={`block text-xs text-right mt-1 ${
                      msg.sender_id === senderId ? "text-black" : "text-white"
                    }`}
                  >
                    {new Date(msg.created_at).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t py-2 bg-white">
            <Search
              placeholder="Say something..."
              allowClear
              enterButton="Send"
              size="large"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onSearch={onSend}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageBox;
