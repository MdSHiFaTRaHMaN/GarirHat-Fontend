import { Divider, message, Select } from "antd";
import CarImage from "../../assets/images/new-car-collection.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link, useParams, useLocation } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from "react";
import { LuShare2 } from "react-icons/lu";
import { API, useAllVehicles, useUserProfile } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";
import { useQueryClient } from "@tanstack/react-query";

const ShowAllCar = () => {
  const queryClient = useQueryClient();
  const { conditionParams } = useParams();
  const [likedCars, setLikedCars] = useState({});
  const { userProfile } = useUserProfile();
  const [loading, setLoading] = useState(false);

  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");

  const handleSortChange = (value) => {
    if (value.includes("Price")) {
      setSort("price");
    } else if (value.includes("Kms")) {
      setSort("mileage");
    } else if (value.includes("Model")) {
      setSort("year_of_manufacture");
    }
    if (value.includes("Low to High")) {
      setOrder("asc");
    } else if (value.includes("High to Low")) {
      setOrder("desc");
    } else if (value.includes("Newest to Oldest")) {
      setOrder("asc");
    } else if (value.includes("Oldest to Newest")) {
      setOrder("desc");
    }
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const make = params.getAll("make");
  const model = params.getAll("model");
  const start_price = params.get("start_price");
  const end_price = params.get("end_price");
  const start_year_of_manufacture = params.get("start_year_of_manufacture");
  const end_year_of_manufacture = params.get("end_year_of_manufacture");
  const body_type = params.getAll("body_type");
  const fuel_type = params.getAll("fuel_type");
  const transmission = params.getAll("transmission");
  const start_mileage = params.get("start_mileage");
  const end_mileage = params.get("end_mileage");
  const seating_capacity = params.getAll("seating_capacity");
  const color = params.getAll("color");
  const start_discount_price = params.get("start_discount_price");
  const end_discount_price = params.get("end_discount_price");
  const vehicle_condition = params.getAll("vehicle_condition");
  const district = localStorage.getItem("selectedLocation");
  const filter = {
    make: make,
    model: model,
    vehicle_condition: [...vehicle_condition, conditionParams],
    start_price: start_price ? start_price : "",
    end_price: end_price ? end_price : "",
    body_type: body_type ? body_type : "",
    start_year_of_manufacture: start_year_of_manufacture
      ? start_year_of_manufacture
      : "",
    end_year_of_manufacture: end_year_of_manufacture
      ? end_year_of_manufacture
      : "",
    start_mileage: start_mileage ? start_mileage : "",
    end_mileage: end_mileage ? end_mileage : "",
    fuel_type: fuel_type ? fuel_type : "",
    transmission: transmission ? transmission : "",
    seating_capacity: seating_capacity ? seating_capacity : "",
    color: color ? color : "",
    start_discount_price: start_discount_price ? start_discount_price : "",
    end_discount_price: end_discount_price ? end_discount_price : "",
    sort: sort ? sort : "",
    order: order ? order : "",
    district: district ? district : "",
  };

  const { allVehicles, isLoading, error } = useAllVehicles(filter);

  if (loading) {
    return;
  }

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

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-red-600 font-semibold p-4 bg-red-100 rounded-md">
        <p>⚠️ Something went wrong. Please try again later.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-10 py-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Buying your dream car? Check Now!
        </h1>
        <p className="text-sm text-gray-600 my-2">
          GarirHat brings you the latest new & used cars in Bangladesh for 2025
          with updated prices. A wide range of new & used car models from
          various brands is available, offering budget-friendly and
          fuel-efficient options. Whether looking for a stylish sedan, a
          powerful SUV, or an economical compact car, you will find the perfect
          match to suit your needs. Stay updated with the best deals and
          features only on GarirHat!
        </p>
      </div>
      {/* Tabs & Filter Section */}
      <div className="flex flex-col md:flex-row justify-end items-center gap-4">
        <Select
          defaultValue="Select Filter by Car"
          className="w-full lg:w-[165px]"
          suffixIcon={
            <FiFilter style={{ color: "#3eb4e7", fontSize: "16px" }} />
          }
          onChange={handleSortChange}
          options={[
            { value: "Price - Low to High", label: "Price - Low to High" },
            { value: "Price - High to Low", label: "Price - High to Low" },
            { value: "Kms - Low to High", label: "Kms - Low to High" },
            { value: "Kms - High to Low", label: "Kms - High to Low" },
            {
              value: "Model - Newest to Oldest",
              label: "Model - Newest to Oldest",
            },
            {
              value: "Model - Oldest to Newest",
              label: "Model - Oldest to Newest",
            },
          ]}
        />
      </div>
      {/* Car Grid Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
        {isLoading ? (
          <LoadingWhile />
        ) : allVehicles.length > 0 ? (
          allVehicles.map((car) => (
            <div
              key={car.id}
              className="relative border rounded-lg bg-white shadow-md overflow-hidden"
            >
              {/* Like Button */}
              <button
                onClick={() => toggleLike(car.id)}
                className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition"
                aria-label="Like this car"
              >
                {likedCars[car.id] ? (
                  <HeartFilled className="text-TextColor text-xl" />
                ) : (
                  <HeartOutlined className="text-TextColor text-xl" />
                )}
              </button>

              {/* Car Image */}
              <Link to={`/car-details/${car.id}`}>
                <img
                  src={car.thumbnail_image || CarImage}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </Link>

              {/* Car Details */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">
                  {car.year_of_manufacture} {car.make} {car.model} {car.trim}
                </h3>

                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <p>
                    {new Intl.NumberFormat().format(car.mileage)} kms •{" "}
                    {car.fuel_type} • {car.transmission}
                  </p>
                </div>

                {/* Price Section */}
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xl font-bold text-black flex items-center">
                    <TbCurrencyTaka className="text-2xl font-extrabold" />{" "}
                    {new Intl.NumberFormat().format(car.price)} Taka
                  </span>
                </div>

                {/* View Seller Details */}
                <Link to={`/car-details/${car.id}`}>
                  <button className="text-TextColor font-semibold mt-2 flex items-center hover:underline">
                    View Car Details <FaChevronCircleRight className="ml-1" />
                  </button>
                </Link>

                {/* Divider */}
                <Divider style={{ borderColor: "#4B5567" }} dashed />

                {/* Location & Share */}
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <p className="flex items-center gap-1">
                    <IoLocationOutline /> {car.upzila}, {car.division}
                  </p>
                  <button
                    onClick={() => handleShare(car.id)}
                    className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition"
                    aria-label="Share this car"
                  >
                    <LuShare2 className="mt-[3px]" /> Share
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-3xl text-center w-full col-span-3">
            No cars available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowAllCar;
