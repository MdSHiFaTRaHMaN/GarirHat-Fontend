import { Card, Rate, Select, Button } from "antd";
import { LiaLightbulb } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAllBrand, useModelByBrand, useModelWithBrand } from "../../api/api";


const FavoriteCar = () => {
  const { allBrand } = useAllBrand();
  const [brandID, setBrandID] = useState();
  const { modelByBrand } = useModelByBrand(brandID);
  const [selectModel, setSelectModel] = useState();
  const [brandName, setBrandName] = useState();
  const { modelWithBrand } = useModelWithBrand();


  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleSelectBrand = (value, label) => {
    setBrandName(label.label)
    setBrandID(value);
  };
  const handleSelectModel = (value) => {
    setSelectModel(value);
  };
  return (
    <div className="p-6 w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row gap-6 border rounded-lg my-3">
      {/* Left Section */}
      <div className="w-full lg:w-8/12">
        <h2 className="text-2xl font-bold mb-4">
          Rate and review your favorite car
        </h2>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {modelWithBrand.slice(0, 9).map((car, index) => (
            <Card key={index} className="shadow-md p-3 flex items-center">
              <Link to={`/user-review/${car.brand_name}/${car.id}`} className="flex gap-2 items-center">
                <img
                  src={car.image}
                  width={70}
                  height={100}
                  alt={car}
                  className="rounded-sm"
                />
                <div>
                  <h3 className="font-semibold text-sm">{car.brand_name} {car.model_name}</h3>
                  <Rate
                    className="text-xl text-TextColor"
                    allowHalf
                    defaultValue={car.average_rating}
                  />
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Car Selection */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Select Your Car For Review</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <Select
              style={{
                border: "none",
                boxShadow: "none",
              }}
              showSearch
              placeholder={
                <span className="text-black font-semibold">
                  Select Car Brand
                </span>
              }
              className="w-full md:w-1/2 h-[50px]"
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
              className="w-full md:w-1/2 h-[50px]"
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
              onChange={handleSelectModel}
            />
            <Link to={`/user-review/${brandName}/${selectModel}`}>
              <Button
                type="primary"
                className="w-full md:w-auto bg-ButtonColor hover:!bg-ButtonHover font-semibold py-[25px]"
              >
               Go Rate and Review
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section (Review Tips) */}
      <div className="w-full lg:w-4/12">
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <LiaLightbulb className="text-TextColor text-2xl" /> Tips for a Good
            Review
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-3 text-sm sm:text-base">
            <li>
              Tell us about your buying experience and why you chose this car.
            </li>
            <li>List out the pros and cons.</li>
            <li>Talk about performance, mileage, comfort, etc.</li>
            <li>Share after-sales service experience.</li>
            <li>Give a meaningful title to your review.</li>
            <li>Avoid using all caps and sharing personal details.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCar;
