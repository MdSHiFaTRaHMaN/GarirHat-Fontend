import { useState } from "react";
import { Button } from "antd";
import { FaCar } from "react-icons/fa";
import Toyato from "../../assets/images/toyato.png";

const carBrands = [
  { name: "Toyota", logo: Toyato },
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Chevrolet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Audi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Acura",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Hyundai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Dodge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Mercedes-Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Kia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
  {
    name: "Lexus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",
  },
];

const CarBrands = () => {
  const [selectedType, setSelectedType] = useState("New Cars");

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Shop your favorite brand</h2>
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 rounded-l-lg ${
            selectedType === "New Cars"
              ? "bg-black text-white"
              : "bg-white text-black border"
          }`}
          onClick={() => setSelectedType("New Cars")}
        >
          New Cars
        </button>
        <button
          className={`px-6 py-2 rounded-r-lg ${
            selectedType === "Used Cars"
              ? "bg-black text-white"
              : "bg-white text-black border"
          }`}
          onClick={() => setSelectedType("Used Cars")}
        >
          Used Cars
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full lg:w-10/12 mx-auto">
        {carBrands.map((brand, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-3 p-4 py-10 bg-white shadow-md hover:shadow-lg rounded-lg "
          >
            <img src={brand.logo} alt={brand.name} className="w-10 h-10" />
            <span className="text-lg font-medium">{brand.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 mx-auto flex justify-center text-center">
        <Button className="px-6 py-4 rounded bg-black text-white flex items-center gap-2">
          See more <FaCar />
        </Button>
      </div>
      <p className="text-left my-4">
        *Vehicle incentives and rebates are programs made available by car
        manufacturers to encourage vehicle sales by providing consumers with
        cash allowances or favorable financing/lease rates. Incentives can vary
        by location, vehicle configuration, as well as the buyer's method of
        payment (cash purchase, financing, lease). Some incentives can be
        stacked with other incentive programs, and some have eligibility
        conditions that must be met to qualify. Additional incentives are
        sometimes targeted to customer segment groups like college graduates,
        military members, etc. Incentives are normally subject to change and
        governed by specific eligibility rules. Please see your local dealer for
        details on incentives that might be available to you.
      </p>
    </div>
  );
};

export default CarBrands;
