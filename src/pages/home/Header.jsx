import { Link } from "react-router-dom";
import BannarImg from "../../assets/images/car-new-bannar.png";
import { useState } from "react";
import { Select } from "antd";
import { useAllBrand, useModelByBrand } from "../../api/api";

const Header = () => {
  const [carType, setCarType] = useState("new");
  const [searchBy, setSearchBy] = useState("budget");
  const [budget, setBudget] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { allBrand } = useAllBrand();
  const [brandID, setBrandID] = useState();
  const { modelByBrand } = useModelByBrand(brandID);

  const handleSearch = () => {
    console.log({ carType, searchBy, budget, vehicleType });
    alert(`Searching for ${carType} cars by ${searchBy}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleSelectBrand = (value) => {
    setBrandID(value);
  };

  return (
    <div
      className="w-full h-[25rem] lg:h-[563px] bg-cover bg-center"
      style={{ backgroundImage: `url(${BannarImg})` }}
    >
      {/* Overlay */}
      <div className="inset-0  flex items-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-2 lg:p-6  max-w-[320px] md:max-w-[350px] lg:max-w-sm w-full ml-4 lg:ml-32 mt-7 lg:mt-16">
          <div className="lg:w-80 bg-white w-full">
            <h2 className="text-xl font-bold mb-4">Find your right car</h2>
            <div className="flex mb-4">
              <button
                className={`flex-1 py-2 text-center rounded-l-lg ${
                  carType === "new"
                    ? "bg-ButtonColor text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setCarType("new")}
              >
                New Car
              </button>
              <button
                className={`flex-1 py-2 text-center rounded-r-lg ${
                  carType === "used"
                    ? "bg-ButtonColor text-white"
                    : "bg-gray-200"
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

            {searchBy === "budget" ? (
              <div>
                <div className="mb-4">
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="">Select Budget</option>
                    <option value="1-5">5L - 10L</option>
                    <option value="5L-10L">10L - 20L</option>
                    <option value="10L-20L">20L - 30L</option>
                    <option value="20L-30L">30L - 40L</option>
                    <option value="30-40L">40L - 50L</option>
                    <option value="40L-50L">50L - 60L</option>
                    <option value="50L-1C">60 - 1Cr</option>
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
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <Select
                    showSearch
                    placeholder={
                      <span className="text-black font-semibold">
                        Select Car Brand
                      </span>
                    }
                    className="w-full h-10 text-black"
                    optionFilterProp="label"
                    onSearch={onSearch}
                    options={allBrand.map((brand) => ({
                      value: brand.id,
                      label: brand.brand_name,
                    }))}
                    onChange={handleSelectBrand}
                  />
                </div>

                <div className="mb-4">
                  <Select
                    showSearch
                    className="w-full border rounded-lg h-10"
                    placeholder={
                      <span className="text-black font-semibold">
                        Select Car Model
                      </span>
                    }
                    optionFilterProp="label"
                    options={modelByBrand?.data?.model?.map((model) => ({
                      value: model.id,
                      label: model.model_name,
                    }))}
                    disabled={!brandID}
                  />
                </div>
              </div>
            )}

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
