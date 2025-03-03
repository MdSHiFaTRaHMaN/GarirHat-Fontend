import { HeartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useAllVehicles } from "../../api/api";
import CarImage from "../../assets/images/UpcomingImage.jpg";
import { IoLocationSharp } from "react-icons/io5";
import LoadingWhile from "../../components/LoadingWhile";
import { Link, useParams, useLocation } from "react-router-dom";

const SearchResult = () => {
  const { selectedOption, selectBrand } = useParams();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const make = params.get("make");
  const model = params.get("model");
  const vehicle_condition = params.get("vehicle_condition");
  const start_price = params.get("start_price");
  const end_price = params.get("end_price");
  const body_type = params.get("body_type");


  const vehicleCondition = selectedOption !== 'all'? selectedOption: "";

  const filter = {
    make: make ? make : selectBrand,
    model,
    vehicle_condition: vehicle_condition? vehicle_condition: vehicleCondition,
    start_price,
    end_price,
    body_type
  };

  const { allVehicles, isLoading } = useAllVehicles(filter);

  // if (isError)
  //   return (
  //     <div className="text-center text-red-500">
  //       {error.message || "Something went wrong"}
  //     </div>
  //   );


  return (
    <div className="w-10/12 mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {selectBrand} <span className="text-gray-500">Car Models</span>
      </h2>
      {/* Car List */}
      <div className="grid grid-cols-2 gap-6">
        {isLoading ? (
          <LoadingWhile />
        ) : allVehicles.length > 0 ? (
          allVehicles.map((car, index) => (
            <Card
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              bodyStyle={{ padding: "1rem" }}
            >
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Image */}
                <img
                  src={car.thumbnail_image || CarImage}
                  alt={car.name}
                  className="w-full md:w-2/5 h-48 object-cover rounded-lg"
                />
                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold">
                    {car.year_of_manufacture} {car.make} {car.model}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {car.mileage} • {car.fuel_type} • {car.transmission}
                  </p>
                  <p className="text-lg text-gray-600 font-semibold">
                    {car.price}
                    {"TK"}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <IoLocationSharp /> {car.upzila},{car.district},
                    {car.division}
                  </p>
                  <Link to={`/car-details/${car.id}`}>
                    <Button className="bg-ButtonColor hover:!bg-ButtonHover !text-white font-semibold mt-4">
                      View Car Details
                    </Button>
                  </Link>
                </div>
                <HeartOutlined className="text-gray-500 text-xl cursor-pointer hover:text-red-500 transition flex justify-start" />
              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center">No cars available.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
