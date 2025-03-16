import { Divider, message, Tabs } from "antd";
import CarImage from "../../assets/images/UpcomingImage.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from "react";
import { LuShare2 } from "react-icons/lu";
import { useAllVehicles } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";

const VendorOtherCar = ({ vendor_id }) => {
  const [likedCars, setLikedCars] = useState({});
  const [selectedBrand, setSelectBrand] = useState("");

  console.log(selectedBrand);

  const filter = {
    vendor_id: vendor_id || "",
    make: selectedBrand || "",
  };
  const { allVehicles, isLoading } = useAllVehicles(filter);

  const toggleLike = (carId) => {
    setLikedCars((prev) => ({
      ...prev,
      [carId]: !prev[carId],
    }));
    message.success("Added to favorites");
  };

  const filterOptions = [
    { key: "1", label: "All Car" },
    { key: "2", label: "Toyota" },
    { key: "3", label: "Honda" },
    { key: "4", label: "Nissan" },
    { key: "5", label: "Mitsubishi" },
    { key: "6", label: "Hyundai" },
    { key: "7", label: "Mercedes-Benz" },
    { key: "8", label: "BMW" },
    { key: "9", label: "Ford" },
    { key: "10", label: "Kia" },
    { key: "11", label: "Suzuki" },
  ];

  const handleModelCar = (key) => {
    const selectedOption = filterOptions.find((option) => option.key === key);
    setSelectBrand(
      selectedOption?.label === "All Car" ? "" : selectedOption?.label
    );
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({ title: document.title, url: url })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Failed to copy:", err));
    }
  };

  return (
    <div className="px-2 md:px-2 lg:px-1 py-6">
      {/* Tabs & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="overflow-x-auto w-full md:w-auto">
          <Tabs
            defaultActiveKey="1"
            items={filterOptions}
            className="whitespace-nowrap" // Prevents wrapping of tabs
            onChange={handleModelCar}
          />
        </div>
      </div>

      {/* Car Grid Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
        {isLoading ? (
          <LoadingWhile />
        ) : (
          allVehicles.map((car) => (
            <div
              key={car.id}
              className="relative border rounded-lg bg-white shadow-md overflow-hidden"
            >
              {/* Like Button */}
              <div
                onClick={() => toggleLike(car.id)}
                className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow-md"
              >
                {likedCars[car.id] ? (
                  <HeartFilled className="text-TextColor text-xl bg-white p-1 rounded-full" />
                ) : (
                  <HeartOutlined className="text-TextColor text-xl bg-white p-1 rounded-full" />
                )}
              </div>

              {/* Car Image */}
              <img
                src={car.thumbnail || CarImage}
                alt="Car"
                className="w-full h-48 object-cover"
              />

              {/* Car Details */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">
                  {car.year_of_manufacture} {car.make} {car.model}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-sm">
                    {car.mileage}kms • {car.fuel_type} • {car.transmission}
                  </p>
                </div>

                {/* Price Section */}
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xl font-bold text-black flex items-center">
                    <TbCurrencyTaka className="text-2xl font-extrabold" />{" "}
                    {car.price} Taka
                  </span>
                </div>

                {/* View Seller Details */}
                <Link to={`/car-details/${car.id}`}>
                  <button className="text-TextColor font-semibold mt-2 flex items-center">
                    View Car Details <FaChevronCircleRight className="ml-1" />
                  </button>
                </Link>

                {/* Divider */}
                <Divider style={{ borderColor: "#4B5567" }} dashed />

                {/* Location & Share */}
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <IoLocationOutline />
                    {car.upzila}, {car.division}
                  </p>
                  <h3
                    onClick={() => handleShare(car.id)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <LuShare2 className="mt-[3px]" /> Share
                  </h3>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VendorOtherCar;
