import React from "react";
import { Button } from "antd";
import { AiOutlineCar } from "react-icons/ai"; 
import Car from '../../assets/images/blue car.png'

const CarSell = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Sell your car yourself</h2>
          <p className="text-gray-600 mb-4">
            Vetted buyers. Smart tools. The offer you deserve.
          </p>
          <Button
            type="primary"
            className="bg-blue-500 hover:bg-blue-600 font-semibold"
          >
            <AiOutlineCar className="inline-block mr-2" />
            Sell Your Car
          </Button>
          <img
            src={Car} // Replace with actual car image
            alt="Car"
            className="mt-4 rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Browse Certified Pre-Owned Vehicles</h2>
          <p className="text-gray-600 mb-6">
            CPO vehicles benefit from that extra assurance that the vehicle you
            are buying is free of defects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Brand Cards */}
            {[
              "Ford",
              "Chevrolet",
              "Jeep",
              "Dodge",
              "Toyota",
              "Honda",
              "BMW",
              "GMC",
            ].map((brand) => (
              <div
                key={brand}
                className="border border-gray-300 rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <p className="font-semibold text-gray-700">{brand}</p>
              </div>
            ))}
            {/* Browse All Card */}
            <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
              <a href="#" className="text-blue-500 font-semibold">
                Browse All CPO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSell;
