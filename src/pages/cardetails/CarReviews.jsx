import { useState } from "react";
import { Button, Rate } from "antd";
import { FaStar } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

const reviewsData = [
  {
    id: 1,
    name: "Swagat",
    date: "24 Jan 2025",
    rating: 4.5,
    title: "Best In Segment",
    review:
      "Best in class. Best of the best performance SUV. Must suggest if anyone looking car under 1cr. In term of comfort it is slightly 4.5/5 star...",
  },
  {
    id: 2,
    name: "Rahul",
    date: "22 Jan 2025",
    rating: 4.0,
    title: "Amazing Car",
    review:
      "I really love the performance and design. It is the best in its category. Would recommend it to anyone who loves power and comfort...",
  },
  {
    id: 3,
    name: "Amit",
    date: "20 Jan 2025",
    rating: 4.8,
    title: "Worth Every Penny",
    review:
      "Excellent car with great features. The ride quality is smooth and powerful. Best purchase decision I have made...",
  },
];

const categories = [
  { label: "ALL", count: 47 },
  { label: "MILEAGE", count: 8 },
  { label: "PERFORMANCE", count: 23 },
  { label: "SAFETY", count: 7 },
  { label: "LOOKS", count: 14 },
  { label: "COMFORT", count: 26 },
];

const CarReviews = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [showAllReviews, setShowAllReviews] = useState(false);

  // প্রথমে ১টি রিভিউ দেখানো হবে, এরপর showAllReviews স্টেট true হলে সব দেখাবে
  const visibleReviews = showAllReviews ? reviewsData : reviewsData.slice(0, 1);

  return (
    <div className="flex justify-center items-center bg-gray-50 border rounded-lg">
      <div className="bg-white p-6 w-full">
        {/* Header Section */}
        <h2 className="text-2xl font-bold text-gray-900">New Car User Reviews & Rating</h2>
        <div className="flex items-center mt-2">
          <FaStar className="text-orange-500 text-3xl mr-2" />
          <h3 className="text-3xl font-semibold">4.2</h3>
          <p className="text-gray-500 ml-2">Overall Rating</p>
        </div>
        <p className="text-gray-500 text-sm mt-1">Based on 47 Reviews</p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                activeTab === cat.label ? "bg-black text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">47 Rating and Reviews</h3>

          {/* Sorting */}
          <div className="flex justify-end items-center text-gray-500 text-sm mt-2">
            <FiFilter className="mr-1" />
            Latest
          </div>

          {/* Reviews List */}
          {visibleReviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-4 rounded-lg mt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-semibold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{review.name} wrote a review</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>

              <div className="flex items-center mt-2">
                <Rate disabled defaultValue={review.rating} allowHalf />
                <span className="text-gray-700 font-semibold ml-2">{review.rating}</span>
              </div>

              <h4 className="font-bold mt-2">{review.title}</h4>
              <p className="text-gray-600 text-sm">{review.review} <span className="text-blue-500">Read More</span></p>

              {/* Helpful Buttons */}
              <div className="mt-3 text-gray-500 text-sm">
                Is this review helpful?{" "}
                <Button size="small" className="ml-2 border-gray-400">
                  Yes
                </Button>
                <Button size="small" className="ml-2 border-gray-400">
                  No
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews */}
        {!showAllReviews && (
          <div className="mt-6 text-center">
            <Button
              type="text"
              className="text-orange-500 font-semibold"
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
