import { useEffect, useState } from "react";
import {
  ShareAltOutlined,
  MessageOutlined,
  ExclamationCircleOutlined,
  LeftOutlined,
  RightOutlined,
  HeartOutlined,
  HeartFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Divider, message } from "antd";
import UpcomingImg from "../../assets/images/UpcomingImage.jpg";
import { FaMapMarkerAlt, FaBolt, FaOrcid } from "react-icons/fa";
import CarOverview from "./CarOverview";
import RecommendedUsedCars from "./RecommendedUsedCars";
import EMICalculator from "./EMICalculator";
import CarReviews from "./CarReviews";
import ResearchLinks from "./ResearchLinks";
import Features from "./Features";
import { Link, useParams } from "react-router-dom";
import GalloryModel from "./GalleryModel";
import { GrGallery } from "react-icons/gr";
import Specifications from "./Specifications";
import { TbCurrencyTaka } from "react-icons/tb";
import ReportAdModel from "./ReportAdModel";
import SafetyNotice from "./SafetyNotice";
import InterestedModel from "./InterestedModel";
import {
  API,
  useSingleVechile,
  useUserProfile,
  useWishListVechile,
} from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";
import MessengerModal from "./MessangerModel";
import { useQueryClient } from "@tanstack/react-query";
import { FaFacebook } from "react-icons/fa6";
import LoginModal from "../../components/LoginModel";
import SoldOutImage from "../../assets/images/soldout.png";

const CarDetails = () => {
  const { vehicleID } = useParams();
  const queryClient = useQueryClient();
  const { singleVechile, isLoading } = useSingleVechile(vehicleID);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessangerModel, setIsMessangerModel] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);
  const [interestedModel, setInterestedModel] = useState(false);
  const [likedCars, setLikedCars] = useState(false);
  const { userProfile } = useUserProfile();
  const [loading, setLoading] = useState(false);
  const user_id = userProfile.id;
  const vehicle_name = singleVechile.make + " " + singleVechile.model;
  const { wishListVechile } = useWishListVechile(user_id);

  console.log("singleVechile", singleVechile);

  useEffect(() => {
    if (wishListVechile) {
      const wishlistData = wishListVechile.reduce((acc, car) => {
        acc[car.vehicle_id] = true;
        return acc;
      }, {});
      setLikedCars(wishlistData);
    }
  }, [wishListVechile]);

  const CustomArrow = ({ type, onClick }) => {
    const isPrev = type === "prev";
    return (
      <div
        onClick={onClick}
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          isPrev ? "left-0" : "right-0"
        } bg-gray-200 rounded shadow-md px-1.5 py-3 cursor-pointer hover:shadow-lg z-10`}
      >
        {isPrev ? <LeftOutlined /> : <RightOutlined />}
      </div>
    );
  };

  const toggleLike = async (carId) => {
    const user_id = userProfile.id;
    const vehicle_id = carId;

    const wishList = { user_id, vehicle_id };

    try {
      setLoading(true);
      const response = await API.post("/wishlist", wishList);
      queryClient.invalidateQueries(["wishListVechile", user_id]);
      if (response.status == 201) {
        message.success("Wishlist Added Successfully");
      }
      if (response.status == 200) {
        message.success("Wishlist Remove Successfully");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
      setLoading(false);
    }

    setLikedCars((prev) => ({
      ...prev,
      [carId]: !prev[carId],
    }));
  };

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => message.success("Copied to clipboard!"))
      .catch(() => message.error("Failed to copy"));
  };

  const handleShare = (id) => {
    console.log("id", id);
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: `${window.location.origin}/car-details/${id}`,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Failed to copy:", err));
    }
  };

  const navigateToLogin = () => {
    message.warning("Please login to chat with the seller");
    setIsModalOpen(true);
  };

  const handleFacebookShare = () => {
    const ogTitle = `${singleVechile.year_of_manufacture} ${singleVechile.make} ${singleVechile.model} | Bhalogari`;
    const ogDescription =
      "GarirHat is a leading car buying and selling website in Bangladesh. Check out this amazing car!";
    const ogImage = singleVechile.images[0];
    const url = `${window.location.origin}/car-details/${singleVechile.id}`;

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(ogTitle)}&description=${encodeURIComponent(
      ogDescription
    )}&picture=${encodeURIComponent(ogImage)}`;
    window.open(facebookShareUrl, "_blank", "width=600,height=400");
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  if (isLoading) {
    return <LoadingWhile />;
  }

  return (
    <div className="bg-white">
      <div className=" w-full lg:w-11/12 mx-auto overflow-hidden flex gap-2.5 flex-col lg:flex-row p-2 lg:p-6">
        {/* Left Image Section */}
        {/* // singleVechile.status  */}
        <div className="lg:w-3/5">
          {singleVechile.status === "active" ||
          singleVechile.status === "Active" ||
          singleVechile.status === "delete" ||
          singleVechile.status === "Delete" ? (
            <Carousel
              arrows
              prevArrow={<CustomArrow type="prev" />}
              nextArrow={<CustomArrow type="next" />}
              infinite={true}
              autoplay={false}
              className=" h-full lg:h-96 w-[96%]"
            >
              {singleVechile.images.map((src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src || UpcomingImg}
                    alt={`Car Image ${index + 1}`}
                    className="w-full h-full lg:h-[400px] object-cover rounded-lg"
                  />
                  <span
                    onClick={() => setIsGalleryOpen(true)}
                    className="absolute bottom-3 right-3 bg-white text-black font-semibold text-xs px-2 py-1 rounded flex items-center gap-1 cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <GrGallery />
                    {index + 1} photo of {singleVechile.images?.length || "N/A"}
                  </span>
                </div>
              ))}
            </Carousel>
          ) : singleVechile.status === "Sold Out" ? (
            <img
              src={SoldOutImage}
              alt="Sold Out"
              className="w-[96%] h-full lg:h-[400px] object-cover rounded-lg bg-gray-200"
            />
          ) : (
            <img
              src={UpcomingImg}
              alt="Upcoming"
              className="w-[96%] h-full lg:h-[400px] object-cover rounded-lg"
            />
          )}
        </div>
        {/* Right Content Section */}
        <div className="w-full md:w-full lg:w-2/5 mt-2.5 p-6 flex flex-col justify-between bg-white rounded shadow-md transition-transform scale-y-105">
          {/* Car Info */}
          <div className="flex justify-end gap-3 items-center">
            <button className="bg-green-200 px-1 py-0.5 rounded text-sm ">
              Certified
            </button>
            <div
              onClick={() => toggleLike(singleVechile.id)}
              className="cursor-pointer"
            >
              {loading ? (
                <div className="text-xl bg-white p-1 rounded-full animate-spin">
                  <LoadingOutlined />
                </div>
              ) : likedCars[singleVechile.id] ? (
                <HeartFilled className="text-TextColor text-xl bg-white p-1 rounded-full" />
              ) : (
                <HeartOutlined className="text-TextColor text-xl bg-white p-1 rounded-full" />
              )}
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl">
              {singleVechile.year_of_manufacture} {singleVechile.make}{" "}
              {singleVechile.model}
            </h2>
            <p className="text-gray-600 text-sm">
              {singleVechile.mileage || "N/A"} kms •{" "}
              {singleVechile.fuel_type || "N/A"} •{" "}
              {singleVechile.transmission || "N/A"} •{" "}
              {singleVechile.vehicle_condition || "N/A"} • Loan Available
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mt-2 flex items-center">
              <TbCurrencyTaka className="mr-1" />
              {singleVechile.price
                ? formatPrice(singleVechile.price)
                : "N/A"}{" "}
              TK
            </h3>
            <Divider dashed />
            <div className="flex items-center mt-2 text-sm text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-TextColor" />
              {singleVechile.upzila}, {singleVechile.division}
            </div>
          </div>

          {/* Button & Trending Section */}
          <div className="mt-4">
            <div className="flex w-full gap-2">
              <Link
                to={`/vendor-info/${singleVechile.busn_id}`}
                className="w-full"
              >
                <Button
                  type="primary"
                  className="w-full bg-ButtonColor hover:bg-ButtonHover text-white font-semibold py-5 text-base"
                >
                  View Seller Details
                </Button>
              </Link>
              <Button
                onClick={() => setInterestedModel(true)}
                className="w-full font-semibold py-5 text-base bg-gray-50"
              >
                Appointment
              </Button>
            </div>
            <p className="text-gray-600 flex items-center mt-3 text-sm md:text-base">
              <FaBolt className="text-yellow-500 mr-2 text-sm" /> Trending Car!
              High chances of sale in next 6 days
            </p>
          </div>

          {/* Actions Section */}
          <div className="flex flex-wrap justify-between text-gray-500 text-sm mt-6 py-1">
            <span
              title="Copy"
              className="flex items-center cursor-pointer hover:text-red-500 transition"
              onClick={() => handleCopy(singleVechile.vehicle_code)}
            >
              <FaOrcid className="mr-1 text-TextColor" />{" "}
              {singleVechile.vehicle_code}
            </span>
            <span
              onClick={() => setIsReportModal(true)}
              className="flex items-center cursor-pointer hover:text-red-500 transition"
            >
              <ExclamationCircleOutlined className="mr-1 text-TextColor" />{" "}
              Report Ad
            </span>

            {user_id ? (
              <span
                onClick={() => setIsMessangerModel(true)}
                className="flex items-center cursor-pointer hover:text-blue-500 transition"
              >
                <MessageOutlined className="mr-1 text-TextColor" /> Chat
              </span>
            ) : (
              <span
                onClick={navigateToLogin}
                className="flex items-center cursor-pointer hover:text-blue-500 transition"
              >
                <MessageOutlined className="mr-1 text-TextColor" /> Chat
              </span>
            )}

            <span
              onClick={handleFacebookShare}
              className="flex items-center cursor-pointer hover:text-blue-500 transition"
            >
              <FaFacebook className="mr-1 text-TextColor" /> Post
            </span>
            <span
              onClick={() => handleShare(singleVechile.id)}
              className="flex items-center justify-end cursor-pointer hover:text-green-500 transition"
            >
              <ShareAltOutlined className="mr-1 text-TextColor" /> Share
            </span>
          </div>
        </div>
      </div>
      {/* ))} */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[89%] mx-auto gap-6 px-4 lg:px-0">
        {/* Left Side Content */}
        <div className="w-full lg:w-7/12 space-y-6">
          <CarOverview singleVechile={singleVechile} />
          <Specifications singleVechile={singleVechile} />
          <Features features={singleVechile.features} />
          <EMICalculator price={singleVechile.price} />
          <CarReviews
            ratings={singleVechile.ratings}
            avaregeRating={singleVechile.model_average_rating}
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-5/12 space-y-6">
          <RecommendedUsedCars brandName={singleVechile.make} />
          <ResearchLinks />
          <SafetyNotice />
        </div>
      </div>

      {/* model  */}
      <GalloryModel
        handleImage={singleVechile.images}
        isVisible={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
      <ReportAdModel
        isVisible={isReportModal}
        onClose={() => setIsReportModal(false)}
      />

      {/* <PrivateRoute> */}
      <MessengerModal
        isMessangerModel={isMessangerModel}
        onClose={() => setIsMessangerModel(false)}
        vechileId={singleVechile.id}
        vendorId={singleVechile.busn_id}
      />
      {/* </PrivateRoute> */}

      <InterestedModel
        isVisible={interestedModel}
        onClose={() => setInterestedModel(false)}
        vechileId={singleVechile.id}
        vendorId={singleVechile.busn_id}
        vehicle_name={vehicle_name}
      />

      <LoginModal
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CarDetails;
