import { Slider } from "antd";
import { useState } from "react";

const KilometerFilter = ({ onKmChange }) => {
  const [kmRange, setKmRange] = useState([90000, 200000]); // Default Min & Max KM

  const handleChange = (value) => {
    setKmRange(value);
    if (onKmChange) {
      onKmChange(value); // Call parent function with selected KM range
    }
  };

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between text-sm font-semibold text-orange-600 mb-2">
        <span>{kmRange[0].toLocaleString()} km</span>
        <span>{kmRange[1].toLocaleString()} km</span>
      </div>
      <Slider
        range
        min={0}
        max={300000} // Max KM Limit
        step={5000}
        value={kmRange}
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

export default KilometerFilter;

