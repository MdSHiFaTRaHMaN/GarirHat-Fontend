import { Divider, message, Select, Tabs } from "antd";
import CarImage from "../../assets/images/new-car-collection.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from "react";
import { LuShare2 } from "react-icons/lu";

const VendorOtherCar = () => {
  const [likedCars, setLikedCars] = useState({});

  const toggleLike = (carId) => {
    setLikedCars((prev) => ({
      ...prev,
      [carId]: !prev[carId],
    }));
    message.success("Added to favorites");
  };

  const cars = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: `2024 Mercedes-Benz ${index + 1}`,
    price: "3.75 Crore",
    oldprice: "$3.95 Crore",
    discount: "$20,00 Lakh",
    kms: `${10_000 + index * 500} kms`,
    fuel: index % 2 === 0 ? "Petrol" : "Diesel",
    transmission: "Automatic",
    location: "Ballygunge RS, Kolkata",
    img: CarImage,
  }));

  const filterOptions = [
    { key: "1", label: "Under 3 Lakh" },
    { key: "2", label: "Under 5 Lakh" },
    { key: "3", label: "SUV Cars" },
    { key: "4", label: "Sedan Cars" },
    { key: "5", label: "Luxury Car" },
  ];

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
    <div className="px-2 md:px-8 lg:px-1 py-6">
      {/* Tabs & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Tabs
          defaultActiveKey="1"
          items={filterOptions}
          className="w-full md:w-auto"
        />
        <Select
          defaultValue="Relevance"
          style={{ width: 165 }}
          suffixIcon={<FiFilter style={{ color: "red", fontSize: "16px" }} />}
          options={[
            { value: "relevance", label: "Relevance" },
            { value: "distance", label: "Distance" },
            { value: "added-time", label: "Added Time" },
            { value: "l-to-h", label: "Price - Low to High" },
            { value: "h to-l", label: "Price - High to Low" },
            { value: "K-l-to-h", label: "Kms - Low to High" },
            { value: "new-old", label: "Model - Newest to Oldest" },
          ]}
        />
      </div>

      {/* Car Grid Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
        {cars.map((car) => (
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
            <img src={car.img} alt="Car" className="w-full h-48 object-cover" />

            {/* Car Details */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900">
                {car.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {car.kms} • {car.fuel} • {car.transmission}
              </p>

              {/* Price Section */}
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xl font-bold text-black flex items-center">
                  <TbCurrencyTaka className="text-2xl font-extrabold" />{" "}
                  {car.price}
                </span>
              </div>

              {/* View Seller Details */}
              <Link to="/car-details">
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
                  {car.location}
                </p>
                <h3 onClick={handleShare} className="flex items-center gap-1">
                  <LuShare2 className="mt-[3px]"/> Share
                </h3>
                {/* <FaShare
                  onClick={handleShare}
                  title="Share"
                  className="bg-black text-2xl text-white p-2 rounded-full cursor-pointer"
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorOtherCar;
