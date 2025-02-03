import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Card } from "antd";
import CarImage from "../../assets/images/car-review.jpg";
import CarImage2 from "../../assets/images/trave.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 p-2 text-xl bg-white rounded-full shadow-lg -translate-y-1/2 top-1/2"
  >
    <FaArrowLeftLong  />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 p-2 text-xl bg-white rounded-full shadow-lg -translate-y-1/2 top-1/2"
  >
    <FaArrowRightLong  />
  </button>
);

const CarReview = () => {
  const carData = [
    {
      title: "2025 Nissan Armada",
      image: CarImage,
      author: "Perry Stern",
    },
    {
      title: "2025 Nissan Murano",
      image: CarImage2,
      author: "Perry Stern",
    },
    {
      title: "2025 Lexus RZ",
      image: CarImage,
      author: "Dan Frio",
    },
    {
      title: "2026 Lexus RZ",
      image: CarImage,
      author: "Leonal Messi",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="py-10 bg-gray-100 ">
      <h2 className="text-2xl font-bold text-center mb-6">
        Get car reviews from our experts
      </h2>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        containerClass="relative"
        itemClass="px-2"
        className="w-full lg:w-10/12 mx-auto"
      >
        {carData.map((car, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-white rounded"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-gray-800">{car.title}</h3>
              <p className="text-sm text-gray-500">by {car.author}</p>
            </div>
          </Card>
        ))}
      </Carousel>
      <div className="mt-6 text-center">
        <Button type="primary" className="px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
          See all
        </Button>
      </div>
    </div>
  );
};

export default CarReview;