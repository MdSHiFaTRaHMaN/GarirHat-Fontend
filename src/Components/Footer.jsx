import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <h3 className="font-semibold text-lg">ABOUT GARIRHAT</h3>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li>About</li>
              <li>Careers With Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Corporate Policies</li>
              <li>Investors</li>
              <li>FAQs</li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h3 className="font-semibold text-lg">CONNECT WITH US</h3>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li>Feedback</li>
              <li>Contact Us</li>
              <li>Advertise with Us</li>
              <li>Become Partner Dealer</li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h3 className="font-semibold text-lg">OTHERS</h3>
            <ul className="text-gray-600 space-y-2 mt-2">
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
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
