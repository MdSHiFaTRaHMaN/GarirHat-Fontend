import { Card } from "antd";
import CarImage from "../../assets/images/carshadow.jpg";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const UpcomingCar = () => {
  const latestCarsData = [
    {
      name: "Rolls-Royce Ghost Series II",
      price: "৳ 8.95 - 10.52 Cr*",
      image: CarImage,
      tag: null,
    },
    {
      name: "Mahindra BE 6",
      price: "18.90 - 26.90 Lakh*",
      image: CarImage,
      tag: null,
    },
    {
      name: "Mahindra XEV 9e",
      price: "21.90 - 30.50 Lakh",
      image: CarImage,
      tag: null,
    },
    {
      name: "Kia Syros",
      price: "9 - 17.80 Lakh*",
      image: CarImage,
      tag: null,
    },
    {
      name: "Honda City",
      price: "11.82 - 16.55 Lakh*",
      image: CarImage,
      tag: null,
    },
  ];
  return (
    <Card className="w-full rounded-lg shadow-lg border p-4 my-7">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Upcoming Cars</h2>

      {/* Car List */}
      <div className="space-y-4">
        {latestCarsData.map((car, index) => (
          <div key={index} className="flex items-center space-x-3">
            {/* Car Image */}
            <div className="relative">
              <img
                src={car.image}
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
              <p className="text-sm font-medium">{car.name}</p>
              <p className="text-sm text-gray-600 flex items-center"><TbCurrencyTaka />{car.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-4">
        <Link to="/used-car" className="text-TextColor text-sm font-semibold">
          View All Latest Cars →
        </Link>
      </div>
    </Card>
  );
};

export default UpcomingCar;
