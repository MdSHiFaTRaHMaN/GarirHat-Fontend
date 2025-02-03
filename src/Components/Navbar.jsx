import { Menu } from "antd";
import {
  CarOutlined,
  DollarOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import LoginModal from "./LoginModel";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-black text-white">
      <div className="w-full lg:w-10/12 mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">
            <span className="text-white">Garir</span>
            <span className="text-blue-500">H</span>
            <span className="text-red-500">a</span>
            <span className="text-purple-500">t</span>
          </h1>
          <Menu
            mode="horizontal"
            theme="dark"
            className="bg-black text-white border-none font-semibold flex justify-center space-x-4"
          >
            <Menu.Item
              key="new"
              icon={<CarOutlined />}
              className="text-white hover:text-gray-300 transition"
            >
              New
            </Menu.Item>
            <Menu.Item
              key="used"
              icon={<ShoppingCartOutlined />}
              className="hover:text-gray-300 transition"
            >
              Used
            </Menu.Item>
            <Menu.Item
              key="research"
              icon={<SearchOutlined />}
              className="hover:text-gray-300 transition"
            >
              Research
            </Menu.Item>
            <Menu.Item
              key="sell"
              icon={<DollarOutlined />}
              className="hover:text-gray-300 transition"
            >
              Sell Your Car
            </Menu.Item>
          </Menu>
        </div>
        <div className="flex items-center space-x-4">
          {/* search field  */}
          <div className="bg-white text-black rounded-full px-4 py-2 flex items-center">
            <SearchOutlined className="mr-2" />
            <input type="text" placeholder="Search" className="outline-none" />
          </div>
          <button
            className="flex items-center space-x-1 cursor-pointer hover:bg-gray-900 p-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            <span>Sign up</span>
            <UserOutlined />
          </button>
          <LoginModal
            isVisible={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
