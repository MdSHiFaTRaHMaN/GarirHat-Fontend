import { HeartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useSearchCarList } from "../../api/api";
import Navbar from "../../components/Navbar";
import CarImage from "../../assets/images/UpcomingImage.jpg";
import { IoLocationSharp } from "react-icons/io5";
import LoadingWhile from "../../components/LoadingWhile";

const SearchResult = () => {
  const searchBrand = localStorage.getItem("SearchBrand");
  const { searchCarList, refetch, isLoading } = useSearchCarList(searchBrand);

  return (
    <div className="w-10/12 mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {searchBrand} <span className="text-gray-500">Car Models</span>
      </h2>
      {/* Car List */}
      <div className="grid grid-cols-2 gap-6">
        {isLoading ? (
          <LoadingWhile />
        ) : searchCarList.length > 0 ? (
          searchCarList.map((car, index) => (
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
                    {car.discount_price}
                    {"TK"}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <IoLocationSharp /> {car.upzila},{car.district},
                    {car.division}
                  </p>
                  <div className="mt-4">
                    <Button className="bg-ButtonColor hover:!bg-ButtonHover !text-white font-semibold">
                      View Car Details
                    </Button>
                  </div>
                </div>
                <HeartOutlined className="text-gray-500 text-xl cursor-pointer hover:text-red-500 transition flex justify-start" />
              </div>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center">No cars available.</p>
        )}
      </div>
      <div className="hidden">
        <Navbar refetch={refetch} />
      </div>
    </div>
  );
};

export default SearchResult;
