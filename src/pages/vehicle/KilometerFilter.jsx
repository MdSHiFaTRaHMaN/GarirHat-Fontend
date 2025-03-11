import { Slider } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const KilometerFilter = ({ onKmChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [kmRange, setKmRange] = useState([0, 200000]); // Default Min & Max KM

  const handleChange = (value) => {
    const startMileage = value[0];
    const endMileage = value[1];
    if (onKmChange) {
      onKmChange(value); 
    }
    setKmRange(value);
    searchParams.set("start_mileage", startMileage);
    searchParams.set("end_mileage", endMileage);
    setSearchParams(searchParams);
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
        max={20000} // Max KM Limit
        step={100}
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

