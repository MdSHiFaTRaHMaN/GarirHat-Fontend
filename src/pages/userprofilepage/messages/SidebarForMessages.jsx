import { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Input, Spin } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import socket from "../../../socket";
import { useMessagesSender } from "../../../api/api";

const { Search } = Input;

function SidebarForMessages({ userID }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = "u" + userID;

  const { messageSenderList, isLoading, refetch } = useMessagesSender(userId);

  console.log("Message Sender List:", messageSenderList.vendors);

  // Connect user to socket server
  useEffect(() => {
    socket.emit("userConnected", userId);
  }, [userId]);

  useEffect(() => {
    socket.on("receiveMessage", () => {
      refetch();
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [refetch]);

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  const onSenderSelect = (value) => {
    const senderId = value;
    searchParams.set("sender", senderId);
    setSearchParams(searchParams);

    console.log("Sender ID:", senderId);
  };

  function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, "-"); // Format as DD-MM-YYYY
    return `${time} ${formattedDate}`;
  }

  return (
    <div className="bg-white p-1 md:p-2 h-full flex flex-col">
      <Link className="text-xl font-semibold mb-4">Chat</Link>
      <Search
        placeholder="Search sender..."
        onSearch={onSearch}
        className="mb-4 w-full"
      />

      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Spin />
          </div>
        ) : (
          messageSenderList?.vendors?.map((sender, index) => (
            <div
              key={index}
              onClick={() => onSenderSelect(sender.busn_id)}
              className="flex items-center gap-3 p-3 mb-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-300"
            >
              <div className="relative">
                <Avatar
                  size="large"
                  icon={!sender.profile_picture ? <UserOutlined /> : null}
                  src={sender.profile_picture || undefined}
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    sender.is_active ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              </div>
              <div>
                <h1 className="font-semibold">{sender.name}</h1>
                <p className="text-sm text-gray-600">
                  {formatDateTime(sender?.last_message_time)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SidebarForMessages;
