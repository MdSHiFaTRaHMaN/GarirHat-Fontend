import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useUpcomingCarList } from "../../api/api";

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

const UpcomingCar = () => {
  const { upcomingCarList } = useUpcomingCarList();
  return (
    <div className="p-5 w-full lg:w-10/12 mx-auto shadow-lg rounded-lg m-7">
      <h2 className="text-2xl font-bold mb-4">Upcoming cars</h2>
      <Carousel responsive={responsive}>
        {upcomingCarList.map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 m-2 ">
            <img
              src={car.thumbnail_image}
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
        ))}
      </Carousel>
      <div className="text-center mt-6">
        <Link
          to="/car-collection"
          className="inline-block px-6 py-2 text-sm font-semibold text-white bg-ButtonColor rounded hover:bg-ButtonHover transition-all"
        >
          View All Cars &rarr;
        </Link>
      </div>
    </div>
  );
};

export default UpcomingCar;
