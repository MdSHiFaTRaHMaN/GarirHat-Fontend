import { Button, Card, Form, Input, message, Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API, usePartofRating, useSingleModel } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";

const UserReviewForm = () => {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  const { ratingModelID } = useParams();
  const { partofRating } = usePartofRating();
  const [loading, setLoading] = useState(false);
  const { singleModel, isLoading } = useSingleModel(ratingModelID);

  // Ant Form instance
  const [form] = Form.useForm();

  // Form state
  const [ratings, setRatings] = useState({});
  const [isAllRated, setIsAllRated] = useState(false);

  // Handle rating change
  const handleRateChange = (category, value) => {
    const updatedRatings = { ...ratings, [category]: value };
    setRatings(updatedRatings);

    // Check if all 6 ratings are given
    const allRated =
      Object.keys(updatedRatings).length === 6 &&
      Object.values(updatedRatings).every((val) => val > 0);

    setIsAllRated(allRated);
  };
  const totalRating = Object.values(ratings).reduce((sum, val) => sum + val, 0);
  const averageRating = Object.keys(ratings).length
    ? (totalRating / Object.keys(ratings).length).toFixed(1)
    : 0;

  // Handle form submit
  const onFinish = async (values) => {
    const payload = {
      model_id: Number(ratingModelID),
      title: values.reviewTitle,
      experience: values.reviewText,
      rating: parseFloat(averageRating),
      parts_rating: Object.keys(ratings).map((key, index) => ({
        parts_name_id: index + 1,
        parts_name_rating: ratings[key],
      })),
    };
    setLoading(true);
    try {
      setLoading(true);
      const response = await API.post("/rating/create", payload);
      console.log(response);
      if (response.status == 200) {
        message.success("Model add Successfully");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
      setLoading(false);
    }
  };

  if(isLoading){
    return <LoadingWhile />
  }
  return (
    <div className="flex flex-col items-center p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Rate & Review {singleModel.brand_name} {singleModel.model_name}
      </h2>

      {/* Rating Section */}
      <Card className="w-full mt-6 p-2 rounded">
        <div className="flex items-center space-x-4">
          <img
            src={singleModel.image}
            width={120}
            className="rounded"
            alt="Car"
          />
          <div>
            <p>Rate & Review</p>
            <h3 className="font-semibold text-xl text-gray-700">
              {singleModel.brand_name} {singleModel.model_name}
            </h3>
          </div>
        </div>
      </Card>

      {/* Form Start */}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="w-full mt-4"
      >
        <h3 className="text-xl font-semibold text-gray-800">
          Rate your experience
        </h3>

        {partofRating.map((category) => (
          <Form.Item
            key={category.name}
            name={category.name}
            label={
              <span className="font-medium text-gray-700">{category.name}</span>
            }
            rules={[{ required: true, message: "Please provide a rating!" }]}
            className="mt-2 flex flex-col md:flex-row md:items-center md:gap-6 w-full bg-gray-100 p-3 rounded-lg shadow-sm"
          >
            {/* <span className="font-medium text-gray-700">{category.name}</span> */}
            <Rate
              value={ratings[category.name] || 0}
              onChange={(value) => handleRateChange(category.name, value)}
              character={({ index = 0 }) => customIcons[index + 1]}
              className="text-2xl text-TextColor text-center flex justify-end"
            />
          </Form.Item>
        ))}

        {/* Review Text Area */}
        {isAllRated && (
          <>
            {/* Your Overall Rating */}
            <div className="p-7 bg-gray-100 my-4 rounded text-center shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700">
                Your overall rating:
              </h2>
              <h1 className="text-2xl font-bold text-yellow-600">
                {averageRating}/5
              </h1>
            </div>
            {/* Review Title */}
            <Form.Item
              name="reviewTitle"
              label="Review Title"
              rules={[
                {
                  required: true,
                  message: "Enter a catchy title for your review!",
                },
              ]}
            >
              <Input className="py-3" placeholder="Enter a catchy title for your review" />
            </Form.Item>
             {/* exprience  */}
            <Form.Item
              name="reviewText"
              label="Your Experience"
              rules={[
                { required: true, message: "Please share your experience!" },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Share the details of your experience"
              />
            </Form.Item>

            
            {/* Submit Button */}
            <Form.Item>
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                className={`w-full py-5 text-lg font-medium transition-all ${
                  isAllRated
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isAllRated}
              >
                Submit Review
              </Button>
            </Form.Item>
          </>
        )}
      </Form>
    </div>
  );
};

export default UserReviewForm;
