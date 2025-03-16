import { useState } from "react";
import { MessageFilled, SearchOutlined } from "@ant-design/icons";
import { BsThreeDots } from "react-icons/bs";
import { Image } from "antd";
import Profile from "../../assets/images/profilePic.png";

const users = [
  { name: "Ernest Lawson", status: "Away", online: false },
  { name: "Design Team", status: "3 users online", online: true },
  { name: "Alicia Phillips", status: "Away", online: false },
  { name: "Sam McCoy", status: "Online", online: true },
  { name: "Maxine Holt", status: "Not here now", online: false },
];

const Messenger = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // For mobile view

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`lg:w-1/4 w-full bg-white border-r p-4 lg:block fixed lg:static ${
          isSidebarVisible ? "block" : "hidden"
        }`}
        style={{ top: "0", left: "0", zIndex: "20", height: "100%" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Messages</h2>
          <SearchOutlined className="text-xl" />
        </div>
        <div className="space-y-3">
          {users.map((user, index) => (
            <button
              key={index}
              onClick={() => setSelectedUser(user)}
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100"
            >
              <Image
                src={Profile}
                width={50}
                className="relative rounded-full"
              />
              <div className="ml-3 text-left">
                <h1 className="text-sm font-medium">{user.name}</h1>
                <p className="text-xs text-gray-500">{user.status}</p>
              </div>
              <MessageFilled className="ml-auto text-gray-500" size={18} />
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Sidebar Button (Mobile View) */}
      <button
        className="lg:hidden p-4 absolute top-4 left-4 z-10 bg-white rounded-full shadow"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        <BsThreeDots className="text-xl text-gray-600" />
      </button>

      {/* Chat Area */}
      <div
        className={`flex-1 flex flex-col ${
          isSidebarVisible ? "ml-0" : "ml-0 lg:ml-1/4"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-white p-4 border-b flex justify-between items-center">
          {selectedUser ? (
            <div className="flex items-center">
              <Image
                src={Profile}
                width={50}
                className="relative rounded-full"
              />
              <div className="ml-3">
                <h1 className="text-lg font-semibold">{selectedUser.name}</h1>
                <p className="text-xs text-gray-500">{selectedUser.status}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select a user to start chatting</p>
          )}
        </div>

        {/* Chat Box */}
        <div className="flex-1 bg-gray-50 p-4 overflow-auto">
          {selectedUser ? (
            <p className="text-gray-500">
              Start chatting with {selectedUser.name}...
            </p>
          ) : (
            <p className="text-gray-500 text-center mt-20">
              No conversation selected
            </p>
          )}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t bg-white flex items-center">
          <input
            type="text"
            className="flex-1 border rounded p-2 text-sm"
            placeholder="Enter message..."
          />
          <button className="ml-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 font-semibold text-white rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
