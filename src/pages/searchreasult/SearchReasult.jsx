import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Divider, message } from "antd";
import { API, useAllVehicles, useUserProfile } from "../../api/api";
import CarImage from "../../assets/images/UpcomingImage.jpg";
import { IoLocationOutline } from "react-icons/io5";
import LoadingWhile from "../../components/LoadingWhile";
import { Link, useParams, useLocation } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaChevronCircleRight } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const SearchResult = () => {
  const { selectedOption, selectBrand } = useParams();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const [likedCars, setLikedCars] = useState({});
  const { userProfile } = useUserProfile();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const make = params.get("make");
  const model = params.get("model");
  const vehicle_condition = params.get("vehicle_condition");
  const start_price = params.get("start_price");
  const end_price = params.get("end_price");
  const body_type = params.get("body_type");

  const vehicleCondition = selectedOption !== "all" ? selectedOption : "";

  const filter = {
    make: make ? make : selectBrand,
    model,
    vehicle_condition: vehicle_condition ? vehicle_condition : vehicleCondition,
    start_price,
    end_price,
    body_type,
  };

  const { allVehicles, isLoading } = useAllVehicles(filter);

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

  return (
    <div className="w-10/12 mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {selectBrand} <span className="text-gray-500">Car Models</span>
      </h2>
      {/* Car List */}
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
              <Link to={`/car-details/${car.id}`}>
                <img
                  src={car.thumbnail_image || CarImage}
                  alt="Car"
                  className="w-full h-48 object-cover"
                />
              </Link>

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
                    {car.price} TK
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
                    <IoLocationOutline className="text-black" />
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

export default SearchResult;
