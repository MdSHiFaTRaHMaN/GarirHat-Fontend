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
  // Retrieve from localStorage
  const storedLocation = localStorage.getItem("selectedLocation");
  
  const newsreview = (
    <Menu
      className="space-y-1.5"
      items={[
        {
          key: "1",
          label: (
            <Link
              to="/news-and-stories"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              News & Top Stories
            </Link>
          ),
        },
        { type: "divider" },
        {
          key: "2",
          label: (
            <Link
              to="/car-expert-review"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Car Expert Review
            </Link>
          ),
        },
        { type: "divider" },
        {
          key: "3",
          label: (
            <Link
              to="/car-review"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              User Review
            </Link>
          ),
        },
        { type: "divider" },
        {
          key: "4",
          label: (
            <Link
              to="/car-collection"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Car Collection
            </Link>
          ),
        },
        { type: "divider" },
        {
          key: "5",
          label: (
            <Link
              to="/tips-and-advice"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Tips & Advice
            </Link>
          ),
        },
      ]}
    />
  );

  const usedcar = (
    <Menu
      className="space-y-1.5"
      items={[
        {
          key: "1",
          label: (
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/used"
            >
              Buy Used Car
            </Link>
          ),
        },
        { type: "divider" },
        {
          key: "2",
          label: (
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/recondition-car"
            >
              Recondition Car
            </Link>
          ),
        },
        { type: "divider" },
        {
          key: "3",
          label: (
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/pre-owned-car"
            >
              Pre-Owned Cars
            </Link>
          ),
        },
        { type: "divider" },
        {
          key: "4",
          label: (
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/loan-avaiable-car"
            >
              Loan Available Cars
            </Link>
          ),
        },
      ]}
    />
  );

  return (
    <div className="border-t shadow-lg bg-white">
      {/* Desktop & Tablet Navigation */}
      <div className="w-full p-4 lg:w-10/12 mx-auto flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/new"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="whitespace-nowrap font-semibold text-gray-700 text-sm">
              NEW CARS
            </span>
          </Link>
          <Dropdown overlay={usedcar} trigger={["hover"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className="whitespace-nowrap font-semibold text-gray-700 text-sm">
                  USED CARS
                </span>
                <CaretDownOutlined className="text-gray-700" />
              </Space>
            </a>
          </Dropdown>
          <a
            target="_blank"
            href="https://garirhat-admin.onrender.com"
            className="whitespace-nowrap font-semibold text-gray-700 text-sm"
          >
            SELL MY CAR
          </a>
          <Dropdown overlay={newsreview} trigger={["hover"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className="whitespace-nowrap font-semibold text-gray-700 text-sm">
                  NEWS & REVIEWS
                </span>
                <CaretDownOutlined className="text-gray-700" />
              </Space>
            </a>
          </Dropdown>
          <Link
            to="/car-videos"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-semibold text-gray-700 text-sm"
          >
            VIDEOS
          </Link>
        </div>

        {/* Location & Mobile Menu Button */}
        <div className="flex items-center justify-between w-full gap-4">
          <div className=" bg-white w-2">
            <button
              className="md:hidden text-gray-700 text-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="text-gray-600 font-semibold gap-1 cursor-pointer flex items-center "
          >
            <GrLocation className="mt-1" />
            <h3>{storedLocation || "Select Location"}</h3>
            <FaSortDown />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-100">
          <Link
            to="/new-car"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-semibold text-gray-700 text-sm"
          >
            NEW CARS
          </Link>
          <Dropdown overlay={usedcar} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className="font-semibold text-gray-700 text-sm">
                  USED CARS
                </span>
                <CaretDownOutlined className="text-gray-700" />
              </Space>
            </a>
          </Dropdown>
          <a
            target="_blank"
            href="https://garirhat-admin.onrender.com"
            className="font-semibold text-gray-700 text-sm"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            SELL MY CAR
          </a>
          <Dropdown overlay={newsreview} trigger={["click"]}>
            <a
              onClick={(e) => e.preventDefault()}
              className="font-semibold text-gray-700 text-sm"
            >
              NEWS & REVIEWS <CaretDownOutlined className="text-gray-700" />
            </a>
          </Dropdown>
          <Link
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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
