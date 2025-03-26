import { DeleteOutlined, StarFilled } from "@ant-design/icons";
import { Avatar, Button, message } from "antd";
import { API, useMyReviews, useUserProfile } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useState } from "react";
import UpdateReview from "./UpdateReview";

const MyReviews = () => {
  const { myReviews, isLoading, refetch } = useMyReviews();
  const { userProfile } = useUserProfile();
  const [loadingStates, setLoadingStates] = useState({});

  const handleDelete = async (id) => {
    try {
      setLoadingStates((prev) => ({ ...prev, [id]: true }));
      await API.delete(`/rating/delete/${id}`);
      message.success("Your Review deleted successfully!");
      refetch();
    } catch (error) {
      console.error("Error deleting review:", error);
      message.error("Failed to delete the review. Please try again.");
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg p-2 lg:p-6 mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg lg:text-2xl font-semibold mb-6 text-gray-800 flex flex-wrap items-center gap-1 mt-5">
          <VscPreview /> My Reviews
        </h2>
        <Link to="/car-review">
          <Button className="bg-ButtonColor hover:!bg-ButtonHover !text-white font-semibold">
            Add Review
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          <LoadingWhile />
        ) : (
          myReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col md:flex-row items-start border-b pb-4 gap-6"
            >
              {/* Profile Image */}
              <Avatar src={userProfile.profile_pic} size={60} />

              {/* Review Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">
                  {review.name}
                </h3>
                <p className="text-gray-800 text-base">{userProfile.name}</p>
                <p className="text-gray-500 text-sm">
                  📌 Model -{" "}
                  <span className="font-semibold">{review.model_name}</span>
                </p>

                {/* Rating */}
                <div className="flex items-center mt-1">
                  <StarFilled className="text-TextColor mr-1" />
                  <span className="text-gray-700">
                    {parseFloat(review.average_rating).toFixed(1)}/5
                  </span>
                </div>

                {/* Review Title */}
                <p className="text-gray-800 font-medium mt-2">
                  {review.my_rating.title}
                </p>
              </div>

              {/* Experience */}
              <div className="flex-1">
                <p className="text-gray-600 mt-1">
                  {review.my_rating.experience}
                </p>
              </div>

              <div className="grid grid-cols-1">
                {/* Date */}
                <span className="text-gray-600 text-sm mt-2 md:mt-0">
                  <span className="text-black font-semibold">
                    📅 Post of Time :
                  </span>{" "}
                  {review.my_rating.created_at.split("T")[0]}
                </span>
                <Button
                  // onClick={() => handleDelete(review.my_rating.id)}
                  className="mt-2 text-TextColor font-semibold hover:!text-ButtonColor"
                >
                  <UpdateReview
                    reviewId={review.my_rating.id}
                    reviewExp={review.my_rating.experience}
                    reviewTitle={review.my_rating.title}
                    reviewAvarage={review.average_rating}
                    refetch={refetch}
                  />
                </Button>
                <Button
                  loading={loadingStates[review.my_rating.id] || false}
                  onClick={() => handleDelete(review.my_rating.id)}
                  className="mt-5 text-red-700 font-semibold hover:!text-red-600"
                >
                  <DeleteOutlined />
                  Delete Review
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyReviews;
