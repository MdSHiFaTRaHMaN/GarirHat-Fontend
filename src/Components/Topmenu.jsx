import { useState } from "react";
import {
  CaretDownOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import LocationModel from "./LocationModel";

const Topmenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newsreview = (
    <Menu
      className="space-y-1.5"
      items={[
        {
          key: "1",
          label: <Link to="/news-and-stories">News & Top Stories</Link>,
        },
        { type: "divider" },
        {
          key: "2",
          label: <Link to="/car-expert-review">Car Expert Review</Link>,
        },
        { type: "divider" },
        { key: "3", label: <Link to="/car-review">User Review</Link> },
        { type: "divider" },
        { key: "4", label: <Link to="/car-collection">Car Collection</Link> },
        { type: "divider" },
        { key: "5", label: <Link to="/tips-and-advice">Tips & Advice</Link> },
      ]}
    />
  );

  return (
    <div className="border-t shadow-lg bg-white">
      {/* Desktop & Tablet Navigation */}
      <div className="w-full p-4 lg:w-10/12 mx-auto flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/new-car">
            <span className="font-semibold text-gray-700 text-sm">
              NEW CARS
            </span>
          </Link>
          <span className="font-semibold text-gray-700 text-sm">USED CARS</span>
          <a target="_blank" href="https://garirhat-admin.onrender.com" className="font-semibold text-gray-700 text-sm">
            SELL MY CAR
          </a>
          <Dropdown overlay={newsreview} trigger={["hover"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className="font-semibold text-gray-700 text-sm">
                  NEWS & REVIEWS
                </span>
                <CaretDownOutlined className="text-gray-700" />
              </Space>
            </a>
          </Dropdown>
          <Link
            to="/car-videos"
            className="font-semibold text-gray-700 text-sm"
          >
            VIDEOS
          </Link>
        </div>

        {/* Location & Mobile Menu Button */}
        <div className="flex justify-between items-center gap-4">
          <div
            onClick={() => setIsModalOpen(true)}
            className="flex items-center text-gray-600 font-semibold gap-1 cursor-pointer"
          >
            <GrLocation />
            <h3>Barishal</h3>
            <FaSortDown />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-100">
          <Link to="/new-car" className="font-semibold text-gray-700 text-sm">
            NEW CARS
          </Link>
          <span className="font-semibold text-gray-700 text-sm">USED CARS</span>
          <span className="font-semibold text-gray-700 text-sm">
            SELL MY CAR
          </span>
          <Dropdown overlay={newsreview} trigger={["click"]}>
            <a
              onClick={(e) => e.preventDefault()}
              className="font-semibold text-gray-700 text-sm"
            >
              NEWS & REVIEWS <CaretDownOutlined className="text-gray-700" />
            </a>
          </Dropdown>
          <Link
            to="/car-videos"
            className="font-semibold text-gray-700 text-sm"
          >
            VIDEOS
          </Link>
        </div>
      )}
      <LocationModel
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Topmenu;
