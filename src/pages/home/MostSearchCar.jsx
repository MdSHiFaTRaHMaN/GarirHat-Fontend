import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import { useAllBrand, useMostSearchCar } from "../../api/api";
import { useState } from "react";
import ComingImage from "../../assets/images/UpcomingImage.jpg";
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
  const { allBrand } = useAllBrand();
  const [selectBrand, setSelectBrand] = useState("");

  const { mostSearchCar, isLoading } = useMostSearchCar({
    selectBrand,
  });

  const handleModelCar = (key) => {
    setSelectBrand(key === "all" ? "" : key);
  };

  const tabItems = [
    { key: "all", label: "All Cars" },
    ...allBrand.map((item) => ({
      key: item.brand_name,
      label: item.brand_name,
    })),
  ];

  return (
    <div className="p-5 w-full lg:w-10/12 mx-auto shadow-lg rounded-lg m-7">
      <h2 className="text-2xl font-bold mb-4">The most searched cars</h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="overflow-x-auto w-full md:w-auto">
        <Tabs
          defaultActiveKey="all"
          items={tabItems}
          className="whitespace-nowrap"
          onChange={handleModelCar}
        />
      </div>
    </div>

      <Carousel responsive={responsive}>
        {isLoading ? (
          <ShadowLoading />
        ) : mostSearchCar.length === 0 ? (
          <p className="text-center text-2xl text-gray-500 font-semibold mt-4">
             Car not available This Brand
          </p>
        ) : (
          mostSearchCar.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 m-2 ">
              <img
                src={car.thumbnail_image || ComingImage}
                alt={car.make}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">
                {car.year_of_manufacture} {car.make} {car.model}
              </h3>
              <p className="text-gray-600 mb-4 text-start">
                ৳ {car.price.toLocaleString()} TK
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
