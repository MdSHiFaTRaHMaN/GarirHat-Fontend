import { Select, Button } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { useAllBrand, useAllVideos, useModelByBrand } from "../../api/api";
import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { RiVideoOnAiFill } from "react-icons/ri";

const CarVideo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { allBrand } = useAllBrand();
  const [brandID, setBrandID] = useState();
  const { modelByBrand } = useModelByBrand(brandID);
  const [selectBrand, setSelectBrand] = useState("");
  const [selectModel, setSelectModel] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const makeName = params.get("make");
  const modelName = params.get("model");

  const make = makeName ? makeName : "";
  const model = modelName ? modelName : "";

  const { allVideos } = useAllVideos(make, model);

  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleSelectBrand = (value, label) => {
    setBrandID(value);
    setSelectBrand(label.label);
  };
  const handleselectModel = (value) => {
    setSelectModel(value);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.set("make", selectBrand);
    params.set("model", selectModel);
    setSearchParams(params);
  };

  return (
    <div className="mx-auto">
      {/* Title */}
      <div className="grid lg:flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">
          Cars videos, car video clips
        </h1>
        <Link to="/add-video">
          <Button className="bg-ButtonColor w-full  my-2 lg:my-0 hover:!bg-ButtonHover rounded py-2 px-4 !text-white font-semibold flex items-center gap-2">
            <RiVideoOnAiFill /> Add Video Review
          </Button>
        </Link>
      </div>
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
            value: model.model_name,
            label: model.model_name,
          }))}
          disabled={!brandID}
          onChange={handleselectModel}
        />

        <button
          onClick={handleSearch}
          className="bg-ButtonColor hover:bg-ButtonHover flex items-center px-12 p-3 rounded-md text-white font-semibold"
        >
          <AiOutlineSearch className="mr-1" />
          Search
        </button>
      </div>

      {/* Video Section */}
      {allVideos?.length > 0 ? (
        <div key={allVideos[0].id} className="mt-6 bg-white ">
          <iframe
            className="w-full h-[200px] lg:h-[375px] rounded-lg"
            src={allVideos[0].embedUrl}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              {allVideos[0].make} {allVideos[0].model} {allVideos[0].trim}
            </h2>
            <h4>Year: {allVideos[0].year} </h4>
            <h4>
              Video Upload Date:{" "}
              {new Date(allVideos[0].created_at).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
            </h4>
          </div>
        </div>
      ) : (
        <h2 className="text-2xl mt-6">
          There is no video review for this car. You can watch reviews of other
          cars if you want.
        </h2>
      )}
    </div>
  );
};

export default CarVideo;
