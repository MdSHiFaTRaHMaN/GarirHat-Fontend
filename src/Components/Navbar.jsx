import { FiSearch } from "react-icons/fi";
import Logo from "../assets/images/garirhatfinallogo.png";
import { PiUserCircleDashedBold } from "react-icons/pi";
import Topmenu from "./Topmenu";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModel";
import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { FaRegUserCircle, FaUser } from "react-icons/fa";
import { Avatar, Badge, Dropdown, Space } from "antd";
import { TbLogout2 } from "react-icons/tb";
import { useAllBrand, useUserProfile, useWishListVechile } from "../api/api";
import { HeartOutlined } from "@ant-design/icons";
import LoadingWhile from "./LoadingWhile";
import { useQueryClient } from "@tanstack/react-query";

const Navbar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { userProfile } = useUserProfile();
  const { allBrand, isLoading } = useAllBrand();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");
  const user_id = userProfile.id;
  const { wishListVechile } = useWishListVechile(user_id);

  const handleChange = (event) => {
      setSelectedOption(event.target.value);
  };

  
  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions =
        allBrand?.filter((brand) =>
          brand.brand_name.toLowerCase().includes(value.toLowerCase())
        ) || [];
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (searchBrand) => {
    setSearchTerm(searchBrand);
    setSuggestions([]);
    navigate(`/search-result/${selectedOption}/${searchBrand}`);
    queryClient.invalidateQueries(["searchCarList", searchBrand, selectedOption]);
  };

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
        <Link to="/user-profile"
        className="flex items-center gap-1 font-semibold"
        >
          <FaUser />
          Profile
        </Link>
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
    <div className="bg-gray-50 sticky top-0 !z-50 shadow-md">
      {/* First Line: Logo and Tagline */}
      <nav className="p-1.5 w-full lg:w-10/12 mx-auto">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={Logo} alt="" width={190} />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative w-1/2">
            <div className="hidden md:flex items-center bg-white shadow-sm rounded-full border px-4 py-2 w-full">
            <select
                className="bg-transparent text-gray-600 text-sm outline-none"
                value={selectedOption}
                onChange={handleChange} // এখানে onchange ইভেন্ট হ্যান্ডলার যুক্ত করা হয়েছে
            >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="used">Used</option>
            </select>
              <span className="w-[1px] h-[20px] bg-gray-300 mx-2"></span>
              <FiSearch className="text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search for a car brand"
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-transparent flex-grow px-2 py-1 text-sm outline-none"
              />
            </div>

            {/* Suggestion List */}
            {suggestions.length > 0 && (
              <ul className="absolute bg-white shadow-lg rounded-md w-full mt-1 overflow-hidden z-50">
                {suggestions.map((brand, index) => (
                  <a
                    // to={`/search-result/${selectedOption}/${selectBrand}`}
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3 text-gray-700"
                    onClick={() => handleSuggestionClick(brand.brand_name)}
                  >
                    {brand.image && (
                      <img
                        src={brand.image}
                        alt={brand.brand_name}
                        className="w-8 h-8 object-contain rounded-md shadow-sm"
                      />
                    )}
                    <span className="font-medium">{brand.brand_name}</span>
                  </a>
                ))}
              </ul>
            )}
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            <Link to="/favorites-car">
              <Badge
                count={wishListVechile.length}
                size="small"
                offset={[5, 5]}
              >
                <Avatar
                  icon={<HeartOutlined />}
                  size="small"
                  className="bg-ButtonColor"
                />
              </Badge>
              {/* <FiHeart className="hover:text-TextColor" size={20} /> */}
            </Link>
            {user ? (
              <Dropdown
                menu={{ items }}
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
      {/* Second Line: Navigation and Search */}
      <Topmenu />
    </div>
  );
};

export default Navbar;
