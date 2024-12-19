import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import BannarImg from '../../assets/images/trave.jpg'

const Bannar = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const CarCondition = [
    {
      value: "new",
      label: "New",
    },
    {
      value: "used",
      label: "Used",
    },
    {
      value: "certified",
      label: "Certified",
    },
  ];

  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${BannarImg})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl mb-12">
            Car shopping <span className="text-blue-400">your way</span>
          </h1>
          <div className="bg-white p-7 rounded-3xl">
            {/* Tabs */}
            <div className="flex justify-center space-x-4 -mt-[47px] ">
              <div className="bg-white rounded-full p-1">
                <button
                  onClick={() => setActiveTab("buy")}
                  className={`px-6 py-2 text-sm font-medium rounded-full transition ${
                    activeTab === "buy"
                      ? "bg-black text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setActiveTab("sell")}
                  className={`px-6 py-2 text-sm font-medium rounded-full transition ${
                    activeTab === "sell"
                      ? "bg-black text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Sell/Trade
                </button>
              </div>
            </div>
            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === "buy" ? (
                <div className="flex flex-col lg:flex-row gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
                  {/* First Select */}
                  <Select
                    defaultValue="New"
                    style={{
                      width: 200,
                    }}
                    options={CarCondition}
                    className="custom-select"
                  />

                  {/* Second Select */}
                  <Select
                    defaultValue="Used"
                    style={{
                      width: 200,
                    }}
                    options={CarCondition}
                    className="custom-select"
                  />

                  {/* Third Select */}
                  <Select
                    defaultValue="Certified"
                    style={{
                      width: 200,
                    }}
                    options={CarCondition}
                    className="custom-select"
                  />

                  {/* Input */}
                  <Input
                    placeholder="ZIP code"
                    className="w-full lg:w-auto border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  />

                  {/* Button */}
                  <Button
                    type="primary"
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md"
                  >
                    Search
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
                  {/* First Select */}
                  <Select
                    defaultValue="Licench"
                    style={{
                      width: 200,
                    }}
                    options={CarCondition}
                    className="custom-select"
                  />

                  {/* Second Select */}
                  <Input
                    placeholder="ZIP code"
                    className="w-full lg:w-auto border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  />

                  {/* Third Select */}
                  <Select
                    defaultValue="Certified"
                    style={{
                      width: 200,
                    }}
                    options={CarCondition}
                    className="custom-select"
                  />

                  {/* Button */}
                  <Button
                    type="primary"
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md"
                  >
                    Get Your Offers
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
