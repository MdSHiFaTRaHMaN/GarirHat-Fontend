import { Button } from "antd";
import {
  DollarOutlined,
  ClockCircleOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Img from '../../assets/images/trave.jpg'

const WhySellWithUs = () => {
  return (
    <div className="bg-white w-full lg:w-10/12 mx-auto py-12  px-6 lg:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 lg:text-4xl">
      Why choose  <span className="text-blue-500">GarirHat?</span>
      </h2>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center space-y-4">
          <ClockCircleOutlined className="text-blue-500 text-4xl" />
          <h3 className="text-lg font-semibold">Multiple offers in minutes</h3>
          <p className="text-gray-600">
            Compare multiple offers and know you found your best deal.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center space-y-4">
          <ShopOutlined className="text-blue-500 text-4xl" />
          <h3 className="text-lg font-semibold">Sell in person or online</h3>
          <p className="text-gray-600">
            Sell to a local dealer or 100% online, including home pickup.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center space-y-4">
          <DollarOutlined className="text-blue-500 text-4xl" />
          <h3 className="text-lg font-semibold">Get paid fast</h3>
          <p className="text-gray-600">
            Get your trade-in offer or cash payment quickly and easily.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={Img}
            alt="User browsing"
            className="w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center justify-center text-center h-full">
          <h3 className="text-5xl font-semibold text-gray-800 mb-4">
            Looking to do more online?
          </h3>
          <p className="text-gray-600 mb-6">
            Finance, reserve, or even buy 100% online.
          </p>
          <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
            Browse eligible cars
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhySellWithUs;
