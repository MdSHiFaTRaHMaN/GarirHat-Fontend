import { Collapse, Divider, message } from "antd";
import {
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { API, useMoreCarinBrand, useUserProfile } from "../../api/api";
import UpcomingImg from "../../assets/images/UpcomingImage.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";

const RecommendedUsedCars = ({ brandName }) => {
  const queryClient = useQueryClient();
  const { userProfile } = useUserProfile();
  const [likedCars, setLikedCars] = useState({});
  const { moreCarinBrand } = useMoreCarinBrand(brandName);
  const [loading, setLoading] = useState(false);

  const handleShare = () => {
    const url = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: url,
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
const items = [
    {
      key: "1",
      label: (
        <span className="text-xl font-semibold">More {brandName} Cars</span>
      ),
      children: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {moreCarinBrand?.slice(0, 2).map((car) => (
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
                  src={car.thumbnail || UpcomingImg}
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
          ))}
        </div>
      ),
    },
  ];

  const toggleLike = async (carId) => {
    if (!userProfile.id) {
      message.error("You need to log in first!");
      return;
    }
  
    setLikedCars((prev) => ({
      ...prev,
      [carId]: !prev[carId], 
    }));
  
    const user_id = userProfile.id;
    const vehicle_id = carId;
  
    try {
      setLoading(true);
      const response = await API.post("/wishlist", { user_id, vehicle_id });
  
      queryClient.invalidateQueries(["wishListVechile", user_id]);
  
      if (response.status === 201) {
        message.success("Wishlist Added Successfully");
      } else if (response.status === 200) {
        message.success("Wishlist Removed Successfully");
      }
  
    } catch (error) {
      console.error("Error:", error);
      message.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  


  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await API.get(`/wishlist/${userProfile.id}`);
        const wishlist = response.data.reduce((acc, car) => {
          acc[car.vehicle_id] = true; // লাইক করা গাড়িগুলো স্টেটে সেট করুন
          return acc;
        }, {});
  
        console.log("Wishlist Data:", wishlist); // কনসোল লগ করে চেক করুন
        setLikedCars(wishlist); // স্টেটে সেট করুন
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
  
    if (userProfile.id) {
      fetchWishlist();
    }
  }, [userProfile.id]);
  
  return (
    <div className="p-2 lg:p-6 bg-white">
      <h2 className="text-xl font-bold">Recommended Used Cars</h2>
      <p className="text-gray-500 text-sm mb-4">
        Showing 5 more cars you might like
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {moreCarinBrand?.slice(0, 2).map((car) => (
          <div
            key={car.id}
            className="relative border rounded-lg bg-white shadow-md overflow-hidden"
          >
            {/* Like Button */}
            <div
              onClick={() => toggleLike(car.id)}
              className="absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full shadow-md"
            >
              {/* {likedCars[car.id] ? (
                <HeartFilled className="text-TextColor text-xl bg-white p-1 rounded-full" />
              ) : (
                <HeartOutlined className="text-TextColor text-xl bg-white p-1 rounded-full" />
              )} */}
            </div>

            {/* Car Image */}
            <Link to={`/car-details/${car.id}`}>
              <img
                src={car.thumbnail || UpcomingImg}
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
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <Collapse
          expandIconPosition="end"
          defaultActiveKey={["1"]}
          items={items}
          className="border-none bg-white"
        />
      </div>
    </div>
  );
};

export default RecommendedUsedCars;
