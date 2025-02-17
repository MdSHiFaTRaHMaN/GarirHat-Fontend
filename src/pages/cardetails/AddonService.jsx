import { Button } from "antd";
import { FaRupeeSign } from "react-icons/fa";
import CarImage from "../../assets/images/car-d4.jpg"
const AddonService = () => {

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white  rounded-xl p-6 max-w-3xl w-full">
        {/* Header Section */}
        <h2 className="text-xl font-semibold text-gray-900">
          Avail Addon Services On <span className="text-orange-600">BMW X5</span>
        </h2>

        {/* Offer Badge */}
        <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-md w-fit mt-2">
          EXCLUSIVE OFFER
        </div>

        {/* Bundle Card */}
        <div className="bg-white shadow-md rounded-xl p-4 mt-4">
          <h3 className="text-lg font-bold">Complete 360° Bundle</h3>

          {/* Service Items */}
          <div className="flex items-center mt-4 space-x-2">
            <ServiceCard
              image={CarImage}
              title="Service History"
              price={999}
            />
            <span className="text-2xl font-bold">+</span>
            <ServiceCard
              image={CarImage}
              title="Background Check"
              price={99}
            />
            <span className="text-2xl font-bold">+</span>
            <ServiceCard
              image={CarImage}
              title="Challan Check"
              price={29}
            />
          </div>

          {/* Pricing & Buttons */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold text-gray-800">
              Total Price:{" "}
              <span className="text-black flex items-center">
                <FaRupeeSign className="text-lg" /> 1003
              </span>
              <span className="text-gray-500 line-through ml-2">৳1127</span>
              <span className="text-green-600 ml-2 text-sm">12% OFF</span>
            </div>

            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button className="border-orange-500 text-orange-500 hover:bg-orange-100">
                More Details
              </Button>
              <Button type="primary" className="bg-orange-500 hover:bg-orange-600">
                Buy Bundle Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-3 rounded-lg shadow-md ">
      <img src={image} alt={title} className="rounded-md w-28 h-28 object-cover" />
      <h4 className="text-sm font-semibold mt-2 text-center">{title}</h4>
      <p className="text-gray-600 text-xs">Worth ৳{price}</p>
    </div>
  );
};

export default AddonService;
