import { Card } from "antd";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useUpcomingCarList } from "../../api/api";

const UpcomingCar = () => {
  const { upcomingCarList } = useUpcomingCarList();

  return (
    <Card className="w-full rounded-lg shadow-lg border p-4 my-7">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Upcoming Cars</h2>

      {/* Car List */}
      <div className="space-y-4">
        {upcomingCarList?.slice(0, 6).map((car, index) => (
          <Link
            key={index}
            to={`/car-details/${car.id}`}
            className="flex items-center space-x-3"
          >
            {/* Car Image */}
            <div className="relative">
              <img
                src={car.thumbnail_image}
                alt={car.name}
                className="w-[115px] h-12 rounded-md object-cover"
              />
              {/* New Variant Tag */}
              {car.tag && (
                <span className="absolute -top-2 -left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                  {car.tag}
                </span>
              )}
            </div>

            {/* Car Info */}
            <div>
              <p className="text-sm font-medium">
                {" "}
                {car.year_of_manufacture} {car.make} {car.model}
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <TbCurrencyTaka />
                {car.price} TK
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-4">
        <Link
          to="/advanced-search"
          className="text-TextColor text-sm font-semibold"
        >
          View All Latest Cars →
        </Link>
      </div>
    </Card>
  );
};

export default UpcomingCar;
