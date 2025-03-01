import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import { useAllCarList } from "../../api/api";
import { useState } from "react";
import ComingImaage from "../../assets/images/UpcomingImage.jpg";
import ShadowLoading from "../../components/ShadowLoading";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MostSearchCar = () => {
  const [selectBrand, setSelectBrand] = useState("");
  const { allCarList, isLoading } = useAllCarList({
    selectBrand,
  });

  const filterOptions = [
    { key: "1", label: "All Car" },
    { key: "2", label: "Toyota" },
    { key: "3", label: "Honda" },
    { key: "4", label: "Nissan" },
    { key: "5", label: "Mitsubishi" },
    { key: "6", label: "Hyundai" },
    { key: "7", label: "Mercedes-Benz" },
    { key: "8", label: "BMW" },
    { key: "9", label: "Ford" },
    { key: "10", label: "Kia" },
    { key: "11", label: "Suzuki" },
  ];
  const handleModelCar = (key) => {
    const selectedOption = filterOptions.find((option) => option.key === key);
    setSelectBrand(
      selectedOption?.label === "All Car" ? "" : selectedOption?.label
    );
  };

  return (
    <div className="p-5 w-full lg:w-10/12 mx-auto shadow-lg rounded-lg m-7">
      <h2 className="text-2xl font-bold mb-4">The most searched cars</h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Tabs
          defaultActiveKey="1"
          items={filterOptions}
          className="w-full md:w-auto"
          onChange={handleModelCar}
        />
      </div>

      <Carousel responsive={responsive}>
        {isLoading ? (
          <ShadowLoading />
        ) : allCarList.length === 0 ? (
          <p className="text-center text-gray-500 font-semibold mt-4">
            🚗 Car not available
          </p>
        ) : (
          allCarList.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 m-2 ">
              <img
                src={car.thumbnail_image || ComingImaage}
                alt={car.make}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">
                {car.year_of_manufacture} {car.make} {car.model}
              </h3>
              <p className="text-gray-600 mb-4 text-start">
                ৳ {car.discount_price} TK
              </p>
              <Link to={`/car-details/${car.id}`}>
                <button className="w-full mb-2 border border-ButtonColor hover:bg-ButtonHover p-2 text-ButtonColor hover:text-white font-semibold rounded-lg">
                  View Car Details
                </button>
              </Link>
            </div>
          ))
        )}
      </Carousel>

      <div className="text-center mt-6">
        <Link
          to="/new-car"
          className="inline-block px-6 py-2 text-sm font-semibold text-white bg-ButtonColor rounded hover:bg-ButtonHover transition-all"
        >
          View All Cars &rarr;
        </Link>
      </div>
    </div>
  );
};

export default MostSearchCar;
