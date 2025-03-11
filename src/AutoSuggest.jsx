import { HeartFilled } from "@ant-design/icons";
import { useState } from "react";
import { API, useAllVehicles, useUserProfile } from "./api/api";
import { message } from "antd";

const ProductFilter = () => {
  const [likedCars, setLikedCars] = useState({});

  
    const toggleLike = async (carId) => {
      const user_id = userProfile.id;
      const vehicle_id = carId;
  
      const wishList = { user_id, vehicle_id };
  
      try {
        setLoading(true);
        const response = await API.post("/wishlist", wishList);
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

    
      const { allVehicles, isLoading } = useAllVehicles();
    
      const { userProfile } = useUserProfile();
      const [loading, setLoading] = useState(false);

  return (
    <div>
        {/* Car Grid Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
        {isLoading ? (
          <span>Loading---</span>
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

export default ProductFilter;
