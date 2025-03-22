import { FaPhoneFlip } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { TbFileTextSpark } from "react-icons/tb";

const steps = [
  {
    id: 1,
    title: "Choose Your Car",
    description:
      "Verified Listings – Only genuine sellers and dealers.",
    icon: <HiShieldCheck className="text-TextColor text-5xl mb-4" />,
  },
  {
    id: 2,
    title: "Contact Seller",
    description:
      "Easy Communication – Direct chat with sellers for transparent deals.",
    icon: <FaPhoneFlip className="text-TextColor text-5xl mb-4" />,
  },
  {
    id: 3,
    title: "Financing & Registration",
    description:
      "We deal with the paper work to avail your financing and registration in 24 hours.",
    icon: <TbFileTextSpark className="text-TextColor text-5xl mb-4" />,
  },
  {
    id: 4,
    title: "Get Your Car",
    description: "Embrace the joy of Car Ownership without any of the hassle!",
    icon: <PiCheckSquareOffsetFill className="text-TextColor text-5xl mb-4" />,
  },
];

const Other = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Why Choose GARIRHAT for Buying a Car?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-5">
        {steps.map((step) => (
          <div
            key={step.id}
            className=" p-2 flex flex-col items-center text-center"
          >
            <div className="mb-2 text-TextColor font-bold">Step {step.id}</div>
            {step.icon}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Other;
