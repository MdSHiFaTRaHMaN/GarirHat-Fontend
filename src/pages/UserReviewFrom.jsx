import { Button, Card, Input, Rate } from "antd";
import { FaStar } from "react-icons/fa";
import { FrownOutlined, MehOutlined, SmileOutlined, SearchOutlined } from "@ant-design/icons";
import { CiEdit } from "react-icons/ci";
import { useState, useEffect } from "react";
import CarImage from "../assets/images/car-d22.jpg";

const initialCategories = ["Mileage", "Maintenance Cost", "Safety"];
const additionalCategories = ["Features and Styling", "Comfort", "Performance"];

const UserReviewForm = () => {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  const [isEditing, setIsEditing] = useState(false);
  const [ratings, setRatings] = useState({
    Mileage: 0,
    "Maintenance Cost": 0,
    Safety: 0,
    "Features and Styling": 0,
    Comfort: 0,
    Performance: 0,
  });

  const [showAdditional, setShowAdditional] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [title, setTitle] = useState("");
  const [averageRating, setAverageRating] = useState(0); // State for average rating

  // Validation Conditions
  const isValidReview = reviewText.trim().split(/\s+/).length >= 1;
  const isValidTitle = title.trim().length >= 1;
  const isFormValid = isValidReview && isValidTitle;

  // Check if all 6 categories are rated
  const allRated = Object.values(ratings).every((r) => r > 0);

  // Handle rating change
  const handleRateChange = (category, value) => {
    setRatings((prev) => {
      const updatedRatings = { ...prev, [category]: value };

      // If initial 3 ratings are completed, show the additional 3
      const allInitialRated = Object.values(updatedRatings)
        .slice(0, 3)
        .every((r) => r > 0);

      if (allInitialRated) {
        setShowAdditional(true);
      }

      return updatedRatings;
    });
  };

  // Calculate average rating when ratings change
  useEffect(() => {
    const ratedValues = Object.values(ratings).filter((r) => r > 0);
    if (ratedValues.length > 0) {
      const avg = ratedValues.reduce((sum, value) => sum + value, 0) / ratedValues.length;
      setAverageRating(avg.toFixed(1)); // Round to 1 decimal place
    } else {
      setAverageRating(0);
    }
  }, [ratings]);

  return (
    <div className="flex flex-col items-center p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Rate & Review Skoda Kylag and Win Amazon Vouchers worth ₹1000
      </h2>

      {/* Rating Section */}
      <Card className="w-full mt-6 shadow-md p-2 rounded-lg">
        {!isEditing && (
          <div className="flex items-center space-x-4">
            <img src={CarImage} width={120} className="rounded" alt="Car" />
            <div>
              <p>Rate & Review</p>
              <h3 className="font-semibold text-xl text-gray-700">Skoda Kylag</h3>
              <CiEdit
                className="text-green-500 text-2xl cursor-pointer"
                onClick={() => setIsEditing(true)}
              />
            </div>
          </div>
        )}

        {/* Search Section */}
        {isEditing && (
          <div className="flex gap-4">
            <Input
              size="large"
              placeholder="Select Your Car"
              prefix={<SearchOutlined />}
              className="border-none"
            />
          </div>
        )}
      </Card>

      {/* Rating Categories */}
      <div className="mt-3 w-full">
        <h3 className="text-xl font-semibold text-gray-800">Rate your experience</h3>

        {/* First 3 Rating Fields */}
        {initialCategories.map((category) => (
          <div
            key={category}
            className="mt-2 flex flex-col md:flex-row md:items-center md:gap-6 w-full bg-gray-100 p-3 rounded-lg shadow-sm"
          >
            <span className="font-medium text-gray-700 w-40">{category}</span>
            <Rate
              value={ratings[category]}
              onChange={(value) => handleRateChange(category, value)}
              character={({ index = 0 }) => customIcons[index + 1]}
              className="text-center text-2xl"
            />
          </div>
        ))}

        {/* Additional 3 Ratings - Only shown when first 3 are completed */}
        {showAdditional &&
          additionalCategories.map((category) => (
            <div
              key={category}
              className="mt-2 flex flex-col md:flex-row md:items-center md:gap-6 w-full bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <span className="font-medium text-gray-700 w-40">{category}</span>
              <Rate
                value={ratings[category]}
                onChange={(value) => handleRateChange(category, value)}
                character={({ index = 0 }) => customIcons[index + 1]}
                className="text-center text-2xl"
              />
            </div>
          ))}
      </div>

      {/* Show Overall Rating Section Only If All Ratings Are Given */}
      {allRated && (
        <div className="w-full mx-auto bg-white">
          {/* Your Overall Rating */}
          <div className="p-7 bg-gray-100 my-4 rounded text-center shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">Your overall rating:</h2>
            <h1 className="text-2xl font-bold text-yellow-600">{averageRating}</h1>
          </div>

          {/* Review Text Area */}
          <div className="w-full">
            <label className="block text-lg font-semibold text-gray-700">Your Experience</label>
            <Input.TextArea
              rows={4}
              placeholder="Share the details of your experience"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* Title Input */}
          <div className="w-full mt-4">
            <label className="block text-lg font-semibold text-gray-700">Review Title</label>
            <Input
              placeholder="Enter a catchy title for your review"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <Button
              type="primary"
              className={`w-full py-5 rounded-lg text-lg font-medium transition-all ${
                isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Submit Review
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserReviewForm;
