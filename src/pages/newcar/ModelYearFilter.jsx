import { Slider } from "antd";
import { useState } from "react";

const ModelYearFilter = ({ onYearChange }) => {
  const [yearRange, setYearRange] = useState([1990, 2024]); // Min & Max Year

  const handleChange = (value) => {
    setYearRange(value);
    if (onYearChange) {
      onYearChange(value);
    }
  };

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between text-sm font-semibold text-orange-600 mb-2">
        <span>{yearRange[0]}</span>
        <span>{yearRange[1]}</span>
      </div>
      <Slider
        range
        min={1990}
        max={2025}
        step={1}
        value={yearRange}
        onChange={handleChange}
        trackStyle={{ backgroundColor: "#f25c27", height: 5 }}
        handleStyle={{
          borderColor: "#f25c27",
          backgroundColor: "#f25c27",
        }}
      />
    </div>
  );
};

export default ModelYearFilter;

