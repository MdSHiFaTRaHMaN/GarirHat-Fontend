import {
  FaHandshake,
  FaRegEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PartnerDealer = () => {
  return (
    <div className="p-6 w-full lg:w-10/12 mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaHandshake className="mr-2" /> Become a Partner Dealer
      </h2>
      <p className="mb-6 text-gray-700">
        Join GarirHat as a Partner Dealer and expand your business by connecting
        with potential buyers. Enjoy increased visibility, exclusive tools, and
        dedicated support.
      </p>
      <div className="mb-6 p-4 border border-gray-300 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Why Partner with Us?</h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>Access a vast network of potential buyers.</li>
          <li>Exclusive tools to manage your listings effectively.</li>
          <li>Priority customer support and consultation.</li>
          <li>Enhanced visibility for your vehicle listings.</li>
        </ul>
      </div>
      <div className="mb-6 p-4 border border-gray-300 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">How to Join?</h3>
        <p className="mb-2 text-gray-600">
          To become a Partner Dealer, reach out through the contact details
          below:
        </p>
        <div className="space-y-2">
          <p className="flex items-center text-gray-600">
            <FaRegEnvelope className="mr-2" /> Email: partner@garirhat.com
          </p>
          <p className="flex items-center text-gray-600">
            <FaPhone className="mr-2" /> Phone: +123 456 7890
          </p>
          <p className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" /> Address: Block A, Road 14, House
            No #9, Green Model Town, Mugda, Motheej, Dhaka,
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerDealer;
