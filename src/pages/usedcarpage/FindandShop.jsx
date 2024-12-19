import React from "react";
import { Select, Input, Button } from "antd";
import { IoLocationOutline } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const FindandShop = () => {
  const carBody = [
    { label: "SUV / Crossover", img: "🚙" },
    { label: "Sedan", img: "🚗" },
    { label: "Pickup Truck", img: "🛻" },
    { label: "Coupe", img: "🚘" },
    { label: "Hatchback", img: "🚐" },
    { label: "Convertible", img: "🚖" },
    { label: "Wagon", img: "🚚" },
    { label: "Minivan", img: "🚐" },
  ];
  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-2">
        Shopping for a Used Car?
      </h1>
      <p className="text-gray-500 text-center mb-8">Know more, shop wisely</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-2/6 bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">By Make & Model</h2>
          {/* Dropdowns and Inputs */}
          <div className="space-y-3">
            <Select placeholder="All makes" className="w-full">
              <Option value="toyota">Toyota</Option>
              <Option value="honda">Honda</Option>
              <Option value="nissan">Nissan</Option>
            </Select>

            <Select placeholder="All models" className="w-full">
              <Option value="camry">Camry</Option>
              <Option value="civic">Civic</Option>
              <Option value="altima">Altima</Option>
            </Select>

            <div className="flex gap-2">
              <Input placeholder="Min Price" prefix={<BiDollar />} />
              <Input placeholder="Max Price" prefix={<BiDollar />} />
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="ZIP code"
                prefix={<IoLocationOutline />}
                className="w-2/3"
              />
              <Select defaultValue="50" className="w-1/3">
                <Option value="10">10 mi</Option>
                <Option value="25">25 mi</Option>
                <Option value="50">50 mi</Option>
              </Select>
            </div>

            <Button
              type="primary"
              icon={<SearchOutlined />}
              className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-4/6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            By Body Style
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Car Body Styles */}
            {carBody.map((car, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
              >
                <div className="text-5xl">{car.img}</div>
                <p className="text-center text-sm md:text-base font-medium underline">
                  {car.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindandShop;
