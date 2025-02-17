import { Divider } from "antd";
import ReviewImage from "../../assets/images/reviewbannar.jpg";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ReviewBannar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  return (
    <div
      className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ReviewImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 px-4 w-full max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-6">
          10,000+ Genuine Reviews To <br className="hidden sm:block" /> Find The
          Right Car!
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 text-black bg-white p-3 rounded-lg shadow-md w-full max-w-4xl mx-auto">
          {/* Brand Select */}
          <select
            className="w-full sm:w-auto flex-1 p-2 border-none rounded-md focus:border-none"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="" disabled>
              Select Brand
            </option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
          </select>

          <span className="hidden sm:block w-[1px] h-10 bg-gray-300"></span>
          <Divider className="block lg:hidden"
            style={{
              borderColor: "#1F1F1F",
            }}
          />
          {/* Model Select */}
          <select
            className="w-full sm:w-auto flex-1 p-2 border-none rounded-md"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="" disabled>
              Select Model
            </option>
            <option value="corolla">Corolla</option>
            <option value="civic">Civic</option>
            <option value="mustang">Mustang</option>
          </select>

          {/* Search Button */}
          <button className="flex items-center gap-2 bg-ButtonColor hover:bg-ButtonHover text-white p-3 rounded-md w-full sm:w-auto">
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBannar;
