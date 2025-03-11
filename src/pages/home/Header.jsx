import { Link, useNavigate } from "react-router-dom";
import BannarImg from "../../assets/images/devbannar.png";
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
  const [selectBrand, setSelectBrand] = useState('');
  const [selectModel, setSelectModel] = useState('');
  const navigate = useNavigate();


  const handleSearch = () => {

    let startPrice = "";
    let endPrice = "";
  
    if (budget) {
      const priceRange = budget.split("-");
      startPrice = priceRange[0];
      endPrice = priceRange[1];
    }

    navigate(`/search?vehicle_condition=${carType}&make=${selectBrand}&model=${selectModel}&start_price=${startPrice}&end_price=${endPrice}&body_type=${vehicleType}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleSelectBrand = (value, label) => {
    setBrandID(value);
    setSelectBrand(label.label)
  };
  const handleselectModel = (value) => {
    setSelectModel(value);
  }

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
                    <option value="1-1000000">1L - 10L</option>
                    <option value="1000000-2000000">10L - 20L</option>
                    <option value="2000000-4000000">20L - 40L</option>
                    <option value="4000000-6000000">40L - 60L</option>
                    <option value="6000000-8000000">60L - 80L</option>
                    <option value="8000000-10000000">80L - 1Cr</option>
                    <option value="10000000-20000000">1 - 2Cr</option>
                  </select>
                </div>

                <div className="mb-4">
                  <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                  >
                    <option value="">All Vehicle Types</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="MUV">MUV</option>
                    <option value="minivan">Petrol-LPG</option>
                    <option value="Pickup">Pickup</option>
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
                      value: model.model_name,
                      label: model.model_name,
                    }))}
                    disabled={!brandID}
                    onChange={handleselectModel}
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
              to="/advanced-search"
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
