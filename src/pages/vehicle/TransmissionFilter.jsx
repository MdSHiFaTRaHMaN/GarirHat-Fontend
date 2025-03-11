import { Checkbox } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const transmission = [
  { label: "Automatic", count: "43" },
  { label: "Manual", count: "23" },
];
const TransmissionFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTransmission, setSelectedTransmission] = useState([]); // 🔹 সিলেক্টেড বডি টাইপ স্টোর করবে

  const handleChange = (e, transmissionValue) => {
    const isChecked = e.target.checked;
    const currentTransmission = searchParams.getAll("transmission"); // আগের bodyTransmission গুলো রাখবে

    const updatedTransmission = isChecked
      ? [...currentTransmission, transmissionValue] // নতুন Transmission যোগ করা
      : currentTransmission.filter((m) => m !== transmissionValue); // আনচেক করলে সরানো হবে

    setSelectedTransmission(updatedTransmission); // ✅ স্টেট আপডেট

    searchParams.delete("transmission"); // 🔹 আগের data মুছে নতুনভাবে append করবো
    updatedTransmission.forEach((m) => searchParams.append("transmission", m));

    setSearchParams(searchParams); // ✅ নতুন Transmission সেট করা
  };
  return (
    <div>
      <div className="space-y-2">
        {transmission.map((item, index) => (
          <label
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <Checkbox
              onChange={(e) => handleChange(e, item.label)}
              checked={selectedTransmission.includes(item.label)} // ✅ সঠিক checked কন্ডিশন
              onClick={(e) => e.stopPropagation()}
            />
            <span className="flex-1 ml-2">{item.label}</span>
            <span className="">{item.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TransmissionFilter;
