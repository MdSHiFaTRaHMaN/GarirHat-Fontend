import { useState } from "react";
import {
  ShareAltOutlined,
  MessageOutlined,
  ExclamationCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Divider, message } from "antd";
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
import MessangerModel from "../../components/MessangerModel";
import InterestedModel from "./InterestedModel";
import { useSingleVechile } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";

const CarDetails = () => {
  const { vehicleID } = useParams();
  const { singleVechile, isLoading } = useSingleVechile(vehicleID);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessangerModel, setIsMessangerModel] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);
  const [interestedModel, setInterestedModel] = useState(false);

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

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => message.success("Copied to clipboard!"))
      .catch(() => message.error("Failed to copy"));
  };
  if (isLoading) {
    return <LoadingWhile />;
  }

  return (
    <div className="bg-white">
      {/* {singleVechile.map((singleCar) => ( */}
      <div className=" w-full lg:w-11/12 mx-auto overflow-hidden flex gap-8 flex-col lg:flex-row p-2 lg:p-6">
        {/* Left Image Section */}
        <div className="lg:w-3/5">
          <Carousel
            arrows
            prevArrow={<CustomArrow type="prev" />}
            nextArrow={<CustomArrow type="next" />}
            infinite={false}
            autoplay={false}
            className="h-96"
          >
            {singleVechile.images.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Car Image ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <span
                  onClick={() => setIsModalOpen(true)}
                  className="absolute bottom-3 right-3 bg-white text-black font-semibold text-xs px-2 py-1 rounded flex items-center gap-1 cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <GrGallery />
                  {singleVechile.images.length} PHOTOS
                </span>
              </div>
            ))}
          </Carousel>
        </div>
        {/* Right Content Section */}
        <div className="w-full md:w-2/3 lg:w-2/5 p-6 flex flex-col justify-between bg-white border rounded transition-transform scale-y-105">
          {/* Car Info */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              {singleVechile.year_of_manufacture} {singleVechile.make}{" "}
              {singleVechile.model}
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              {singleVechile.mileage || "N/A"} kms •{" "}
              {singleVechile.fuel_type || "N/A"} •{" "}
              {singleVechile.transmission || "N/A"} •{" "}
              {singleVechile.vehicle_condition || "N/A"}
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mt-2 flex items-center">
              <TbCurrencyTaka className="mr-1" />
              {singleVechile.discount_price || "80 Lakh"}
            </h3>
            {/* <p className="text-gray-600 text-sm md:text-base mt-2">
              EMI starts @ ৳2,23,382/mo • New Car Price ৳1.06 Crore
            </p> */}
            <Divider dashed />
            <div className="flex items-center mt-2 text-gray-600">
              <FaMapMarkerAlt className="mr-2" />
              {singleVechile.upzila},{singleVechile.district},{" "}
              {singleVechile.division}
            </div>
          </div>

          {/* Button & Trending Section */}
          <div className="mt-4">
            <div className="flex w-full gap-2">
              <Link to="/vendor-info" className="w-full">
                <Button
                  type="primary"
                  className="w-full bg-ButtonColor hover:bg-ButtonHover text-white font-semibold py-5 text-lg"
                >
                  View Seller Details
                </Button>
              </Link>
              <Button
                onClick={() => setInterestedModel(true)}
                type="primary"
                className="w-full font-semibold py-5 text-lg"
              >
                Interested
              </Button>
            </div>
            <p className="text-gray-600 flex items-center mt-3 text-sm md:text-base">
              <FaBolt className="text-yellow-500 mr-2 text-lg" /> Trending Car!
              High chances of sale in next 6 days
            </p>
          </div>

          {/* Actions Section */}
          <div className="flex flex-wrap justify-between text-gray-500 text-sm mt-4">
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
            <span
              onClick={() => setIsMessangerModel(true)}
              className="flex items-center cursor-pointer hover:text-blue-500 transition"
            >
              <MessageOutlined className="mr-1 text-TextColor" /> Chat with
              Seller
            </span>
            <span className="flex items-center cursor-pointer hover:text-green-500 transition">
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
          <Features features={singleVechile.features}/>
          <Specifications singleVechile={singleVechile} />
          <EMICalculator />
          <CarReviews />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-5/12 space-y-6">
          <RecommendedUsedCars />
          <ResearchLinks />
          <SafetyNotice />
        </div>
      </div>

      {/* model  */}
      <GalloryModel
        handleImage={singleVechile.images}
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ReportAdModel
        isVisible={isReportModal}
        onClose={() => setIsReportModal(false)}
      />
      <MessangerModel
        isMessangerModel={isMessangerModel}
        onClose={() => setIsMessangerModel(false)}
      />
      <InterestedModel
        isVisible={interestedModel}
        onClose={() => setInterestedModel(false)}
        vechileId={singleVechile.id}
        vendorId={singleVechile.vendor_id}
      />
    </div>
  );
};

export default CarDetails;
