import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Car from "../../assets/images/car-image.jpg";

// Custom Arrow Components
const CustomLeftArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 ml-3 text-black px-2 py-7 rounded cursor-pointer shadow-lg z-10"
    onClick={onClick}
  >
    <LeftOutlined />
  </div>
);

const CustomRightArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 mr-3 text-black px-2 py-7 rounded cursor-pointer shadow-lg z-10"
    onClick={onClick}
  >
    <RightOutlined />
  </div>
);

const CarType = () => {
  const carTypes = [
    { name: "SEDANS", image: Car },
    { name: "SUVS", image: Car },
    { name: "TRUCKS", image: Car },
    { name: "VANS", image: Car },
    { name: "ELECTRIC VEHICLES (EV)", image: Car },
    { name: "HYBRIDS", image: Car },
    { name: "PLUG-IN HYBRIDS (PHEV)", image: Car },
    { name: "HATCHBACKS", image: Car },
    { name: "HATCHBACKS", image: Car },
    { name: "HATCHBACKS", image: Car },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
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
  return (
    <div className="text-center p-6 w-full lg:w-10/12 mx-auto">
      <h2 className="text-4xl font-semibold mb-6">Top-rated cars by type</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        renderArrowsWhenDisabled={false}
        containerClass="relative"
        draggable
      >
        {carTypes.map((car, index) => (
          <div key={index} className="px-2">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-sm font-medium">{car.name}</p>
          </div>
        ))}
      </Carousel>
      <Button type="default" className="mt-4 rounded-full px-6 py-2">
        See all
      </Button>
    </div>
  );
};

export default CarType;
