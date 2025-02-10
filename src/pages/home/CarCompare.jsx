import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Car1 from "../../assets/images/car-d1.jpg";
import Car2 from "../../assets/images/car-d33.jpg";
const Comparisons = [
  {
    car1: {
      name: "Hyryder",
      brand: "Toyota",
      price: "₹11.14 - 20.19 Lakh",
      image: Car1,
    },
    car2: {
      name: "Grand Vitara",
      brand: "Maruti",
      price: "₹11.19 - 20.09 Lakh",
      image: Car2,
    },
    link: "#",
    label: "Urban Cruiser Hyryder vs Grand Vitara",
  },
  {
    car1: {
      name: "Rumion",
      brand: "Toyota",
      price: "₹10.44 - 13.73 Lakh",
      image: Car1,
    },
    car2: {
      name: "Ertiga",
      brand: "Maruti",
      price: "₹8.69 - 13.03 Lakh",
      image: Car2,
    },
    link: "#",
    label: "Rumion vs Ertiga",
  },
  {
    car1: {
      name: "FRONX",
      brand: "Maruti",
      price: "₹7.52 - 13.04 Lakh",
      image: Car1,
    },
    car2: {
      name: "Taisor",
      brand: "Toyota",
      price: "₹7.74 - 13.04 Lakh",
      image: Car2,
    },
    link: "#",
    label: "FRONX vs Taisor",
  },
  {
    car1: {
      name: "FRONX",
      brand: "Maruti",
      price: "₹7.52 - 13.04 Lakh",
      image: Car1,
    },
    car2: {
      name: "Taisor",
      brand: "Toyota",
      price: "₹7.74 - 13.04 Lakh",
      image: Car2,
    },
    link: "#",
    label: "FRONX vs Taisor",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarCompare = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto p-4 lg:p-0">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Compare to buy the right car
      </h2>
      <Carousel responsive={responsive} arrows>
        {Comparisons.map((comparison, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden m-2"
          >
            <div className="flex items-center justify-between p-4">
              <div className="w-1/2 text-center">
                <img
                  src={comparison.car1.image}
                  alt={comparison.car1.name}
                  className="w-full h-auto object-cover"
                />
                <h4 className="text-sm font-semibold text-gray-700 mt-2">
                  {comparison.car1.brand}
                </h4>
                <p className="text-sm text-gray-600">{comparison.car1.name}</p>
                <p className="text-sm text-gray-500">{comparison.car1.price}</p>
              </div>
              <div className="text-center font-semibold text-white text-xs bg-black rounded-full px-1 py-0.5 ml-[41.5%] mb-[42px] absolute">
                VS
              </div>
              <div className="w-1/2 text-center">
                <img
                  src={comparison.car2.image}
                  alt={comparison.car2.name}
                  className="w-full h-auto object-cover "
                />
                <h4 className="text-sm font-semibold text-gray-700 mt-2">
                  {comparison.car2.brand}
                </h4>
                <p className="text-sm text-gray-600">{comparison.car2.name}</p>
                <p className="text-sm text-gray-500">{comparison.car2.price}</p>
              </div>
            </div>
            <a
              href={comparison.link}
              className="block text-center py-2 bg-ButtonColor text-white text-sm font-semibold hover:bg-ButtonHover transition-all"
            >
              {comparison.label}
            </a>
          </div>
        ))}
      </Carousel>
      <div className="text-center m-6">
        <a
          href="/all-car-comparisons"
          className="inline-block px-6 py-2  text-sm font-semibold text-white bg-ButtonColor rounded hover:bg-ButtonHover transition-all"
        >
          View All Car Comparisons &rarr;
        </a>
      </div>
    </div>
  );
};

export default CarCompare;
