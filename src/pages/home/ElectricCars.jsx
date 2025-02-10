import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carimage from "../../assets/images/car-d1.jpg";
import Carimage2 from "../../assets/images/car-d22.jpg";
import Carimage3 from "../../assets/images/car-d33.jpg";
import Carimage4 from "../../assets/images/car-d4.jpg";
import { FaCircleChevronRight } from "react-icons/fa6";

const cars = [
  {
    name: "Kia Syros",
    price: "₹ 9 - 17.80 Lakh",
    image: Carimage,
    model: "Hatchback",
  },
  {
    name: "Skoda Kylq",
    price: "₹ 7.89 - 14.40 Lakh",
    image: Carimage2,
    model: "Sedan",
  },
  {
    name: "Mahindra Scorpio N",
    price: "₹ 13.99 - 24.69 Lakh",
    image: Carimage3,
    model: "MUV",
  },
  {
    name: "Toyota Fortuner",
    price: "₹ 33.78 - 51.94 Lakh",
    image: Carimage4,
    model: "Luxury",
  },
  {
    name: "Toyota Fortuner",
    price: "₹ 33.78 - 51.94 Lakh",
    image: Carimage3,
    model: "SUV",
  },
  {
    name: "Hyundai i20",
    price: "₹ 6.99 - 11.88 Lakh",
    image: Carimage2,
    model: "Hatchback",
  },
  {
    name: "Maruti Suzuki Ciaz",
    price: "₹ 8.89 - 12.99 Lakh",
    image: Carimage,
    model: "Sedan",
  },
  {
    name: "BMW X5",
    price: "₹ 80.90 - 97.90 Lakh",
    image: Carimage4,
    model: "Luxury",
  },
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

const ElectricCars = () => {
  return (
    <div className="p-5 w-full lg:w-10/12 mx-auto shadow-lg rounded-lg m-7">
      <h2 className="text-2xl font-bold mb-4">Electric cars</h2>
      <Carousel responsive={responsive}>
        {cars.map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 m-2 ">
            <img
              src={car.image}
              alt={car.name}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
            <p className="text-gray-600 mb-4 text-start">{car.price}</p>
            <button className="w-full mb-2 border border-ButtonColor hover:bg-ButtonHover p-2 text-ButtonColor hover:text-white font-semibold rounded-lg">
              View Complete Offers
            </button>
          </div>
        ))}
      </Carousel>

      <a
        href="#"
        className=" text-orange-500 hover:underline flex items-center gap-2 my-3 font-bold"
      >
        View All Cars <FaCircleChevronRight />
      </a>
    </div>
  );
};

export default ElectricCars;
