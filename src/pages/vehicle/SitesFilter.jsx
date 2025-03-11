import { Checkbox, Input } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const seating_capacity = [
  { label: "2 Seater", count: 30, seat: "2" },
  { label: "3 Seater", count: 30, seat: "3" },
  { label: "4 Seater", count: 30, seat: "4" },
  { label: "5 Seater", count: 60, seat: "5" },
  { label: "6 Seater", count: 70, seat: "6" },
  { label: "7 Seater", count: 20, seat: "7" },
  { label: "8 Seater", count: 20, seat: "8" },
  { label: "9 Seater", count: 20, seat: "9" },
  { label: "10 Seater", count: 20, seat: "10" },
];
const SitesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSeatingCapacity, setSelectedSeatingCapacity] = useState([]); // 🔹 সিলেক্টেড বডি টাইপ স্টোর করবে

  const handleChange = (e, seatingCapacityValue) => {
    const isChecked = e.target.checked;
    const currentSeatingCapacity = searchParams.getAll("seating_capacity"); // আগের bodySeatingCapacity গুলো রাখবে

    const updatedSeatingCapacity = isChecked
      ? [...currentSeatingCapacity, seatingCapacityValue] // নতুন SeatingCapacity যোগ করা
      : currentSeatingCapacity.filter((m) => m !== seatingCapacityValue); // আনচেক করলে সরানো হবে

    setSelectedSeatingCapacity(updatedSeatingCapacity); // ✅ স্টেট আপডেট

    searchParams.delete("seating_capacity"); // 🔹 আগের data মুছে নতুনভাবে append করবো
    updatedSeatingCapacity.forEach((m) =>
      searchParams.append("seating_capacity", m)
    );

    setSearchParams(searchParams); // ✅ নতুন SeatingCapacity সেট করা
  };
  return (
    <div>
      <div className="space-y-2">
        {seating_capacity.map((item, index) => (
          <label
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <Checkbox
              onChange={(e) => handleChange(e, item.seat)}
              checked={selectedSeatingCapacity.includes(item.seat)} // ✅ সঠিক checked কন্ডিশন
              onClick={(e) => e.stopPropagation()}
            />
            <span className="flex-1 ml-2">{item.label}</span>
            <span className="text-gray-500">{item.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SitesFilter;
