import { FiHeart, FiSearch } from "react-icons/fi";
import Logo from "../assets/images/garirhatfinallogo.png";
import { PiUserCircleDashedBold } from "react-icons/pi";
import Topmenu from "./Topmenu";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModel";
import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { Dropdown, Space } from "antd";
import { TbLogout2 } from "react-icons/tb";
import UserProfileModel from "./UserProfileModel";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModal, setIsProfileModal] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const items = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <span 
        onClick={() => setIsProfileModal(true)}
          className="flex items-center gap-1 font-semibold"
        >
          <FaUser />
          Profile
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <span
          onClick={logOut}
          className="flex items-center gap-1 font-semibold"
        >
          <TbLogout2 />
          Logout
        </span>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 sticky top-0 !z-50">
      {/* First Line: Logo and Tagline */}
      <nav className=" p-2 w-full lg:w-10/12 mx-auto">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={Logo} alt="" width={190} />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full border px-4 py-3 w-1/2">
            <select className="bg-gray-100 text-gray-600 text-sm outline-none">
              <option value="all" className="p-3">
                All
              </option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
            <span className="w-[1px] h-[20px] bg-gray-800"></span>
            <FiSearch className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search or Ask a Question"
              className="bg-transparent flex-grow px-2 text-sm outline-none"
            />
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <Link to="/favorites-car">
              <FiHeart className=" hover:text-TextColor" size={20} />
            </Link>
            {user ? (
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <FaRegUserCircle size={20} className="mt-1" />
                  </Space>
                </a>
              </Dropdown>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-full"
              >
                <PiUserCircleDashedBold className="text-gray-500" size={20} />
                <span className="hidden md:inline text-sm font-semibold text-gray-600">
                  Login / Register
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>
      <LoginModal
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <UserProfileModel
        isVisible={isProfileModal}
        onClose={() => setIsProfileModal(false)}
       />
      {/* Second Line: Navigation and Search */}
      <Topmenu />
    </div>
  );
};

export default Navbar;
