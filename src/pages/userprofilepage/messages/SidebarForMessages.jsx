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

  const { messageSenderList, isLoading, isError, error, refetch } =
    useMessagesSender(userId);

  // Connect user to socket server
  useEffect(() => {
    socket.emit("userConnected", userId); // Notify server of user connection
  }, [userId]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      refetch();
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const onSearch = (value) => {
    console.log("value", value);
  };

  const onSenderSelect = (value) => {
    const senderId = "v" + value;
    searchParams.set("sender", senderId);
    setSearchParams(searchParams);
  };

  return (
    <div className=" bg-white border-r">
      <Link to={`/messages/${userID}`} className="text-lg font-semibold">
        Chat
      </Link>
      <Search
        placeholder="Search sender.."
        onSearch={onSearch}
        className="mb-2"
      />

      <div className="h-[70vh] overflow-y-auto border rounded p-2">
        {isLoading ? (
          <Spin />
        ) : (
          messageSenderList?.vendors?.map((senderList, i) => (
            <div
              key={i}
              onClick={() => onSenderSelect(senderList.id)}
              className="mt-2 bg-gray-300 p-2 rounded cursor-pointer hover:bg-gray-400 transition"
            >
              <div className="flex w-full">
                <div className="self-center mr-2 relative">
                  <Avatar
                    size="large"
                    icon={!senderList.profile_pic ? <UserOutlined /> : null}
                    src={senderList.profile_pic || undefined}
                  />

                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      senderList.is_active ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></span>
                </div>

                <div className="flex justify-between w-full">
                  <div>
                    <h1 className="font-medium">{senderList.name}</h1>
                    <h2 className="text-sm text-gray-600">
                      ({senderList.vehicles[0].vehicle_code}){" "}
                      {senderList.vehicles[0].make}{" "}
                      {senderList.vehicles[0].model}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SidebarForMessages;
