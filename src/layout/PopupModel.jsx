import { Button, Modal, Select } from "antd";
import { BiCurrentLocation } from "react-icons/bi";
import Dhaka from "../assets/images/dhakacity2.jpeg";
import Barishal from "../assets/images/barishalcity2.png";
import Khulna from "../assets/images/khulnacity.jpg";
import Maymoysing from "../assets/images/maymoysingcity.jpg";
import Rangpur from "../assets/images/rangpur.jpg";
import Sylhet from "../assets/images/Sylhetcity.jpg";
import Chattogram from "../assets/images/chittagongcity.jpg";
import Rajshahi from "../assets/images/Rajshahicity.jpg";
import { useAlLocation } from "../api/api";
import { useEffect, useState } from "react";

const PopupModel = () => {
  const { alLocation } = useAlLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locations = [
    { name: "Barishal", image: Barishal },
    { name: "Dhaka", image: Dhaka },
    { name: "Chittagong", image: Chattogram },
    { name: "Rajshahi", image: Rajshahi },
    { name: "Khulna", image: Khulna },
    { name: "Sylhet", image: Sylhet },
    { name: "Rangpur", image: Rangpur },
    { name: "Mymensingh", image: Maymoysing },
  ];
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleClose}
      footer={null}
      centered
      closable={true}
      width={850}
      className="rounded-lg mt-7"
    >
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
        Do you want to change car location?
      </h2>

      {/* Search & Detect Location */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-6 relative">
        <Select
          showSearch
          className="w-full h-[50px]"
          placeholder="Search Location"
          optionFilterProp="label"
          onChange={(value) => {
            localStorage.setItem("selectedLocation", value);
            handleClose();
          }}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={alLocation.flatMap((division) =>
            division.districts.map((district) => ({
              value: district.name,
              label: district.name,
            }))
          )}
        />
        {/* Detect My Location Button */}
        <Button className="flex items-center space-x-1 px-4 py-6 border border-blue-500 text-blue-600 hover:text-white hover:bg-blue-500 transition-all rounded-lg shadow-sm">
          <BiCurrentLocation />
          <span>Detect my location</span>
        </Button>
      </div>

      {/* City Cards */}
      <div className="w-full bg-gray-50 py-8 px-4 mt-6 rounded-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            Get trusted used cars nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                onClick={() => {
                  localStorage.setItem("selectedLocation", location.name);
                  handleClose();
                }}
                className="flex flex-col items-center bg-white shadow-lg rounded overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                {/* Image Wrapper with Fixed Height */}
                <div className="w-full h-40">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Location Text */}
                <div className="p-4 w-full text-center">
                  <p className="text-xl font-semibold text-gray-800">
                    {location.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupModel;
