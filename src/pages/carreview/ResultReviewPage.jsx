import { Button, Card } from "antd";
import { useCarReviewList } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import UpcomingImg from "../../assets/images/UpcomingImage.jpg"

const ResultReviewPage = () => {
  const { selectModel } = useParams();
  const { carReviewList, isLoading } = useCarReviewList(selectModel);

  console.log(carReviewList);
  return (
    <div className="w-full lg:w-10/12 mx-auto my-7">
      <h1 className="text-xl font-semibold my-5">Search Result Show</h1>
      {/* show all car by model  */}
      <div className="grid grid-cols-2 gap-6">
        {isLoading ? (
          <LoadingWhile />
        ) : carReviewList.length > 0 ? (
          carReviewList.map((car, index) => (
            <Card
              key={index}
              className="rounded overflow-hidden shadow hover:shadow transition duration-300 bg-white"
              bodyStyle={{ padding: "1.5rem" }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Image Section */}
                <div className="relative w-full md:w-2/5">
                  <img
                    src={car.thumbnail_image || UpcomingImg}
                    alt={car.name}
                    className="w-full h-48 md:h-52 object-cover rounded-lg"
                  />
                  <span
                    className={`absolute top-2 left-2 px-3 py-1 text-xs font-bold uppercase rounded ${
                      car.vehicle_condition === "New"
                        ? "bg-green-500 text-white"
                        : "bg-ButtonHover text-white"
                    }`}
                  >
                    {car.vehicle_condition}
                  </span>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {car.year_of_manufacture} {car.make} {car.model}
                  </h2>
                  <p className="text-gray-500">
                    {car.mileage}kms • {car.fuel_type} • {car.transmission}
                  </p>

                  {/* Price */}
                  <p className="text-xl font-semibold text-gray-800 flex items-center">
                    <FaBangladeshiTakaSign className="text-green-600 text-2xl mr-1" />
                    {car.discount_price} TK
                  </p>

                  {/* Location */}
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <IoLocationSharp className="text-red-500" />
                    {car.upzila}, {car.division}
                  </p>

                  {/* Bottom Section */}
                  <div className="flex justify-between items-center mt-4">
                    <Link to={`/car-details/${car.id}`}>
                      <Button className="bg-ButtonColor hover:!bg-ButtonHover !text-white font-semibold px-4 py-4 rounded transition">
                        View Car Details
                      </Button>
                    </Link>

                    <div className="flex items-center">
                      <FaStar className="text-TextColor text-2xl mr-2" />
                      <h3 className="text-lg font-semibold">
                        {car.model_average_rating}/5
                      </h3>
                      <p className="text-gray-500 text-sm ml-2">
                        ({car.model_total_rating} Reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-700 text-3xl">No cars available.</p>
        )}
      </div>
    </div>
  );
};

export default ResultReviewPage;
