import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const colors = [
  { name: "White", color: "#ffffff", count: 69 },
  { name: "Silver", color: "#c0c0c0", count: 43 },
  { name: "Red", color: "#ff0000", count: 13 },
  { name: "Blue", color: "#0000ff", count: 11 },
  { name: "Brown", color: "#8b4513", count: 10 },
  { name: "Black", color: "#000000", count: 7 },
  { name: "Orange", color: "#ff8000", count: 2 },
  { name: "Green", color: "#008000", count: 2 },
  { name: "Maroon", color: "#800000", count: 2 },
  { name: "Yellow", color: "#FFFF00", count: 2 },
  { name: "Violet", color: "#8F00FF", count: 2 },
];

const ColorFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState([]); // 🔹 সিলেক্টেড বডি টাইপ স্টোর করবে

  useEffect(() => {
    const existingConditions = searchParams.getAll("color");
    setSelectedColor(existingConditions);
  }, [searchParams]);
  const handleChange = (e, colorValue) => {
    const isChecked = e.target.checked;
    const currentColor = searchParams.getAll("color"); // আগের bodyColor গুলো রাখবে

    const updatedColor = isChecked
      ? [...currentColor, colorValue] // নতুন bodyColor যোগ করা
      : currentColor.filter((m) => m !== colorValue); // আনচেক করলে সরানো হবে

    setSelectedColor(updatedColor); // ✅ স্টেট আপডেট

    searchParams.delete("color"); // 🔹 আগের data মুছে নতুনভাবে append করবো
    updatedColor.forEach((m) => searchParams.append("color", m));

    setSearchParams(searchParams); // ✅ নতুন bodyColor সেট করা
  };
  return (
    <div className="">
      <div className="space-y-2">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox
              onChange={(e) => handleChange(e, color.name)}
              checked={selectedColor.includes(color.name)} // ✅ সঠিক checked কন্ডিশন
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className="w-4 h-4 border rounded"
              style={{ backgroundColor: color.color }}
            ></div>
            <span className="flex-1 text-gray-700">{color.name}</span>
            <span className="text-gray-500">{color.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
