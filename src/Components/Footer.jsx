import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <h3 className="font-semibold text-lg">ABOUT GARIRHAT</h3>
            <ul className="space-y-5 mt-2">
              <Link to="/about"><li className="my-1">About</li></Link>
              <Link to="/term&condition"><li className="my-1">Terms & Conditions</li></Link>
              <Link to="/privacy-policy"><li className="my-1">Privacy Policy</li></Link>
              <Link to="/corporate-policies"><li className="my-1">Corporate Policies</li></Link>
              {/* <Link to="/investors"><li className="my-1">Investors</li></Link> */}
              <Link to="/faqs"><li className="my-1">FAQs</li></Link>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h3 className="font-semibold text-lg">CONNECT WITH US</h3>
            <ul className="space-y-2 mt-2">
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Careers With Us</li>
              <li>Advertise with Us</li>
              <li>Become Partner Dealer</li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h3 className="font-semibold text-lg">OTHERS</h3>
            <ul className="space-y-2 mt-2">
              <li>TrucksHat</li>
              <li>TyreHat</li>
              <li>TractorsHat</li>
              <li>BikeHat</li>
              <li>PartsHat</li>
              <li>Live Auction</li>
              <li>Emergency Response</li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h3 className="font-semibold text-lg">EXPERIENCE GARIRHAT APP</h3>
            <div className="flex space-x-4 mt-2">
              <button className="bg-black text-white p-3 rounded flex items-center space-x-2">
                <FaApple className="text-xl" />
                <span>App Store</span>
              </button>
              <button className="bg-black text-white p-3 rounded flex items-center space-x-2">
                <FaGooglePlay className="text-xl" />
                <span>Google Play</span>
              </button>
            </div>
            <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
              <form className="flex flex-col lg:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
                />

                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-ButtonColor rounded-md hover:bg-ButtonHover font-semibold focus:outline-none focus:bg-blue-400"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
