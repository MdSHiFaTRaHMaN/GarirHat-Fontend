import { useSearchParams } from "react-router-dom";
import { Checkbox } from "antd";
import Carbody from "../../assets/images/carbody.png";
import { useEffect, useState } from "react";

const bodyTypes = [
  { label: "Sedan", count: 374, img: Carbody },
  { label: "SUV", count: 397, img: Carbody },
  { label: "Crossover", count: 5, img: Carbody },
  { label: "Hatchback", count: 791, img: Carbody },
  { label: "Minivan", count: 4, img: Carbody },
  { label: "Convertible", count: 5, img: Carbody },
  { label: "MUV", count: 73, img: Carbody },
  { label: "Pickup", count: 3, img: Carbody },
];

const BodyTypeFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTypes, setSelectedTypes] = useState([]); // 🔹 সিলেক্টেড বডি টাইপ স্টোর করবে

    useEffect(() => {
      const existingConditions = searchParams.getAll("body_type");
      setSelectedTypes(existingConditions);
    }, [searchParams]);
  


  const handleBrandChange = (e, bodyTypeValue) => {
    const isChecked = e.target.checked;
    const currentTypes = searchParams.getAll("body_type"); // আগের bodyTypes গুলো রাখবে

    const updatedTypes = isChecked
      ? [...currentTypes, bodyTypeValue] // নতুন bodyTypes যোগ করা
      : currentTypes.filter((m) => m !== bodyTypeValue); // আনচেক করলে সরানো হবে

    setSelectedTypes(updatedTypes); // ✅ স্টেট আপডেট

    searchParams.delete("body_type"); // 🔹 আগের data মুছে নতুনভাবে append করবো
    updatedTypes.forEach((m) => searchParams.append("body_type", m));

    setSearchParams(searchParams); // ✅ নতুন bodyTypes সেট করা
  };

  return (
    <div className="bg-white w-72 p-4">
      <div className="space-y-2">
        {bodyTypes.map((type, index) => (
          <label key={index} className="flex items-center space-x-3 cursor-pointer">
            <Checkbox
              onChange={(e) => handleBrandChange(e, type.label)}
              checked={selectedTypes.includes(type.label)} // ✅ সঠিক checked কন্ডিশন
              onClick={(e) => e.stopPropagation()}
            />
            <span className="flex-1">{type.label}</span>
            <span className="text-gray-500">{type.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BodyTypeFilter;
