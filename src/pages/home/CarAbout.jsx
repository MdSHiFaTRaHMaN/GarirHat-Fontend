import React from "react";
import CarImage from "../../assets/images/mycar.png";

const CarAbout = () => {
  const featuresLeft = [
    {
      title: "Prepayment Possibility",
      description:
        "You can pay a small part of the fee during the booking process and make the remaining fee when you pick up your car.",
    },
    {
      title: "Free Cancellation",
      description:
        "Free cancellation and instant refund for all your reservation transactions.",
    },
    {
      title: "7/24 Guest Services",
      description:
        "Our guest services team is at your service 24/7 for all your reservation procedures.",
    },
  ];

  const featuresRight = [
    {
      title: "Best Prices",
      description:
        "Possibility to compare the most suitable vehicles for your budget in the date range you want, wherever you need.",
    },
    {
      title: "Easy and Safe Hire",
      description:
        "Safe car hire from companies that attach importance to corporate and individual customer satisfaction.",
    },
    {
      title: "Hundreds of Brands and Models",
      description:
        "Possibility to list and rent different brands and models of vehicles from corporate companies.",
    },
  ];

  return (
    <section className="body-font w-full lg:w-10/12 mx-auto py-16">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 space-y-8">
          {featuresLeft.map((feature, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <div className="flex items-center">
                <div className="h-[2px] w-full bg-gray-700"></div>
                <div className="h-[7px] w-[7px] rounded-full bg-gray-700 ml-1"></div>
              </div>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Car Image */}
        <div className="w-full lg:w-1/3 my-8 lg:my-0">
          <img
            src={CarImage}
            alt="Car"
            className="object-contain mx-auto max-w-full"
          />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 space-y-8">
          {featuresRight.map((feature, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <div className="flex items-center">
                <div className="h-[7px] w-[7px] rounded-full bg-gray-700 "></div>
                <div className="h-[2px] w-full bg-gray-700 ml-1"></div>
              </div>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarAbout;
