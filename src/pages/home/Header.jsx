import { Link } from "react-router-dom";
import BannarImg from "../../assets/images/bannar420.png";
import { useState } from "react";

const Header = () => {
  const [carType, setCarType] = useState("new");
  const [searchBy, setSearchBy] = useState("budget");
  const [budget, setBudget] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const handleSearch = () => {
    console.log({ carType, searchBy, budget, vehicleType });
    alert(`Searching for ${carType} cars by ${searchBy}`);
  };

  return (
    <div
      className="w-full h-[38rem] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BannarImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center px-4 ">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full ml-32">
          <div className="w-80 bg-white">
            <h2 className="text-xl font-bold mb-4">Find your right car</h2>
            <div className="flex mb-4">
              <button
                className={`flex-1 py-2 text-center rounded-l-lg ${
                  carType === "new" ? "bg-black text-white" : "bg-gray-200"
                }`}
                onClick={() => setCarType("new")}
              >
                New Car
              </button>
              <button
                className={`flex-1 py-2 text-center rounded-r-lg ${
                  carType === "used" ? "bg-black text-white" : "bg-gray-200"
                }`}
                onClick={() => setCarType("used")}
              >
                Used Car
              </button>
            </div>

            <div className="flex justify-center items-center gap-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="searchBy"
                  value="budget"
                  checked={searchBy === "budget"}
                  onChange={() => setSearchBy("budget")}
                />
                By Budget
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="searchBy"
                  value="brand"
                  checked={searchBy === "brand"}
                  onChange={() => setSearchBy("brand")}
                />
                By Brand
              </label>
            </div>

            <div className="mb-4">
              <select
                className="w-full border rounded-lg px-3 py-2"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Select Budget</option>
                <option value="1L-5L">1L - 5L</option>
                <option value="5L-10L">5L - 10L</option>
                <option value="10L-20L">10L - 20L</option>
                <option value="20L-30L">20L - 30L</option>
                <option value="30-40L">30L - 40L</option>
                <option value="40L-50L">40L - 50L</option>
                <option value="50L-1C">50 - 1Cr</option>
                <option value="1C">Above 1Cr</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                className="w-full border rounded-lg px-3 py-2"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="">All Vehicle Types</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="convertible">Convertible</option>
                <option value="coupe">Coupe</option>
                <option value="wagon">Wagon</option>
                <option value="pickup">Pickup Truck</option>
                <option value="minivan">Minivan</option>
                <option value="luxury">Luxury</option>
                <option value="sports">Sports Car</option>
              </select>
            </div>

            <button
              className="w-full py-2 bg-ButtonColor text-white rounded-lg hover:bg-ButtonHover"
              onClick={handleSearch}
            >
              Search
            </button>

            <Link
              to="/new-car"
              className="block mt-4 text-center text-gray-600 underline"
            >
              Advanced Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
