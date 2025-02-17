import { Button, Card, Input, Rate } from "antd";
import { FaCar, FaStar } from "react-icons/fa";
import { FrownOutlined, MehOutlined, SearchOutlined, SmileOutlined } from "@ant-design/icons";
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
  const [ratings, setRatings] = useState({ Mileage: 0, "Maintenance Cost": 0, Safety: 0 });
  const [showAdditional, setShowAdditional] = useState(false);

  const handleRateChange = (category, value) => {
    setRatings((prev) => ({ ...prev, [category]: value }));

    // Check if all initial categories are rated
    const allRated = Object.values({ ...ratings, [category]: value }).every((rating) => rating > 0);
    if (allRated) {
      setShowAdditional(true);
    }
  };

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [title, setTitle] = useState("");

  // Validation Conditions
  const isValidReview = reviewText.trim().split(/\s+/).length >= 30;
  const isValidTitle = title.trim().length >= 10;
  const isFormValid = isValidReview && isValidTitle && rating > 0;


  return (
    <div className="flex flex-col items-center p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg my-3">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Rate & Review Skoda Kylag and Win Amazon Vouchers worth ৳1000
      </h2>

      {/* rating section  */}

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

      <div className="mt-3 w-full">
        <h3 className="text-xl font-semibold text-gray-800">Rate your experience</h3>
           {/* first 3 rate  */}
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
          {/* second 3 rate  */}
        {showAdditional &&
          additionalCategories.map((category) => (
            <div key={category} className="mt-2 flex flex-col md:flex-row md:items-center md:gap-6 w-full bg-gray-100 p-3 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700 w-40">{category}</span>
              <Rate defaultValue={0} character={({ index = 0 }) => customIcons[index + 1]} className="text-center text-2xl" />
            </div>
          ))}
      </div>
      
      <div className="flex flex-col items-center p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      {/* Rating Section */}
      <Card className="w-full p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">Your overall rating:</h3>
          <CiEdit className="text-gray-500 text-xl cursor-pointer" />
        </div>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500 text-2xl" />
          <span className="text-2xl font-bold text-gray-700 ml-2">{rating.toFixed(1)}</span>
        </div>
        <Rate allowHalf value={rating} onChange={setRating} className="mt-2" />
      </Card>

      {/* Review Text Area */}
      <div className="w-full mt-4">
        <Input.TextArea
          rows={4}
          placeholder="Share the details of your experience"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>

      {/* Title Input */}
      <div className="w-full mt-3">
        <Input
          placeholder="Title of your Review"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
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
    </div>
  );
};

export default UserReviewForm;
