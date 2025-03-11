import { Checkbox } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const fuelType = [
  { label: "Petrol", count: "23" },
  { label: "Hybrid", count: "53" },
  { label: "Electric", count: "12" },
  { label: "Petrol-LPG", count: "93" },
  { label: "Petrol-CNG", count: "13" },
  { label: "Diesel", count: "73" },
];
const FuelTypeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTypes, setSelectedTypes] = useState([]); // 🔹 সিলেক্টেড বডি টাইপ স্টোর করবে

  const handleBrandChange = (e, bodyTypeValue) => {
    const isChecked = e.target.checked;
    const currentTypes = searchParams.getAll("fuel_type"); // আগের bodyTypes গুলো রাখবে

    const updatedTypes = isChecked
      ? [...currentTypes, bodyTypeValue] // নতুন bodyTypes যোগ করা
      : currentTypes.filter((m) => m !== bodyTypeValue); // আনচেক করলে সরানো হবে

    setSelectedTypes(updatedTypes); // ✅ স্টেট আপডেট

    searchParams.delete("fuel_type"); // 🔹 আগের data মুছে নতুনভাবে append করবো
    updatedTypes.forEach((m) => searchParams.append("fuel_type", m));

    setSearchParams(searchParams); // ✅ নতুন bodyTypes সেট করা
  };

  return (
    <div>
      <div className="space-y-2">
        {fuelType.map((item, index) => (
          <label
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <Checkbox
              onChange={(e) => handleBrandChange(e, item.label)}
              checked={selectedTypes.includes(item.label)} // ✅ সঠিক checked কন্ডিশন
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

export default FuelTypeFilter;
