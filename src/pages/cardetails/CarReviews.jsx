import { useEffect, useState } from "react";
import { Button, Rate } from "antd";
import { FaStar } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";



const categories = [
  { label: "ALL", count: 47 },
  { label: "MILEAGE", count: 8 },
  { label: "PERFORMANCE", count: 23 },
  { label: "SAFETY", count: 7 },
  { label: "LOOKS", count: 14 },
  { label: "COMFORT", count: 26 },
];

const CarReviews = ({ ratings, avaregeRating }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [showAllReviews, setShowAllReviews] = useState(false);
  //  show 2 rewiew
  const visibleReviews = showAllReviews ? ratings : ratings.slice(0, 2);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <div id="review" className="flex justify-center items-center bg-gray-50 border rounded">
      <div className="bg-white p-6 w-full">
        {/* Header Section */}
        <h2 className="text-2xl font-bold text-gray-900">
          New Car User Reviews & Rating
        </h2>
        <div className="flex items-center mt-2">
          <FaStar className="text-TextColor text-3xl mr-2" />
          <h3 className="text-3xl font-semibold">{avaregeRating.toFixed(1)}/5</h3>
          <p className="text-gray-500 ml-2">Overall Rating</p>
        </div>
        <p className="text-gray-500 text-sm mt-1">Based on {ratings.length} Reviews</p>

        {/* Category Tabs */}
        {/* <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                activeTab === cat.label
                  ? "bg-ButtonColor text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div> */}

        {/* Reviews Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">
          {ratings.length} Rating and Reviews
          </h3>

          {/* Sorting */}
          <div className="flex justify-end items-center text-gray-500 text-sm mt-2">
            <FiFilter className="mr-1" />
            Latest
          </div>

          {/* Reviews List */}
          {visibleReviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-4 rounded-lg mt-4">
              <div className="flex items-center space-x-3">
                <img
                  src={review.profile_pic}
                  alt="Profile Photos"
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                />
                <div>
                  <p className="font-semibold">{review.name} wrote a review</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>

              <div className="flex items-center mt-2">
                <Rate
                  disabled
                  defaultValue={review.rating}
                  allowHalf
                  className="!text-TextColor"
                />
                <span className="text-gray-700 font-semibold ml-2">
                  {review.rating}
                </span>
              </div>

              <h4 className="font-bold mt-2">{review.title}</h4>
              <p className="text-gray-600 text-sm">
                {review.experience}
              </p>
            </div>
          ))}
        </div>

        {/* View More Reviews */}
        {!showAllReviews && (
          <div className="mt-6 text-center">
            <Button
              type="text"
              className="text-TextColor font-semibold"
              onClick={() => setShowAllReviews(true)}
            >
              View More Reviews
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarReviews;
