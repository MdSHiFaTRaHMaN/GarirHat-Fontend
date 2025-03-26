import { Button } from "antd";
import {
  FaBullhorn,
  FaChartLine,
  FaHandshake,
  FaEnvelope,
} from "react-icons/fa";

const AdvertiseWithUs = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <FaBullhorn className="mr-2" /> Advertise with Us
      </h2>
      <p className="text-gray-700 mb-6">
        Partner with GarirHat to increase your brand's visibility and reach a
        dedicated audience interested in motor vehicles.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 border border-gray-300 rounded-lg">
          <FaChartLine className="text-2xl mb-2 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Boost Your Reach</h3>
          <p className="text-gray-600">
            Showcase your vehicles to a targeted audience actively searching for
            motor vehicles. Increase your visibility with premium placements.
          </p>
          <div className="flex justify-end">
            <Button className="bg-ButtonColor !text-white hover:!bg-ButtonHover hover:!text-white">
              Start
            </Button>
          </div>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg">
          <FaHandshake className="text-2xl mb-2 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Partner with Us</h3>
          <p className="text-gray-600">
            Collaborate with GarirHat to create customized advertising campaigns
            tailored to your business goals.
          </p>
          <div className="flex justify-end">
            <Button className="bg-ButtonColor !text-white hover:!bg-ButtonHover hover:!text-white">
              Start
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
        <p className="text-gray-700 mb-2">
          Reach out to our advertising team to explore advertising
          opportunities:
        </p>
        <p className="text-gray-700 flex items-center">
          <FaEnvelope className="mr-2" /> Email: advertise@garirhat.com
        </p>
      </div>
    </div>
  );
};

export default AdvertiseWithUs;
