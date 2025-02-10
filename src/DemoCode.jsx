import { Button, Card, Input, Rate } from "antd";
import { FaStar } from "react-icons/fa";
import { FrownOutlined, MehOutlined, SmileOutlined, SearchOutlined } from "@ant-design/icons";
import CarImage from "../assets/images/car-d22.jpg";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";

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
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [title, setTitle] = useState("");

  // Validation Conditions
  const isValidReview = reviewText.trim().split(/\s+/).length >= 30;
  const isValidTitle = title.trim().length >= 10;
  const isFormValid = isValidReview && isValidTitle;

  // Check if all 6 categories are rated
  const allRated = Object.values(ratings).every((r) => r > 0);

  const handleRateChange = (category, value) => {
    setRatings((prev) => ({ ...prev, [category]: value }));

    // If initial 3 ratings are completed, show the additional 3
    const allInitialRated = Object.values({ ...ratings, [category]: value })
      .slice(0, 3)
      .every((r) => r > 0);

    if (allInitialRated) {
      setShowAdditional(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Rate & Review Skoda Kylag and Win Amazon Vouchers worth ₹1000
      </h2>

      {/* Rating Section */}
      <Card className="w-full mt-6 shadow-md p-2 rounded-lg">
        {/* Car View Section */}
        {!isEditing && (
          <div className="flex items-center space-x-4">
            <img src={CarImage} width={120} className="rounded" />
            <div>
              <p>Rate & Review</p>
              <h3 className="font-semibold text-xl text-gray-700">Skoda Kylag</h3>
              <CiEdit className="text-green-500 text-2xl cursor-pointer" onClick={() => setIsEditing(true)} />
            </div>
          </div>
        )}

        {/* Search Section */}
        {isEditing && (
          <div className="flex gap-4">
            <Input size="large" placeholder="Select Your Car" prefix={<SearchOutlined />} className="border-none" />
          </div>
        )}
      </Card>

      {/* Rating Categories */}
      <div className="mt-3 w-full">
        <h3 className="text-xl font-semibold text-gray-800">Rate your experience</h3>

        {/* First 3 Rating Fields */}
        {initialCategories.map((category) => (
          <div key={category} className="mt-2 flex flex-col md:flex-row md:items-center md:gap-6 w-full bg-gray-100 p-3 rounded-lg shadow-sm">
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
            <div key={category} className="mt-2 flex flex-col md:flex-row md:items-center md:gap-6 w-full bg-gray-100 p-3 rounded-lg shadow-sm">
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

      {/* Only show the input field text section if all 6 ratings are filled */}
      {allRated && (
        <div className="flex flex-col items-center p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg mt-4">
          {/* Review Text Area */}
          <div className="w-full">
            <Input.TextArea
              rows={4}
              placeholder="Share the details of your experience"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 30 words</p>
          </div>

          {/* AI/ChatGPT Warning */}
          <p className="text-xs text-gray-500 mt-1 px-2 text-center">
            Reviews written from AI/ChatGPT or duplicate content copied from other sources will not be accepted.
          </p>

          {/* Title Input */}
          <div className="w-full mt-3">
            <Input
              placeholder="Title of your Review"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 10 Characters</p>
          </div>

          {/* Submit Button */}
          <Button
            type="primary"
            className={`w-full mt-4 py-2 rounded-md ${
              isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Submit Review
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserReviewForm;
