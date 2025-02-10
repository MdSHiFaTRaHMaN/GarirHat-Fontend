import { Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ReviewImage from "../../assets/images/reviewbannar.jpg";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const { Option } = Select;

const ReviewBannar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  return (
    <div
      className="relative w-full h-[400px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ReviewImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 px-4 w-10/12 mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
          10,000+ Genuine Reviews To <br /> Find The Right Car!
        </h1>
        <div className="flex items-center gap-2 mt-4 text-black bg-white p-2 rounded-lg shadow-md max-w-4xl">
          <select
            className="w-full p-2"
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
          <span className="w-[1px] h-[40px] bg-black"></span>
          <select
            className="w-full p-2"
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

          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white p-3 px-16 rounded-md">
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBannar;
