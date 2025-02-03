import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { RiNumber1 } from "react-icons/ri";

const BuyOnline = () => {
  return (
    <div className="text-center bg-black p-5">
      <h1 className="text-[#51B9EB] font-bold text-4xl">BUY ONLINE.</h1>
      <h1 className="font-bold text-4xl text-white">
        HAVE IT DELIVERED.{" "}
        <Tooltip
          title={
            <span className="font-semibold">
              Delivery not available in Alaska, Massachusetts, New York,
              Louisiana, and Georgia. New car delivery only available in
              Bangladesh.
            </span>
          }
          overlayInnerStyle={{ color: "black" }}
          color="white"
        >
          <button>
            <InfoCircleOutlined className="text-lg" />
          </button>
        </Tooltip>
      </h1>
      {/* section second  */}
      <section className="bg-gray-900  text-white py-6 px-6 md:px-16 mt-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold">
            How does <span className="text-white">Garir</span>
            <span className="text-blue-500">Hat</span>
            <span className="text-red-500">+</span> work?
          </h2>
        </div>

        {/* Steps Container */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className=" p-6 rounded-xl flex items-center gap-5">
            <h3 className="text-8xl font-bold text-gray-500">1</h3>
            <div className="text-start">
              <h4 className="text-xl font-semibold mt-2">
                You're in total control
              </h4>
              <p className="text-gray-400 mt-2">
                Shop at your own pace and choose from a large selection of new
                and used vehicles.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl flex items-center gap-5">
            <h3 className="text-8xl font-bold text-gray-500">2</h3>
            <div className="text-start">
              <h4 className="text-xl font-semibold mt-2">
                Find the right financing
              </h4>
              <p className="text-gray-400 mt-2">
                See your actual monthly payment and select the lender that fits
                you best.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl text-center relative flex items-center gap-5">
            <h3 className="text-8xl font-bold text-gray-500">3</h3>
            <div className="text-start">
              <h4 className="text-xl font-semibold mt-2 flex items-center gap-2">
                Receive your car
                <Tooltip
                  title={
                    <span className="font-semibold">
                      Delivery not available in Alaska, Massachusetts, New York,
                      Louisiana, and Georgia. New car delivery only available in
                      Bangladesh.
                    </span>
                  }
                  overlayInnerStyle={{ color: "black" }}
                  color="white"
                >
                  <InfoCircleOutlined className="text-gray-400" />
                </Tooltip>
              </h4>
              <p className="text-gray-400 mt-2">
                Schedule delivery (for used cars only) or pickup, to begin
                enjoying your new ride!
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-full text-lg shadow-md hover:bg-gray-300 transition">
            Buy online
          </button>
        </div>
      </section>
    </div>
  );
};

export default BuyOnline;
