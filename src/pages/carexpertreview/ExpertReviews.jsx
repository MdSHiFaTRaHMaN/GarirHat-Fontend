import { Select, Button, Pagination } from "antd";
import { useState } from "react";
import LatestCars from "../similarcomponent/LatestCars";
import PopulerCar from "../similarcomponent/PopulerCar";
import UpcomingCar from "../similarcomponent/UpcomingCar";
import CarImage from "../../assets/images/carshadow.jpg";

const { Option } = Select;

const ExpertReviews = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const reviews = [
    {
      id: 1,
      title: "Volkswagen Virtus GT Review: Enthusiast Family Guys Assemble!",
      description:
        "With perpetual advancements in tech and the EV space, does the Virtus’ GT badge still have enough precedence for the enthusiast?...",
      image: CarImage,
      author: "Ujjawal",
      date: "Feb 05, 2025",
    },
    {
      id: 2,
      title: "BMW iX1 LWB First Drive Review: A Family-friendly BMW",
      description:
        "The iX1 LWB at its price point gives you the bragging rights of owning a BMW, but it takes away a few important things from the experience...",
      image: CarImage,
      author: "Ansh",
      date: "Feb 03, 2025",
    },
    {
      id: 3,
      title: "BMW iX1 LWB First Drive Review: A Family-friendly BMW",
      description:
        "The iX1 LWB at its price point gives you the bragging rights of owning a BMW, but it takes away a few important things from the experience...",
      image: CarImage,
      author: "Ansh",
      date: "Feb 03, 2025",
    },
    {
      id: 4,
      title: "BMW iX1 LWB First Drive Review: A Family-friendly BMW",
      description:
        "The iX1 LWB at its price point gives you the bragging rights of owning a BMW, but it takes away a few important things from the experience...",
      image: CarImage,
      author: "Ansh",
      date: "Feb 03, 2025",
    },
    {
      id: 5,
      title: "BMW iX1 LWB First Drive Review: A Family-friendly BMW",
      description:
        "The iX1 LWB at its price point gives you the bragging rights of owning a BMW, but it takes away a few important things from the experience...",
      image: CarImage,
      author: "Ansh",
      date: "Feb 03, 2025",
    },
    {
      id: 6,
      title: "BMW iX1 LWB First Drive Review: A Family-friendly BMW",
      description:
        "The iX1 LWB at its price point gives you the bragging rights of owning a BMW, but it takes away a few important things from the experience...",
      image: CarImage,
      author: "Ansh",
      date: "Feb 03, 2025",
    },
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-8/12">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Expert Car Reviews
        </h2>

        {/* Filter & Search Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          {/* Brand Selection */}
          <Select
            placeholder="Select Brand"
            className="w-full sm:w-1/3 h-[45px]"
            onChange={(value) => setSelectedBrand(value)}
          >
            <Option value="volkswagen">Volkswagen</Option>
            <Option value="bmw">BMW</Option>
            <Option value="audi">Audi</Option>
          </Select>

          {/* Model Selection */}
          <Select
            placeholder="Select Model"
            className="w-full sm:w-1/3 h-[45px]"
            onChange={(value) => setSelectedModel(value)}
          >
            <Option value="virtus">Virtus</Option>
            <Option value="ix1">iX1</Option>
            <Option value="a4">Audi A4</Option>
          </Select>

          {/* Search Button */}
          <button
            className="text-white font-semibold bg-ButtonColor hover:bg-ButtonHover px-6 py-[10px] rounded-md"
          >
            Search by Road Test
          </button>
        </div>

        {/* Reviews Section */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={review.image}
                alt={review.title}
                className="w-full h-40 sm:h-32 object-cover rounded-md"
              />

              {/* Review Content */}
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{review.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {review.description}
                  </p>
                </div>

                {/* Author & Date */}
                <div className="flex items-center mt-4 text-gray-500 text-sm">
                  <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full mr-3">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p>{review.author}</p>
                    <p>{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          align="center"
          defaultCurrent={1}
          total={100}
          className="my-5"
        />
      </div>
      {/* Right Section (Latest Cars) */}
      <div className="w-full lg:w-4/12">
        <LatestCars />
        <PopulerCar />
        <UpcomingCar />
      </div>
    </div>
  );
};

export default ExpertReviews;
