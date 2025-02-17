import { Card, Button, Divider } from "antd";
import CarImage from "../assets/images/bdcar.jpg";
import { FaBangladeshiTakaSign, FaShare } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiShare } from "react-icons/bi";
import { ShareAltOutlined } from "@ant-design/icons";

const cars = [
  { name: "Nexaro Proxima 4X", price: "65,00,000 Taka", img: CarImage },
  { name: "Mustang Sport Car", price: "50,49,000 Taka", img: CarImage },
  { name: "Ampera Helix GT", price: "68,00,000 Taka", img: CarImage },
  { name: "Audi E-Tron GT RB", price: "70,00,000 Taka", img: CarImage },
  { name: "Arction Aurora", price: "53,00,000 Taka", img: CarImage },
  { name: "Velocavo Stelaris", price: "55,00,000 Taka", img: CarImage },
  { name: "Velocavo Stelaris", price: "55,00,000 Taka", img: CarImage },
  { name: "Velocavo Stelaris", price: "55,00,000 Taka", img: CarImage },
];

const FavoritesCar = () => {
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
  return (
    <div className="py-10 w-full lg:w-10/12 mx-auto p-4">
      <h2 className="text-3xl font-bold uppercase">Your Favorite Cars List</h2>
      <p className="text-gray-600 max-w-2xl mt-2">
        Explore your handpicked collection of dream cars. Save your favorites
        and make your perfect choice with top-notch performance and luxury.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-2 lg:px-0.5">
        {cars.map((car, index) => (
          <Card
            key={index}
            hoverable
            cover={
              <div className="relative">
                <img alt={car.name} src={car.img} className="rounded-t-lg" />
                <RiDeleteBin6Line className="absolute top-1 right-1 text-red-500 text-2xl bg-white p-1 rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-300" />
              </div>
            }
            className="rounded-lg shadow-md overflow-hidden bg-white"
          >
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {car.name}
              </h3>
              <p className="text-lg font-bold text-orange-500 mt-2 flex items-center">
                <FaBangladeshiTakaSign className="text-black" /> {car.price}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                10000 kms • Petrol • Manual
              </p>
              <Divider />
              <p className="flex items-center">
                <IoLocationOutline /> Manda, Mugdha, Dhaka
              </p>
              <div className="mt-4 flex justify-between gap-2 items-center">
                <Button className="bg-ButtonColor border-none !importent hover:!bg-ButtonHover !text-white p-2 w-full">
                  View Details
                </Button>
                <ShareAltOutlined onClick={handleShare} className="text-xl" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FavoritesCar;
