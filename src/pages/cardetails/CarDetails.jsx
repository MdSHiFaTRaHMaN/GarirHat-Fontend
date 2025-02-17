import { useEffect, useState } from "react";
import {
  HeartOutlined,
  ShareAltOutlined,
  MessageOutlined,
  ExclamationCircleOutlined,
  LeftOutlined,
  RightOutlined,
  HomeOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Carousel, Divider } from "antd";
import { FaMapMarkerAlt, FaBolt } from "react-icons/fa";
import Car1 from "../../assets/images/car-d1.jpg";
import Car2 from "../../assets/images/car-d22.jpg";
import Car3 from "../../assets/images/car-d33.jpg";
import Car4 from "../../assets/images/car-d4.jpg";
import CarOverview from "./CarOverview";
import RecommendedUsedCars from "./RecommendedUsedCars";
import AddonService from "./AddonService";
import EMICalculator from "./EMICalculator";
import CarReviews from "./CarReviews";
import ResearchLinks from "./ResearchLinks";
import Features from "./Features";
import { Link } from "react-router-dom";
import GalloryModel from "./GalleryModel";
import { GrGallery } from "react-icons/gr";
import Specifications from "./Specifications";
import { TbCurrencyTaka } from "react-icons/tb";
import ReportAdModel from "./ReportAdModel";
import SafetyNotice from "./SafetyNotice";

const CarDetails = () => {
  const images = [Car1, Car2, Car3, Car4];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);

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

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 200);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      <Breadcrumb
        className="ml-5 lg:ml-20 mt-4"
        items={[
          {
            title: (
              <Link to="/">
                <HomeOutlined />
              </Link>
            ),
          },
          {
            title: (
              <>
                <CarOutlined />
                <span className="font-semibold">Used Car</span>
              </>
            ),
          },
          {
            title: (
              <span className="font-semibold">2024 BMW X5 xDrive4i xLine</span>
            ),
          },
        ]}
      />
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
            {images.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Car Image ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <span
                  onClick={() => setIsModalOpen(true)}
                  className="absolute bottom-3 right-3 bg-white text-black font-semibold text-xs px-2 py-1 rounded flex items-center gap-1 cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <GrGallery />
                  {images.length} PHOTOS
                </span>
              </div>
            ))}
          </Carousel>
        </div>
        {/* Right Content Section */}
        <div className="w-full md:w-2/3 lg:w-2/5 p-6 flex flex-col justify-between bg-white shadow-md rounded-lg transition-transform scale-y-105">
          {/* Car Info */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              2024 BMW X5 xDrive40i xLine
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              3,406 kms • Petrol • Automatic • 1st Owner
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mt-2 flex items-center">
              <TbCurrencyTaka className="mr-1" />
              90 Lakh
            </h3>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              EMI starts @ ৳2,23,382/mo • New Car Price ৳1.06 Crore
            </p>
            <Divider dashed />
            <div className="flex items-center mt-2 text-gray-600">
              <FaMapMarkerAlt className="mr-2" />
              Manda, Dhaka
            </div>
          </div>

          {/* Button & Trending Section */}
          <div className="mt-4">
            <Link to="/vendor-info">
              <Button
                type="primary"
                className="w-full bg-ButtonColor hover:bg-ButtonHover text-white font-semibold py-5 text-lg"
              >
                View Seller Details
              </Button>
            </Link>
            <p className="text-gray-600 flex items-center mt-3 text-sm md:text-base">
              <FaBolt className="text-yellow-500 mr-2 text-lg" /> Trending Car!
              High chances of sale in next 6 days
            </p>
          </div>

          {/* Actions Section */}
          <div className="flex flex-wrap justify-between text-gray-500 text-sm mt-4">
            <span
              onClick={() => setIsReportModal(true)}
              className="flex items-center cursor-pointer hover:text-red-500 transition"
            >
              <ExclamationCircleOutlined className="mr-1" /> Report Ad
            </span>
            <span className="flex items-center cursor-pointer hover:text-blue-500 transition">
              <MessageOutlined className="mr-1" /> Chat with Seller
            </span>
            <span className="flex items-center cursor-pointer hover:text-green-500 transition">
              <ShareAltOutlined className="mr-1" /> Share
            </span>
            {/* <HeartOutlined className="cursor-pointer hover:text-red-500 transition" /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-[89%] mx-auto gap-6 px-4 lg:px-0">
        {/* Left Side Content */}
        <div className="w-full lg:w-7/12 space-y-6">
          <CarOverview />
          <Features />
          <Specifications />
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
        handleImage={images}
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ReportAdModel
        isVisible={isReportModal}
        onClose={() => setIsReportModal(false)}
      />
    </div>
  );
};

export default CarDetails;
