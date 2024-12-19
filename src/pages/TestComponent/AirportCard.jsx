import React from "react";
import { Button } from "antd";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";

const airports = [
  {
    name: "İSTANBUL - Avrupa",
    code: "IST",
    price: "1460 ₺",
  },
  {
    name: "ANKARA",
    code: "ESB",
    price: "4777,3 ₺",
  },
  {
    name: "ANTALYA",
    code: "AYT",
    price: "",
  },
  {
    name: "İZMİR",
    code: "ADB",
    price: "644 ₺",
  },
  {
    name: "İSTANBUL - Anadolu",
    code: "SAW",
    price: "684 ₺",
  },
];

const AirportCard = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Popular Airports <AiOutlineArrowRight className="inline-block ml-2" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airports.map((airport, index) => (
          <div
            key={index}
            className=" bg-green-900 rounded-lg shadow-lg p-6 text-white flex flex-col justify-between"
          >
            <h3 className="text-lg font-bold mb-2">{airport.name}</h3>
            <p className="text-sm mb-4 flex items-center">
              {airport.code} <FaPlaneDeparture className="ml-2" />
            </p>
            <p className="text-xl font-semibold mb-4">
              Prices Starting from {airport.price || "N/A"}
            </p>
            <Button type="default" className="w-full">
              Rent Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirportCard;
