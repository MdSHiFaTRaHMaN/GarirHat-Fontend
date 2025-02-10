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
import { Breadcrumb, Button, Carousel } from "antd";
import { FaRupeeSign, FaMapMarkerAlt, FaBolt } from "react-icons/fa";
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

const CarDetails = () => {
  const images = [Car1, Car2, Car3, Car4];
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        className="ml-20 mt-4"
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
      <div className=" w-full lg:w-11/12 mx-auto overflow-hidden flex gap-8 flex-col lg:flex-row p-6">
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
        <div className="lg:w-2/5 p-6 flex flex-col justify-between h-[370px] shadow-md bg-white scale-y-105 ">
          <div>
            <h2 className="text-2xl font-semibold">
              2024 BMW X5 xDrive40i xLine
            </h2>
            <p className="text-gray-500 text-sm">
              3,406 kms • Petrol • Automatic • 1st Owner
            </p>
            <h3 className="text-3xl font-bold mt-2 flex items-center">
              <FaRupeeSign className="mr-1" />
              90 Lakh
              <span className="text-blue-500 text-sm ml-2">
                Make Your Offer
              </span>
            </h3>
            <p className="text-gray-600 text-sm">
              EMI starts @ ₹2,23,382/mo • New Car Price ₹1.06 Crore
            </p>
            <div className="flex items-center mt-2 text-gray-600">
              <FaMapMarkerAlt className="mr-2" />
              Vaishya Sabha, Kolkata
            </div>
          </div>

          {/* Button & Trending Section */}
          <div className="mt-1">
            <Button
              type="primary"
              className="w-full bg-orange-500 hover:bg-orange-600 !important"
            >
              View Seller Details
            </Button>
            <p className="text-gray-600 flex items-center mt-2 text-sm">
              <FaBolt className="text-yellow-500 mr-1" /> Trending Car! High
              chances of sale in next 6 days
            </p>
          </div>

          {/* Actions Section */}
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <span className="flex items-center cursor-pointer">
              <ExclamationCircleOutlined className="mr-1" /> Report Ad
            </span>
            <span className="flex items-center cursor-pointer">
              <MessageOutlined className="mr-1" /> Chat with Seller
            </span>
            <span className="flex items-center cursor-pointer">
              <ShareAltOutlined className="mr-1" /> Share
            </span>
            <HeartOutlined className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-[89%] mx-auto">
        <div className="w-full lg:w-7/12">
          <CarOverview />
          <EMICalculator />
          <CarReviews />
        </div>
        <div className="w-full lg:w-5/12">
          <RecommendedUsedCars />
          <AddonService />
          <ResearchLinks />
        </div>
      </div>
      <Features />
      <GalloryModel
        handleImage={images}
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CarDetails;
