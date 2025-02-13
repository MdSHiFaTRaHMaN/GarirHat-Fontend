import { Card, Collapse } from "antd";
import { HeartOutlined, EnvironmentOutlined } from "@ant-design/icons";
import CarImage from "../../assets/images/car-d22.jpg";
import { FaBangladeshiTakaSign, FaShare } from "react-icons/fa6";

const RecommendedUsedCars = () => {
   // Share url section
   const handleShare = () => {
    const url = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: url,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Failed to copy:", err));
    }
  };
  const cars = [
    {
      id: 1,
      image: CarImage,
      name: "2023 BMW X7 xDrive",
      kms: "4,000 kms",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "95 Lakh",
      location: "Ambli, Ahmedabad",
    },
    {
      id: 2,
      image: CarImage,
      name: "2021 Volvo XC 90 B6",
      kms: "2,000 kms",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "75 Lakh",
      location: "Ahmedabad",
    },
  ];

  const items = [
    {
      key: "1",
      label: <span className="text-xl font-semibold">More BMW Cars</span>,
      children: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cars.map((car) => (
            <Card
              key={car.id}
              hoverable
              className="rounded-lg shadow-sm border p-2"
              cover={
                <div className="relative">
                  <img
                    alt={car.name}
                    src={car.image}
                    className="rounded-t-lg"
                  />
                  <HeartOutlined className="absolute top-1 right-1 text-red-500 text-xl bg-white p-1 rounded-full shadow-md cursor-pointer" />
                </div>
              }
            >
              <div className="p-2">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm">
                  {car.kms} • {car.fuel} • {car.transmission}
                </p>
                <p className="text-lg font-bold flex items-center">
                  <FaBangladeshiTakaSign />
                  {car.price}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <a
                    href="#"
                    className="text-red-500 font-semibold flex items-center"
                  >
                    View Seller Details ➤
                  </a>
                </div>
                <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                  <span>
                    <EnvironmentOutlined className="mr-1" /> {car.location}
                  </span>
                  <FaShare
                    onClick={handleShare}
                    title="Share"
                    className="bg-black text-2xl text-white p-1.5 rounded-full"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: <span className="text-xl font-semibold">More SUV Cars</span>,
      children: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cars.map((car) => (
            <Card
              key={car.id}
              hoverable
              className="rounded-lg shadow-sm border p-2"
              cover={
                <div className="relative">
                  <img
                    alt={car.name}
                    src={car.image}
                    className="rounded-t-lg"
                  />
                  <HeartOutlined className="absolute top-1 right-1 text-red-500 text-xl bg-white p-1 rounded-full shadow-md cursor-pointer" />
                </div>
              }
            >
              <div className="p-2">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm">
                  {car.kms} • {car.fuel} • {car.transmission}
                </p>
                <p className="text-lg font-bold flex items-center">
                  <FaBangladeshiTakaSign />
                  {car.price}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <a
                    href="#"
                    className="text-red-500 font-semibold flex items-center"
                  >
                    View Seller Details ➤
                  </a>
                </div>
                <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                  <span>
                    <EnvironmentOutlined className="mr-1" /> {car.location}
                  </span>
                  <FaShare
                    onClick={handleShare}
                    title="Share"
                    className="bg-black text-2xl text-white p-1.5 rounded-full"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ),
    },
  ];

 
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold">Recommended Used Cars</h2>
      <p className="text-gray-500 text-sm mb-4">
        Showing 5 more cars you might like
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cars.map((car) => (
          <Card
            key={car.id}
            hoverable
            className="rounded-lg shadow-sm border p-2"
            cover={
              <div className="relative">
                <img alt={car.name} src={car.image} className="rounded-t-lg" />
                <HeartOutlined className="absolute top-1 right-1 text-red-500 text-xl bg-white p-1 rounded-full shadow-md cursor-pointer" />
              </div>
            }
          >
            <div className="p-2">
              <h3 className="font-semibold text-lg">{car.name}</h3>
              <p className="text-gray-500 text-sm">
                {car.kms} • {car.fuel} • {car.transmission}
              </p>
              <p className="text-lg font-bold flex items-center">
                <FaBangladeshiTakaSign />
                {car.price}
              </p>
              <div className="flex justify-between items-center mt-2">
                <a
                  href="#overview"
                  className="text-red-500 font-semibold flex items-center"
                >
                  View Seller Details ➤
                </a>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                <span>
                  <EnvironmentOutlined className="mr-1" /> {car.location}
                </span>
                <FaShare
                  onClick={handleShare}
                  title="Share"
                  className="bg-black text-2xl text-white p-1.5 rounded-full"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <Collapse
          expandIconPosition="end"
          defaultActiveKey={["2"]}
          items={items}
          className="border-none bg-white"
        />
      </div>
    </div>
  );
};

export default RecommendedUsedCars;
