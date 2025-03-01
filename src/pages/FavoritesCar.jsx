import { Card, Button, Divider, message } from "antd";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ShareAltOutlined } from "@ant-design/icons";
import { API, useUserProfile, useWishListVechile } from "../api/api";
import UpcomingImage from "../assets/images/UpcomingImage.jpg";
import { useState } from "react";
import LoadingWhile from "../components/LoadingWhile";

const FavoritesCar = () => {
  const { userProfile } = useUserProfile();
  const user_id = userProfile.id;
  const { wishListVechile, refetch, isLoading } = useWishListVechile(user_id);
  const [loading, setLoading] = useState(false);

  console.log(wishListVechile);
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

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await API.delete(`/wishlist/delete/${id}`);
      message.success("Wishlist Vechile deleted successfully!");
      refetch();
    } catch (error) {
      console.error("Error deleting user:", error);
      message.error("Failed to delete the user. Please try again.");
    }
  };
  return (
    <div className="py-10 w-full lg:w-10/12 mx-auto p-4">
      <h2 className="text-3xl font-bold uppercase">Your Favorite Cars List</h2>
      <p className="text-gray-600 max-w-2xl mt-2">
        Explore your handpicked collection of dream cars. Save your favorites
        and make your perfect choice with top-notch performance and luxury.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-2 lg:px-0.5">
        {isLoading ? (
          <LoadingWhile />
        ) : (
          wishListVechile.map((car) => (
            <Card
              key={car.vehicle_id}
              hoverable
              cover={
                <div className="relative">
                  <img
                    alt={car.name}
                    src={car.thumbnail_image || UpcomingImage}
                    className="rounded-t-lg h-[180px] w-full"
                  />
                  <RiDeleteBin6Line
                    loading={loading}
                    onClick={() => handleDelete(car.wishlist_id)}
                    className="absolute top-1 right-1 text-red-500 text-2xl bg-white p-1 rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </div>
              }
              className="rounded-lg shadow-md overflow-hidden bg-white"
            >
              <div className="px-4 py-1.5 text-left">
                <h3 className="text-xl font-semibold flex items-center gap-2 line-clamp-2 h-[45px]">
                  {car.year_of_manufacture} {car.make} {car.model}
                </h3>
                <p className="text-lg font-bold text-orange-500 mt-2 flex items-center">
                  <FaBangladeshiTakaSign className="text-black" />{" "}
                  {car.discount_price}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {car.mileage} kms • {car.fuel_type} • {car.transmission}
                </p>
                <Divider />
                <p className="flex items-center">
                  <IoLocationOutline /> {car.upzila}, {car.district},{" "}
                  {car.division}
                </p>
                <div className="mt-4 flex justify-between gap-2 items-center">
                  <Button className="bg-ButtonColor border-none !importent hover:!bg-ButtonHover !text-white p-2 w-full">
                    View Details
                  </Button>
                  <ShareAltOutlined onClick={() => handleShare(car.vehicle_id)} className="text-xl" />
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesCar;
