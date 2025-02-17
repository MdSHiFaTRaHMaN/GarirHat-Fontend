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
      <div className="flex justify-between text-sm font-semibold text-TextColor mb-2">
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
        trackStyle={{ backgroundColor: "#3eb4e7", height: 5 }}
        handleStyle={{
          borderColor: "#3eb4e7",
          backgroundColor: "#3eb4e7",
        }}
      />
    </div>
  );
};

export default ModelYearFilter;

