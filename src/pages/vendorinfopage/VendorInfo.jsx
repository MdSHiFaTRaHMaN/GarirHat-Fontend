import { Card, Button, Rate, Tag, Image } from "antd";
import { CheckCircleOutlined, UserOutlined } from "@ant-design/icons";
import Profile from "../../assets/images/Al-Hasan.jpg";
import { useState } from "react";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import VendorOtherCar from "./VendorOtherCar";
import { useSingleVendor } from "../../api/api";
import { useParams } from "react-router-dom";
import Bannar from "../../assets/images/vehicleSellerbannar.jpg"

const VendorInfo = () => {
  const {vendorId} = useParams();
  const [error, setError] = useState(false);
  const { singleVendor } = useSingleVendor(vendorId);

  console.log("singleVendor", singleVendor)
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full lg:w-10/12 mx-auto shadow-lg rounded-lg p-7">
        {/* Header Section */}
        <div>
          <img src={Bannar} alt="" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start p-4 border-b">
          <div className="flex items-center">
            {error || !Profile ? (
              <div className="w-[75px] h-[75px] flex items-center justify-center rounded-full bg-gray-200">
                <UserOutlined className="text-3xl text-gray-500" />
              </div>
            ) : (
              <Image
                width={75}
                height={75}
                src={Profile}
                alt="Profile Photo"
                className="rounded-full"
                onError={() => setError(true)} // Fallback if the image fails to load
              />
            )}
          </div>
          <div className="flex-1 items-center">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl font-semibold">{singleVendor.name}</h2>
              <Tag color="green">Vendor</Tag>
            </div>
            <div className="flex items-center mt-1">
              <Rate allowHalf defaultValue={3.5} disabled className="mr-2" />
              <h2 className="font-bold text-amber-700 text-2xl">3.5/5</h2>
            </div>
            <div className="flex gap-2 mt-2">
              <Button
                type="primary"
                icon={<CheckCircleOutlined />}
                size="small"
              >
                {singleVendor.status}
              </Button>
              <div className="flex gap-2">
                <FaWhatsappSquare className="text-2xl text-green-500" />
                <TfiEmail className="text-2xl text-red-600" />
                <FaFacebookSquare className="text-2xl text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <p>
              <strong>Mobile Number:</strong> {singleVendor.phone || "N/A"}
            </p>
            <p>
              <strong>Emergency Mobile Number:</strong> {singleVendor.emergency_phone || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {singleVendor.email}
            </p>
          </div>
        </div>
        {/* More vendor Details */}
        <div className="p-1">
          <h3 className="text-lg font-semibold">Vendor Other Cars</h3>
           <VendorOtherCar vendor_id={singleVendor.id}/>
        </div>
      </div>
    </div>
  );
};

export default VendorInfo;
