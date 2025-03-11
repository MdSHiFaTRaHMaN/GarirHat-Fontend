import {
  EditFilled,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, Modal, Form, Input, Rate, message } from "antd";
import { useEffect, useState } from "react";
import { API, usePartofRating } from "../../api/api";

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const UpdateReview = ({
  reviewId,
  reviewExp,
  reviewTitle,
  reviewAvarage,
  reviewParts,
  refetch,
}) => {
  const { partofRating } = usePartofRating();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    if (reviewParts && reviewParts.length > 0) {
      const defaultRatings = reviewParts.reduce((acc, part) => {
        acc[part.parts_name_id] = part.parts_name_rating;
        return acc;
      }, {});
      setRatings(defaultRatings);
    }
  }, [reviewParts]);

  // Handle rating change
  const handleRateChange = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };
  // Show Modal & Set Form Defaults
  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue({
      title: reviewTitle,
      experience: reviewExp,
    });
  };

  // Close Modal
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setRatings({});
  };

  // Calculate overall rating
  const totalRating = Object.values(ratings).reduce((sum, val) => sum + val, 0);
  const averageRating = Object.keys(ratings).length
    ? (totalRating / Object.keys(ratings).length).toFixed(1)
    : 0;

  // Handle form submission
  const onFinish = async (values) => {
    if (Object.keys(ratings).length !== partofRating.length) {
      message.error("Please rate all categories.");
      return;
    }

    const payload = {
      title: values.title,
      experience: values.experience,
      rating: parseFloat(averageRating),
      parts_rating: partofRating.map((part) => ({
        parts_name_id: part.id,
        parts_name_rating: ratings[part.id] || 0,
      })),
    };
    console.log(payload);

    try {
      setLoading(true);
      const response = await API.put(`/rating/update/${reviewId}`, payload);
      if (response.status === 200) {
        message.success("Review updated successfully!");
        refetch();
        handleCancel();
      }
    } catch (error) {
      console.log("error", error);
      message.error("Failed to update review.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 onClick={showModal}>
        <EditFilled /> Edit Review
      </h1>

      <Modal
        title="Update Review"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <h3 className="text-xl font-semibold text-gray-800">
            Rate your experience
          </h3>

          {partofRating.map((category) => (
            <div
              key={category.parts_name_id}
              className="mt-2 flex flex-col md:flex-row md:items-center md:gap-6 w-full bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <span className="font-medium text-gray-700">{category.name}</span>
              <Rate
                value={ratings[category.id] || 0}
                onChange={(value) => handleRateChange(category.id, value)}
                character={({ index = 0 }) => customIcons[index + 1]}
                className="text-2xl text-TextColor text-center flex justify-end"
              />
            </div>
          ))}

          {/* Display Overall Rating */}
          <div className="p-7 bg-gray-100 my-4 rounded text-center shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your overall rating:
            </h2>
            <h1 className="text-2xl font-bold text-yellow-600">
              {averageRating || reviewAvarage}/5
            </h1>
          </div>

          {/* Review Title */}
          <Form.Item
            name="title"
            label="Review Title"
            rules={[
              {
                required: true,
                message: "Enter a catchy title for your review!",
              },
            ]}
          >
            <Input
              className="py-3"
              placeholder="Enter a catchy title for your review"
            />
          </Form.Item>

          {/* Experience Review */}
          <Form.Item
            name="experience"
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
            <Button loading={loading} type="primary" htmlType="submit">
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateReview;
