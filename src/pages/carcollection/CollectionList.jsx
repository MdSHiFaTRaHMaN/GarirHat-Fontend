import { Card } from "antd";
import { CarOutlined } from "@ant-design/icons";
import NewImage from "../../assets/images/new-car-collection.jpeg";
import { useState } from "react";

const carCollections = [
  {
    id: 1,
    title: "These Are The Top 10 Luxury Cars That Should Be On Your Bucket List",
    description:
      "Who said first-class airline experience is reserved for the air? One should dream big, they say...",
    image: NewImage,
    carsCount: 10,
    category: "Luxury",
  },
  {
    id: 2,
    title: "Top 10 Petrol Hatchback In India",
    description:
      "Looking for a petrol hatchback under Rs 10 lakh? Here's a compilation of the best ones...",
    image: NewImage,
    carsCount: 10,
    category: "First Car",
  },
  {
    id: 3,
    title: "Best Luxury SUVs of 2024",
    description:
      "Find the top-rated luxury SUVs that provide both comfort and performance...",
    image: NewImage,
    carsCount: 8,
    category: "Luxury",
  },
  {
    id: 4,
    title: "Affordable First Cars for New Drivers",
    description:
      "Here are the best budget-friendly first cars for beginner drivers...",
    image: NewImage,
    carsCount: 12,
    category: "First Car",
  },
];

const categories = [
  "All",
  "First Car",
  "Luxury",
  "Sedan",
  "Hatchback",
  "Safety",
  "Parents",
  "SUV",
  "Driving Pleasure",
];

const CollectionList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter car collections dynamically
  const filteredCars =
    activeCategory === "All"
      ? carCollections
      : carCollections.filter((car) => car.category === activeCategory);

  return (
    <div className=" mx-auto px-2 py-6">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-left">
        Assorted Collection of Cars
      </h1>

      {/* Dynamic Filter Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm rounded transition duration-300 ${
              activeCategory === category
                ? "bg-ButtonColor text-white"
                : "bg-gray-100 hover:bg-ButtonHover hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Car List */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <Card
              key={car.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
              bodyStyle={{ padding: "1rem" }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Image */}
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                />
                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-lg md:text-xl font-semibold">{car.title}</h2>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    {car.description}
                  </p>
                  <div className="mt-3 flex items-center text-gray-500">
                    <CarOutlined className="mr-2 text-lg" />
                    {car.carsCount} Cars Featured
                  </div>
                </div>
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

export default CollectionList;
