import { Divider, message, Select, Tabs } from "antd";
import CarImage from "../../assets/images/new-car-collection.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from "react";
import { LuShare2 } from "react-icons/lu";
import { API, useAllCarList, useUserProfile } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";
import Topmenu from "../../components/Topmenu";
import { useQueryClient } from "@tanstack/react-query";

const ShowAllCar = () => {
  const queryClient = useQueryClient();
  const { conditionParams } = useParams();
  const [likedCars, setLikedCars] = useState({});
  const [selectBrand, setSelectBrand] = useState("");

  const { allCarList, isLoading, refetch } = useAllCarList({
    conditionParams,
    selectBrand,
  });



  const { userProfile } = useUserProfile();
  const [loading, setLoading] = useState(false);

  const toggleLike = async (carId) => {
    const user_id = userProfile.id;
    const vehicle_id = carId;

    const wishList = { user_id, vehicle_id };

    try {
      setLoading(true);
      const response = await API.post("/wishlist", wishList);
      queryClient.invalidateQueries(["wishListVechile", user_id]);
      if (response.status == 201) {
        message.success("Wishlist Added Successfully");
      }
      if (response.status == 200) {
        message.success("Wishlist Remove Successfully");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
      setLoading(false);
    }

    setLikedCars((prev) => ({
      ...prev,
      [carId]: !prev[carId],
    }));
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

  const handleShare = (id) => {
    console.log("id", id);
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: `${window.location.origin}/car-details/${id}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Failed to copy:", err));
    }
  };

  const handleModelCar = (key) => {
    const selectedOption = filterOptions.find((option) => option.key === key);
    setSelectBrand(
      selectedOption?.label === "All Car" ? "" : selectedOption?.label
    );
  };

  return (
    <div className="px-4 md:px-8 lg:px-10 py-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Buying your dream car? Check Now!
        </h1>
        <p className="text-sm text-gray-600 my-2">
          GarirHat brings you the latest new cars in Bangladesh for 2025 with
          updated prices. A wide range of new car models from various brands is
          available, offering budget-friendly and fuel-efficient options.
          Whether you're looking for a stylish sedan, a powerful SUV, or an
          economical compact car, you'll find the perfect match to suit your
          needs. Stay updated with the best deals and features only on GarirHat!
        </p>
      </div>
      {/* Tabs & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Tabs
          defaultActiveKey="1"
          items={filterOptions}
          className="w-full md:w-auto"
          onChange={handleModelCar}
        />
        <Select
          defaultValue="Select Filter by Car"
          className="w-full lg:w-[165px]"
          suffixIcon={
            <FiFilter style={{ color: "#3eb4e7", fontSize: "16px" }} />
          }
          options={[
            { value: "l-to-h", label: "Price - Low to High" },
            { value: "h to-l", label: "Price - High to Low" },
            { value: "K-l-to-h", label: "Kms - Low to High" },
            { value: "K-l-to-h", label: "Kms - High to Low" },
            { value: "new-old", label: "Model - Newest to Oldest" },
            { value: "new-old", label: "Model - Oldest to Newest" },
          ]}
        />
      </div>
      {/* Car Grid Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
        {isLoading ? (
          <LoadingWhile />
        ) : (
          allCarList.map((car) => (
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
                    40,10,000 Taka
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
                    {car.upzila}, {car.district}, {car.division}
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

export default ShowAllCar;
