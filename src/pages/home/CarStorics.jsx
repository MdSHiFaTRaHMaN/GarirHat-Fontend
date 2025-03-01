import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarImage from "../../assets/images/car-d2.jpg";
import { Link } from "react-router-dom";

const Cars = [
  {
    name: "Hyundai Alcazar Adventure vs Tata Safari Adventure",
    image: CarImage,
    link: "#",
  },
  {
    name: "Hyundai Creta And Alcazar Adventure Editions Launched",
    image: CarImage,
    link: "#",
  },
  {
    name: "Maruti Jimny Or Mahindra Thar: Which One Makes You Adventure-Ready?",
    image: CarImage,
    link: "#",
  },
  {
    name: "Here's How Spacious Honda Elevate's Boot Is Compared",
    image: CarImage,
    link: "#",
  },
  {
    name: "Here's How Fuel-efficient The Citroen C3 Aircross Is",
    image: CarImage,
    link: "#",
  },
  {
    name: "Here's How Fuel-efficient The Citroen C3 Aircross Is",
    image: CarImage,
    link: "#",
  },
  {
    name: "Here's How Fuel-efficient The Citroen C3 Aircross Is",
    image: CarImage,
    link: "#",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
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

const CarStories = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto p-4 lg:p-0">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Car Visual Stories
      </h2>
      <Carousel responsive={responsive} arrows>
        {Cars.map((car, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden m-2"
          >
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${car.image})` }}
            ></div>
            <div className="p-4 flex flex-col justify-between h-32">
              <p className="text-sm font-medium text-gray-700 mb-4">
                {car.name}
              </p>
              <a
                href={car.link}
                className="text-TextColor font-semibold flex items-center space-x-1"
              >
                <span>Read More &rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="text-center mt-6">
        <Link
          to="/news-and-stories"
          className="inline-block px-6 py-2 text-sm font-semibold text-white bg-ButtonColor rounded hover:bg-ButtonHover transition-all"
        >
          View All Car Visual Stories &rarr;
        </Link>
      </div>
    </div>
  );
};

export default CarStories;
