import { Card, Collapse } from "antd";
import { HeartOutlined, EnvironmentOutlined } from "@ant-design/icons";
import CarImage from "../../assets/images/car-d22.jpg";

const RecommendedUsedCars = () => {
  const cars = [
    {
      id: 1,
      image: CarImage,
      name: "2023 BMW X7 xDrive 40i",
      kms: "49,000 kms",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "₹95 Lakh",
      location: "Ambli, Ahmedabad",
    },
    {
      id: 2,
      image: CarImage,
      name: "2021 Volvo XC 90 B6 Ultimate",
      kms: "20,000 kms",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "₹75 Lakh",
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
                <img alt={car.name} src={car.image} className="rounded-t-lg" />
              }
            >
              <div className="p-2">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm">
                  {car.kms} • {car.fuel} • {car.transmission}
                </p>
                <p className="text-lg font-bold">{car.price}</p>
                <div className="flex justify-between items-center mt-2">
                  <a
                    href="#"
                    className="text-red-500 font-semibold flex items-center"
                  >
                    View Seller Details ➤
                  </a>
                  <HeartOutlined className="text-gray-500 text-lg" />
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <EnvironmentOutlined className="mr-1" /> {car.location}
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
                <img alt={car.name} src={car.image} className="rounded-t-lg" />
              }
            >
              <div className="p-2">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm">
                  {car.kms} • {car.fuel} • {car.transmission}
                </p>
                <p className="text-lg font-bold">{car.price}</p>
                <div className="flex justify-between items-center mt-2">
                  <a
                    href="#"
                    className="text-red-500 font-semibold flex items-center"
                  >
                    View Seller Details ➤
                  </a>
                  <HeartOutlined className="text-gray-500 text-lg" />
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <EnvironmentOutlined className="mr-1" /> {car.location}
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
              <img alt={car.name} src={car.image} className="rounded-t-lg" />
            }
          >
            <div className="p-2">
              <h3 className="font-semibold text-lg">{car.name}</h3>
              <p className="text-gray-500 text-sm">
                {car.kms} • {car.fuel} • {car.transmission}
              </p>
              <p className="text-lg font-bold">{car.price}</p>
              <div className="flex justify-between items-center mt-2">
                <a
                  href="#"
                  className="text-red-500 font-semibold flex items-center"
                >
                  View Seller Details ➤
                </a>
                <HeartOutlined className="text-gray-500 text-lg" />
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <EnvironmentOutlined className="mr-1" /> {car.location}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <Collapse expandIconPosition="end" defaultActiveKey={['2']} items={items} className="border-none bg-white" />
      </div>
    </div>
  );
};

export default RecommendedUsedCars;
