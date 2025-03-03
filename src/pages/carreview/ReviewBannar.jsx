import { Divider, Select } from "antd";
import ReviewImage from "../../assets/images/reviewbannar.jpg";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAllBrand, useModelByBrand } from "../../api/api";
import { Link } from "react-router-dom";

const ReviewBannar = () => {
  const { allBrand } = useAllBrand();
  const [brandID, setBrandID] = useState();
  const { modelByBrand } = useModelByBrand(brandID);
  const [selectModel, setSelectModel] = useState();

  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleSelectBrand = (value) => {
    setBrandID(value);
  };
  const handleSelectModel = (value) => {
    setSelectModel(value);
  };

  return (
    <div
      className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ReviewImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 px-4 w-full max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-6">
          1,000+ Genuine Reviews To <br className="hidden sm:block" /> Find The
          Right Car!
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 text-black bg-white p-3 rounded shadow-md w-full max-w-4xl mx-auto">
          {/* Brand Select */}
          <Select
            style={{
              border: "none",
              boxShadow: "none",
            }}
            showSearch
            placeholder={
              <span className="text-black font-semibold">Select Car Brand</span>
            }
            className="w-full h-[50px] text-black !border-none focus:!border-none"
            optionFilterProp="label"
            onSearch={onSearch}
            options={allBrand.map((brand) => ({
              value: brand.id,
              label: brand.brand_name,
            }))}
            onChange={handleSelectBrand}
          />

          <span className="hidden sm:block w-[1px] h-10 bg-gray-300"></span>
          <Divider
            className="block lg:hidden"
            style={{
              borderColor: "#1F1F1F",
            }}
          />
          {/* Model Select */}
          <Select
            showSearch
            className="w-full border rounded  h-[50px]"
            placeholder={
              <span className="text-black font-semibold">Select Car Model</span>
            }
            optionFilterProp="label"
            options={modelByBrand?.data?.model?.map((model) => ({
              value: model.model_name,
              label: model.model_name,
            }))}
            disabled={!brandID}
            onChange={handleSelectModel}
          />

          {/* Search Button */}
          <Link to={`/search-review/${selectModel}`}>
            <button
              disabled={!selectModel} 
              className={`flex items-center gap-2 bg-ButtonColor hover:bg-ButtonHover text-white px-12 py-3 rounded-md w-full sm:w-auto ${
                !selectModel ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FaSearch /> Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewBannar;
