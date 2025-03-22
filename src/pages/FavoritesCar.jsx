import { Button, Divider, message, Modal } from "antd";
import { IoLocationOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { API, useUserProfile, useWishListVechile } from "../api/api";
import UpcomingImage from "../assets/images/UpcomingImage.jpg";
import { useState } from "react";
import LoadingWhile from "../components/LoadingWhile";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaChevronCircleRight } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";

const FavoritesCar = () => {
  const { userProfile } = useUserProfile();
  const user_id = userProfile.id;
  const { wishListVechile, refetch, isLoading } = useWishListVechile(user_id);
  const [loading, setLoading] = useState(false);

  // Share url section
  const handleShare = (id) => {
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
  //  single delete
  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this Vehicle?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      cancelText: "Cancel",
      okType: "danger",
      onOk: async () => {
        try {
          setLoading(true);
          const response = await API.delete(`/wishlist/delete/${id}`);
          console.log("responsive", response);
          if (response.status === 200) {
            message.success("Wishlist Vechile deleted successfully!");
            refetch();
          }
        } catch (error) {
          message.error("Failed to delete model");
          console.log("Error:", error);
        } finally {
          setLoading(false);
        }
      },
      onCancel() {
        console.log("Deletion cancelled.");
      },
    });
  };
  // all delete
  const handleAllDelete = async () => {
    Modal.confirm({
      title: "Are you sure you want to delete All Vehicle?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      cancelText: "Cancel",
      okType: "danger",
      onOk: async () => {
        try {
          setLoading(true);
          const response = await API.delete(`/wishlist/my/${user_id}}`);
          console.log("responsive", response);
          if (response.status === 200) {
            message.success("Wishlist Vechile deleted successfully!");
            refetch();
          }
        } catch (error) {
          message.error("Failed to delete model");
          console.log("Error:", error);
        } finally {
          setLoading(false);
        }
      },
      onCancel() {
        console.log("Deletion cancelled.");
      },
    });
  };

  return (
    <div className="py-10 w-full lg:w-10/12 mx-auto p-4">
      <h2 className="text-3xl font-bold uppercase">Your Favorite Cars List</h2>
      <p className="text-gray-600 max-w-2xl mt-2">
        Explore your handpicked collection of dream cars. Save your favorites
        and make your perfect choice with top-notch performance and luxury.
      </p>
      <div className="flex justify-end">
        <Button onClick={handleAllDelete} danger>
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-2 lg:px-0.5">
        {isLoading ? (
          <LoadingWhile />
        ) : (
          wishListVechile.map((car) => (
            <div
              key={car.id}
              className="relative border rounded-lg bg-white shadow-md overflow-hidden"
            >
              {/* Like Button */}
              <div className="absolute top-2 right-2 cursor-pointer rounded-full shadow-md">
                <RiDeleteBin6Line
                  loading={loading}
                  onClick={() => handleDelete(car.wishlist_id)}
                  className="absolute top-1 right-1 text-red-500 text-2xl bg-white p-1 rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Car Image */}
              <Link to={`/car-details/${car.vehicle_id}`}>
                <img
                  src={car.thumbnail_image || UpcomingImage}
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
                <Link to={`/car-details/${car.vehicle_id}`}>
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
                    onClick={() => handleShare(car.vehicle_id)}
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

export default FavoritesCar;
