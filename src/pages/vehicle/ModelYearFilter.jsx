import { Slider } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ModelYearFilter = ({ onYearChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [yearRange, setYearRange] = useState([1960, 2030]); // Min & Max Year

  const handleChange = (value) => {
    const startYear = value[0];
    const endYear = value[1];

    if (onYearChange) {
      onYearChange(value);
    }

    setYearRange(value);
    searchParams.set("start_year_of_manufacture", startYear);
    searchParams.set("end_year_of_manufacture", endYear);
    setSearchParams(searchParams);

  };

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between text-sm font-semibold text-TextColor mb-2">
        <span>{yearRange[0]}</span>
        <span>{yearRange[1]}</span>
      </div>
      <Slider
        range
        min={1960}
        max={2030}
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
