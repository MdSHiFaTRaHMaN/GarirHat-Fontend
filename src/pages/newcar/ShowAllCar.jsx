import { Checkbox, Divider, Select, Tabs } from "antd";
import CarImage from "../../assets/images/car-d3.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { HeartOutlined } from "@ant-design/icons";
import { TbCurrencyTaka } from "react-icons/tb";

const ShowAllCar = () => {
  // Generate 20 car objects dynamically
  const cars = Array.from({ length: 21 }, (_, index) => ({
    id: index + 1,
    name: `2024 Mercedes-Benz ${index + 1}`,
    price: "3.75 Crore",
    oldprice: "$3.95 Crore",
    discount: "$20,00 Lakh",
    kms: `${10_000 + index * 500} kms`,
    fuel: index % 2 === 0 ? "Petrol" : "Diesel",
    transmission: "Automatic",
    location: "Ballygunge RS, Kolkata",
    img: CarImage,
  }));
  const items = [
    {
      key: "1",
      label: "Under 3 Lakh",
    },
    {
      key: "2",
      label: "Under 5 Lakh",
    },
    {
      key: "3",
      label: "SUV Cars",
    },
    {
      key: "4",
      label: "Sedan Cars",
    },
    {
      key: "5",
      label: "Luxury Car",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">
          Buying your dream car? Check Now!
        </h1>
        <p className="text-sm my-2">
          GarirHat brings you the latest new cars in Bangladesh for 2025 with updated
          prices. There are around 264 new car models available across 39
          brands. Popular brands like Maruti, Tata, Kia, Toyota and Hyundai
          offer budget-friendly and fuel-efficient cars, making them top choices
          for buyers.
        </p>
      </div>
      <div className="flex justify-between">
        <Tabs defaultActiveKey="1" items={items} className="static top-0" />
        <Select
          defaultValue="Relevance"
          style={{
            width: 165,
          }}
          suffixIcon={<FiFilter style={{ color: "red", fontSize: "16px" }} />}
          options={[
            {
              value: "relevance",
              label: "Relevance",
            },
            {
              value: "distance",
              label: "Distance",
            },
            {
              value: "added-time",
              label: "Added Time",
            },
            {
              value: "l-to-h",
              label: "Price - Low to High",
            },
            {
              value: "h to-l",
              label: "Price - High to Low",
            },
            {
              value: "K-l-to-h",
              label: "Kms - Low to High",
            },
            {
              value: "new-old",
              label: "Model - Newest to Oldest",
            },
          ]}
        />
      </div>
      <div className="w-full p-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg w-80 bg-white shadow-lg"
          >
            <img
              src={car.img} // Replace with actual image URL
              alt="Car"
              className="rounded-t-lg w-full"
            />
            <div className="mt-3 px-4 pb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <HeartOutlined />
              </div>

              <p className="text-gray-600 text-sm">
                {car.kms} • Petrol • Manual
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xl font-bold text-black flex items-center">
                <TbCurrencyTaka className="text-2xl font-extrabold"/>   {car.price}
                </span>
                <Checkbox>Compare</Checkbox>
              </div>
              {/* <p className="text-gray-400 line-through text-sm">
                  {car.oldprice}
                </p>
                <p className="text-green-600 text-sm">Save {car.discount}</p> */}
              <Link to="/car-details">
                <button className="text-red-600 font-semibold mt-2 flex items-center">
                  View Seller Details <FaChevronCircleRight className="ml-1" />
                </button>
              </Link>
              <Divider
                variant="dashed"
                style={{
                  borderColor: "#4B5567",
                }}
                dashed
              >
              </Divider>
              <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
                <IoLocationOutline />
                {car.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllCar;
