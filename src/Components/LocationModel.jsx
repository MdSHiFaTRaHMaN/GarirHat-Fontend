import { Modal, Select } from "antd";
import { useAlDivition, useAlLocation } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { FaSortDown } from "react-icons/fa";

const LocationModel = () => {
  const { alLocation } = useAlLocation();
  const { alDivition, isLoading } = useAlDivition();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(
    localStorage.getItem("selectedLocation") || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    const savedLocation = localStorage.getItem("selectedLocation");

    if (!savedLocation) {
      setIsModalOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleLocationSelect = (value) => {
    localStorage.setItem("selectedLocation", value);
    setSelectedLocation(value);
    navigate(`/advanced-search/?district=${value}`);
    handleClose();
  };

  return (
    <div>
      <div
        onClick={() => setIsModalOpen(true)}
        className="text-gray-600 font-semibold gap-1 cursor-pointer flex items-center"
      >
        <GrLocation className="mt-1" />
        <h3>{selectedLocation || "Select Location"}</h3>
        <FaSortDown />
      </div>

      <Modal
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
        centered
        closable={true}
        width={750}
        className="rounded-lg"
      >
        <h2 className="text-2xl font-semibold">
        What is your location?
        </h2>
        <p className="font-semibold text-gray-700">In which city are you looking to buy your car?</p>

        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-6 relative">
          <Select
            showSearch
            className="w-full h-[50px]"
            placeholder="Select Your City"
            optionFilterProp="label"
            onChange={handleLocationSelect}
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
        </div>

        <div className="w-full bg-gray-50 py-4 rounded-lg">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {isLoading
                ? "Loading..."
                : alDivition.map((location, index) => (
                    <div
                      key={index}
                      onClick={() => handleLocationSelect(location.name)}
                      className="flex flex-col items-center bg-white shadow-lg rounded overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                      <div className="w-full h-32">
                        <img
                          src={location.logo}
                          alt={location.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

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
    </div>
  );
};

export default LocationModel;
