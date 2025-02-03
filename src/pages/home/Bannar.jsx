import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FaCar, FaBolt, FaChevronRight } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import BannarImg from "../../assets/images/bannar-image.jpg";

const Banner = () => {
  return (
    <div
      className="w-full h-[38rem] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BannarImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl w-full">
          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-semibold text-white">
            Car buying shaped to your life
          </h1>

          {/* Search Bar */}
          <div className="mt-6 flex items-center justify-center">
            <Input
              size="large"
              placeholder="Search make, model, or type"
              prefix={<SearchOutlined className="text-gray-500" />}
              className="w-full max-w-lg rounded-full px-4 py-3"
            />
          </div>
            
          <div className="flex flex-wrap -m-4 text-center mt-7">
            <div className="p-4 md:w-1/3 sm:w-1/2  ">
              <div className="border-2 border-gray-200 p-3 py-7 rounded-lg bg-[#525556] hover:bg-gray-900">
                <FaCar className="text-orange-500 text-5xl text-center mx-auto" />
                <h2 className="text-xl text-white flex items-center justify-center">
                  Shop New <FaChevronRight />
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 p-3 py-7 rounded-lg bg-[#525556] hover:bg-gray-900">
                <BsCarFrontFill className="text-pink-500 text-5xl text-center mx-auto" />
                <h2 className="text-xl text-white flex items-center justify-center">
                  Shop Used <FaChevronRight />
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 p-3 py-7 rounded-lg bg-[#525556] hover:bg-gray-900">
                <FaBolt className="text-blue-400 text-5xl text-center mx-auto" />
                <h2 className="text-xl text-white flex items-center justify-center">
                  Shop Electric <FaChevronRight />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
