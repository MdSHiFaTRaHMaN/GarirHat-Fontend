import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import Bangladesh from "../assets/images/bangladesh.png";
import { BiCurrentLocation } from "react-icons/bi";

const LocationModel = ({ isVisible, onClose }) => {
  const locations = [
    { name: "Barishal", image: Bangladesh },
    { name: "Dhaka", image: Bangladesh },
    { name: "Chittagong", image: Bangladesh },
    { name: "Rajshahi", image: Bangladesh },
    { name: "Khulna", image: Bangladesh },
    { name: "Sylhet", image: Bangladesh },
    { name: "Rangpur", image: Bangladesh },
    { name: "Mymensingh", image: Bangladesh },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  // Handle input change and filter locations
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter locations based on input
    if (value.trim() === "") {
      setFilteredLocations([]);
    } else {
      const filtered = locations.filter((location) =>
        location.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
    }
  };

  // Select location from suggestions
  const handleSelectLocation = (locationName) => {
    setSearchTerm(locationName);
    setFilteredLocations([]); // Hide suggestions after selecting
  };

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      closable={true}
      width={750}
      className="rounded-lg"
    >
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
        Do you want to change car location?
      </h2>

      {/* Search & Detect Location */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-6 relative">
        {/* Search Input Box */}
        <div className="relative flex items-center flex-1 border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm focus-within:border-blue-500 min-w-0">
          <SearchOutlined className="text-gray-500 mr-2" />
          <Input
            placeholder="Select your City"
            className="border-none focus:ring-0 focus:outline-none flex-grow w-full min-w-0"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {/* Suggestion Box */}
          {filteredLocations.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-200 rounded-lg mt-1 z-50">
              {filteredLocations.map((location, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-blue-50 cursor-pointer text-gray-700 text-sm"
                  onClick={() => handleSelectLocation(location.name)}
                >
                  {location.name}
                </div>
              ))}
            </div>
          )}
        </div>

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white shadow rounded-lg hover:shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <div className="h-[80px] w-[80px] flex items-center justify-center rounded-full bg-gray-100">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-[80px] w-[80px] object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Used cars in <br />
                  <span className="font-medium text-lg text-black">
                    {location.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LocationModel;
