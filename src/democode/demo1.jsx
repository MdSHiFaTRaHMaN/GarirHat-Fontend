import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";

const { Search } = Input;

const socket = io("https://api.garirhat.com");

function MessageBox({ vendorID }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const senderId = params.get("sender");
  const vendorId = "v" + vendorID;

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Connect user to socket server
  useEffect(() => {
    socket.emit("userConnected", vendorId); // Notify server of user connection
  }, [vendorId]);

  useEffect(() => {
    axios
      .get(
        https://api.garirhat.com/api/v1/message/?sender_id=${vendorId}&receiver_id=${senderId}
      )
      .then((response) => setMessages(response.data.data));

    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [vendorId, senderId]);

  const onSend = (value) => {
    if (value.trim()) {
      const messageData = {
        sender_id: vendorId,
        receiver_id: senderId,
        message: value,
        vehicle_id: 1,
      };

      socket.emit("sendMessage", messageData);
    }
  };

  return (
    <div className="h-[75vh]">
      {senderId === null ? (
        <div>Please select on user</div>
      ) : (
        <div>
          <div className="mt-2 bg-gray-300 p-2 rounded">
            <div className="flex w-full">
              <div className="self-center mr-2">
                <Avatar size="large" icon={<UserOutlined />} />
              </div>
              <div className="flex justify-between w-full">
                <h1 className="self-center">
                  Shakib Al Hasan <span>(BMW A1 T001)</span>
                </h1>
                <div className="self-center">
                  <Button icon={<InfoCircleOutlined />} type="link">
                    More Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[63vh] border">message</div>
          <Search
            placeholder="say something.."
            allowClear
            enterButton="Send"
            size="large"
            onSearch={onSend}
          />
        </div>
      )}
    </div>
  );
}

export default MessageBox;