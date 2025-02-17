import { useState } from "react";
import NewsCard from "./NewsCard";
import LatestCars from "../similarcomponent/LatestCars";
import CarImage from "../../assets/images/new-car-collection.jpeg";
import PopulerCar from "../similarcomponent/PopulerCar";
import UpcomingCar from "../similarcomponent/UpcomingCar";
import { Pagination } from "antd";

const NewsAndStories = () => {
  const newsData = [
    {
      title: "Maharashtra Transport Department Makes HSRP Mandatory",
      description:
        "Maharashtra Transport Department has made it mandatory for any vehicle sold before April 2019 to be affixed with an HSRP.",
      image: CarImage,
      author: "Kartik",
      date: "Feb 08, 2025",
    },
    {
      title: "Car News That Mattered This Week (February 3-7)",
      description:
        "Apart from a partnership between new giant industries, this week also saw the price revisions of some models.",
      image: CarImage,
      author: "Yashika",
      date: "Feb 08, 2025",
    },
    {
      title: "Electric Vehicles: The Future of Transportation?",
      description:
        "With rising fuel prices and concerns about climate change, electric vehicles are becoming the preferred choice for many consumers.",
      image: CarImage,
      author: "Rohan",
      date: "Feb 05, 2025",
    },
    {
      title: "New SUV Model Launched with Cutting-Edge Features",
      description:
        "The latest SUV model promises advanced technology, comfort, and performance, setting a new benchmark in the industry.",
      image: CarImage,
      author: "Ananya",
      date: "Feb 04, 2025",
    },
    {
      title: "Car Prices Expected to Increase Next Month",
      description:
        "Due to rising material costs and supply chain issues, experts predict a hike in car prices starting next month.",
      image: CarImage,
      author: "Vikram",
      date: "Feb 02, 2025",
    },
    {
      title: "Best Budget Cars Under $20,000 in 2025",
      description:
        "Looking for an affordable yet feature-packed car? Here’s a list of the best budget-friendly cars under $20,000 this year.",
      image: CarImage,
      author: "Meera",
      date: "Jan 30, 2025",
    },
    {
      title: "New SUV Model Launched with Cutting-Edge Features",
      description:
        "The latest SUV model promises advanced technology, comfort, and performance, setting a new benchmark in the industry.",
      image: CarImage,
      author: "Ananya",
      date: "Feb 04, 2025",
    },
    {
      title: "Car Prices Expected to Increase Next Month",
      description:
        "Due to rising material costs and supply chain issues, experts predict a hike in car prices starting next month.",
      image: CarImage,
      author: "Vikram",
      date: "Feb 02, 2025",
    },
  ];

  const [search, setSearch] = useState("");
  const filteredNews = newsData.filter((news) =>
    news.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full lg:w-10/12 mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
      {/* Left Section (News) */}
      <div className="w-full lg:w-8/12">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 text-center lg:text-left">
          Car News Bangladesh - All Latest Car Information and Auto News
          Bangladesh
        </h1>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-md flex-grow w-full sm:w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-ButtonColor hover:bg-ButtonHover text-white px-16 py-2 rounded-md w-full sm:w-auto">
            Search
          </button>
        </div>

        {/* News Cards */}
        <div className="mt-6 space-y-4">
          {filteredNews.length > 0 ? (
            filteredNews.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </div>
        <div className="flex justify-center items-center w-full my-5">
          <Pagination
            defaultCurrent={1}
            total={100}
            pageSize={10}
            showSizeChanger
            responsive 
            className="p-2"
          />
        </div>
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

export default NewsAndStories;
