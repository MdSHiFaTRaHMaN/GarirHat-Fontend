import { Slider } from "antd";
import { useState } from "react";

const KilometerFilter = ({ onKmChange }) => {
  const [kmRange, setKmRange] = useState([50000, 250000]); // Default Min & Max KM

  const handleChange = (value) => {
    setKmRange(value);
    if (onKmChange) {
      onKmChange(value); // Call parent function with selected KM range
    }
  };

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between text-sm font-semibold text-TextColor mb-2">
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
        trackStyle={{ backgroundColor: "#3eb4e7", height: 5 }}
        handleStyle={{
          borderColor: "#3eb4e7",
          backgroundColor: "#3eb4e7",
        }}
      />
    </div>
  );
};

export default KilometerFilter;

