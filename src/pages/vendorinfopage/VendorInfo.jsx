import { FaFacebookSquare } from "react-icons/fa";
import VendorOtherCar from "./VendorOtherCar";
import { useSingleVendor } from "../../api/api";
import { useParams } from "react-router-dom";
import Bannar from "../../assets/images/vehicleSellerbannar.jpg";
import { FiInstagram } from "react-icons/fi";
import { MdMoreHoriz } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const VendorInfo = () => {
  const { vendorId } = useParams();
  const { singleVendor } = useSingleVendor(vendorId);

  console.log("singleVendor", singleVendor);

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full lg:w-10/12 mx-auto shadow-lg rounded-lg p-2 lg:p-7">
        {/* Header Section */}
        <div className="w-full mx-auto rounded-lg overflow-hidden">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={singleVendor.banner || Bannar}
              alt="Cover"
              className="w-full h-96 object-cover"
            />
            {/* Profile Picture */}
            <div className="absolute left-5 bottom-[-40px]">
              <img
                src={singleVendor.profile_picture}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* Profile Details */}
          <div className=" p-6 pt-12">
            <h2 className="text-2xl font-semibold">{singleVendor.name}</h2>
            <p className="text-gray-600 text-sm">{singleVendor.email}</p>

            {/* Location & Social Links */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 mt-2 text-sm">
              <span className="flex items-center gap-1 whitespace-nowrap">
                <BsWhatsapp className="text-green-700" />
                {singleVendor.name}
              </span>
              <span className="flex items-center gap-1">
                <FiInstagram className="text-pink-500" />
                {singleVendor.name}
              </span>
              <span className="flex items-center gap-1">
                <FaFacebookSquare className="text-blue-400" />{" "}
                {singleVendor.name}
              </span>
            </div>
            {/* Personal Information */}
            <div className="py-3 border-b">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <div className=" mt-2">
                <p>
                  <strong className="font-medium">Phone Number:</strong>{" "}
                  {singleVendor.phone || "N/A"}
                </p>
                <p>
                  <strong className="font-medium">
                    Emergency Phone Number:
                  </strong>{" "}
                  {singleVendor.emergency_phone || "N/A"}
                </p>
                <p>
                  <strong className="font-medium">Email:</strong>{" "}
                  {singleVendor.email}
                </p>
              </div>
            </div>
          </div>

          {/* More Options */}
          <div className="absolute top-4 right-4 text-gray-600 cursor-pointer">
            <MdMoreHoriz size={24} />
          </div>
        </div>

        {/* More vendor Details */}
        <div className="p-1">
          <h3 className="text-lg font-semibold">Vendor Other Cars</h3>
          <VendorOtherCar vendor_id={singleVendor.busn_id} />
        </div>
      </div>
    </div>
  );
};

export default VendorInfo;
