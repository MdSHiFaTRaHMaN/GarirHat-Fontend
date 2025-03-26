import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import { useBudgetCarList } from "../../api/api";
import { useState } from "react";
import ShadowLoading from "../../components/ShadowLoading";
const { TabPane } = Tabs;
import UpcomingImage from "../../assets/images/UpcomingImage.jpg";
import { BiSolidCar } from "react-icons/bi";

const budgetCategories = [
  { label: "1 - 10 Lakh", range: null },
  { label: "10 - 20 Lakh", range: [1000000, 2000000] },
  { label: "20 - 40 Lakh", range: [2000000, 4000000] },
  { label: "40 - 60 Lakh", range: [4000000, 6000000] },
  { label: "60 - 80 Lakh", range: [6000000, 8000000] },
  { label: "80 - 1 Cors", range: [8000000, 10000000] },
];

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

const TrustedUsedCars = () => {
  const [startPrice, setStartPrice] = useState(1);
  const [endPrice, setEndPrice] = useState(1000000);
  const { budgetCarList, isLoading } = useBudgetCarList(startPrice, endPrice);

  const handleTabChange = (key) => {
    const selectedCategory = budgetCategories[key - 1];
    if (selectedCategory.range) {
      setStartPrice(selectedCategory.range[0]);
      setEndPrice(selectedCategory.range[1]);
    } else {
      setStartPrice(1);
      setEndPrice(1000000);
    }
  };

  return (
    <div className="p-5 w-full lg:w-10/12 mx-auto shadow-lg rounded-lg m-7">
      <h2 className="text-2xl font-bold mb-4">Trusted used cars by budget</h2>
      <Tabs defaultActiveKey="1" onChange={handleTabChange}>
        {budgetCategories.map((category, idx) => (
          <TabPane
            tab={<h3 className="font-semibold">{category.label}</h3>}
            key={idx + 1}
          >
            <p className="font-semibold">
              Showing cars within: {startPrice} - {endPrice} Lakh
            </p>
          </TabPane>
        ))}
      </Tabs>
      <Carousel responsive={responsive}>
        {isLoading ? (
          <ShadowLoading />
        ) : budgetCarList.length === 0 ? (
          <p className="text-center text-gray-500 font-semibold mt-4 flex items-center gap-3">
            <BiSolidCar /> Car not available
          </p>
        ) : (
          budgetCarList.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 m-2 ">
              <img
                src={car.thumbnail_image || UpcomingImage}
                alt={car.make}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2 h-[45px]">
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

export default TrustedUsedCars;
