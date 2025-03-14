import { Select, Divider } from "antd";
import {
  AiOutlineSearch,
  AiOutlineLike,
  AiOutlineComment,
} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { useAllBrand, useModelByBrand } from "../../api/api";
import { useState } from "react";

const { Option } = Select;

const CarVideo = () => {
  const { allBrand } = useAllBrand();
  const [brandID, setBrandID] = useState();
  const { modelByBrand } = useModelByBrand(brandID);

  console.log(brandID);

  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleSelectBrand = (value) => {
    setBrandID(value);
  };
  return (
    <div className="mx-auto p-4">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold mb-4">
        Cars videos, car video clips
      </h1>

      {/* Search Bar */}
      <div className="grid lg:flex gap-3 items-center">
        <Select
          showSearch
          placeholder="Select Brand"
          className="w-full h-12"
          optionFilterProp="label"
          onSearch={onSearch}
          options={allBrand.map((brand) => ({
            value: brand.id,
            label: brand.brand_name,
          }))}
          onChange={handleSelectBrand}
        />
        <Select
          showSearch
          className="w-full h-12"
          placeholder="Select Car Model"
          optionFilterProp="label"
          options={modelByBrand?.data?.model?.map((model) => ({
            value: model.id,
            label: model.model_name,
          }))}
          disabled={!brandID}
        />

        <button className="bg-ButtonColor hover:bg-ButtonHover flex items-center px-12 p-3 rounded-md text-white font-semibold">
          <AiOutlineSearch className="mr-1" />
          Search
        </button>
      </div>

      {/* Video Section */}
      <div className="mt-6 bg-white grid lg:flex gap-5 ">
        <iframe
          className="w-full h-[295px] rounded-lg"
          src="https://www.youtube.com/embed/QEZry7fdej0?si=9XIXPCkdv7KHRq6v"
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Video Info */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            The XEV 9e is Mahindra at its best! | First Drive Review |
            PowerDrift
          </h2>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <FaYoutube className="text-red-600 mr-1" />
            <span className="mr-2">GarirHat</span> •
            <span className="ml-2">6.4K Views • 3 days ago</span>
          </div>
          <Divider />
          <div className="mt-3 flex items-center justify-between text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <AiOutlineLike className="mr-1" /> 4.8K Likes
              </span>
              <span className="flex items-center">
                <AiOutlineComment className="mr-1" /> 34 Comments
              </span>
            </div>
          </div>
          <div>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarVideo;
