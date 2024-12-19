import React from "react";
import { Button, Tag } from "antd";
import BlackCar from "../../assets/images/black car.png";
import YellowCar from "../../assets/images/yellow car.png";

const categories = [
  "Under $15k",
  "Fuel Efficient Cars",
  "Family Cars",
  "Electric",
  "Hybrid/Plug-in",
  "Accessible Luxury",
  "Great Deals",
  "Best Cars in Show",
];

const CarShowcase = () => {
  return (
    <div className="bg-blue-900 text-white">
      {/* Top Section */}
      <div className="text-center py-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Discover your perfect car
        </h1>
      </div>

      {/* Car Image Section */}
      <div className="flex justify-center items-center gap-5 px-5 py-5 flex-wrap">
        {/* Car Blocks */}
        <div className="w-full sm:w-1/3">
          <img src={BlackCar} alt="Red Truck" className="w-full" />
        </div>
        <div className="w-full sm:w-1/3">
          <img src={YellowCar} alt="Blue SUV" className="w-full" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-8 text-center">
        <h2 className="text-black text-3xl font-bold mb-6">
          Browse by category
        </h2>
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {categories.map((category, index) => (
            <Tag
              key={index}
              color="default"
              className="cursor-pointer rounded-full hover:bg-blue-700 hover:text-white px-4 py-2 text-lg font-semibold text-md"
            >
              {category}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarShowcase;
