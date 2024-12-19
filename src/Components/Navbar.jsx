import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Flag from "../assets/images/US.jpg";
import { Dropdown, Space } from "antd";
import { BiDownArrow } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languageItems = [
    { key: "1", label: "Select Language", disabled: true },
    { type: "divider" },
    { key: "2", label: "English" },
    { key: "3", label: "Spanish" },
  ];

  const buyItems = [
    { key: "1", label: <Link to="/usedcar">Used cars</Link> },
    { key: "2", label: <Link to="/new-cars">New cars</Link> },
    { key: "3", label: <Link to="/certified-cars">Certified cars</Link> },
    { key: "4", label: <Link to="/dealerships">Dealerships near me</Link> },
  ];
  const sellItems = [
    { key: "1", label: "New Cars" },
    { key: "2", label: "Used Cars" },
    { key: "3", label: "Certified Pre-Owned" },
  ];
  const financeItems = [
    { key: "1", label: "New Cars" },
    { key: "2", label: "Used Cars" },
    { key: "3", label: "Certified Pre-Owned" },
  ];
  const reSearchItem = [
    { key: "1", label: "New Cars" },
    { key: "2", label: "Used Cars" },
    { key: "3", label: "Certified Pre-Owned" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container w-full lg:w-11/12 mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">
          Garir<span className="text-red-500">Hat</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Dropdown menu={{ items: buyItems }} trigger={["hover"]}>
            <a className="flex items-center text-gray-600 hover:text-blue-700">
              Buy <IoIosArrowDown className="ml-1" />
            </a>
          </Dropdown>
          <Dropdown menu={{ items: sellItems }} trigger={["hover"]}>
            <a className="flex items-center text-gray-600 hover:text-blue-700">
              Sell <IoIosArrowDown className="ml-1" />
            </a>
          </Dropdown>
          <Dropdown menu={{ items: financeItems }} trigger={["hover"]}>
            <a className="flex items-center text-gray-600 hover:text-blue-700">
              Finance <IoIosArrowDown className="ml-1" />
            </a>
          </Dropdown>
          <Dropdown menu={{ items: reSearchItem }} trigger={["hover"]}>
            <a className="flex items-center text-gray-600 hover:text-blue-700">
              ReSearch <IoIosArrowDown className="ml-1" />
            </a>
          </Dropdown>
        </nav>
        <div className="flex gap-2">
          <Link to="/login">
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
              Sign In
            </button>
          </Link>
          <Link to="/singup">
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              Sign Up
            </button>
          </Link>

          <Dropdown menu={{ items: languageItems }} trigger={["click"]}>
            <a className="flex items-center">
              <img
                src={Flag}
                alt="US Flag"
                className="w-[35px] h-[35px] rounded-full"
              />
              <BiDownArrow className="ml-2 text-gray-600" />
            </a>
          </Dropdown>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdOutlineClose /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <Dropdown menu={{ items: buyItems }} trigger={["click"]}>
              <a className="flex items-center text-gray-600 hover:text-blue-700">
                Buy <BiDownArrow className="ml-1" />
              </a>
            </Dropdown>
            <a href="#Sell" className="text-gray-600 hover:text-blue-700">
              Sell
            </a>
            <a href="#Finance" className="text-gray-600 hover:text-blue-700">
              Finance
            </a>
            <a href="#Research" className="text-gray-600 hover:text-blue-700">
              Research
            </a>
            <button className="border px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700 w-full">
              Inquire About Reservation
            </button>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 w-full">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 w-full">
              Sign Up
            </button>
            <Dropdown menu={{ items: languageItems }} trigger={["click"]}>
              <a className="flex items-center">
                <img
                  src={Flag}
                  alt="US Flag"
                  className="w-[35px] h-[35px] rounded-full"
                />
                <BiDownArrow className="ml-2 text-gray-600" />
              </a>
            </Dropdown>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
