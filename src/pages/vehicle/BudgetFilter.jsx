import { useState } from "react"; 
import { Slider, Radio } from "antd";
import { TbCurrencyTaka } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";

const priceRanges = [
  { id: 1, label: "Under 5 Lakh", value: [1, 500000] },
  { id: 2, label: "5 - 10 Lakh", value: [500000, 1000000] },
  { id: 3, label: "10 - 20 Lakh", value: [1000000, 2000000] },
  { id: 4, label: "20 - 30 Lakh", value: [2000000, 3000000] },
  { id: 5, label: "30 - 50 Lakh", value: [3000000, 5000000] },
  { id: 6, label: "Above 50 Lakh", value: [5000000, 1000000000000] },
];

const BudgetFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [budget, setBudget] = useState([0, 50000000]);
  const [value, setValue] = useState(null);

  // 🔹 **Slider Change Handler**
  const handleSliderChange = (newValue) => {
    setBudget(newValue);
  };

  const handleSliderAfterChange = (newValue) => {
    searchParams.set("start_price", newValue[0]);
    searchParams.set("end_price", newValue[1]);
    setSearchParams(searchParams);
  };

  // 🔹 **Radio Button Change Handler**
  const handleRadioChange = (e) => {
    setValue(e.target.value);

    const selectedRange = priceRanges.find((range) => range.id === e.target.value);
    if (selectedRange) {
      setBudget(selectedRange.value);
      searchParams.set("start_price", selectedRange.value[0]);
      searchParams.set("end_price", selectedRange.value[1]);
      setSearchParams(searchParams);
    }
  };
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };


  return (
    <div id="carbrand" className="w-full">
      {/* Budget Slider */}
      <div className="mb-4">
        <div className="flex justify-between text-sm font-semibold text-gray-700">
          <span className="flex items-center">
            <TbCurrencyTaka />
            {budget[0].toLocaleString()}
          </span>
          <span className="flex items-center">
            <TbCurrencyTaka />
            {budget[1].toLocaleString()}
          </span>
        </div>
        <Slider
          range
          min={0}
          max={50000000}
          step={5000}
          value={budget}
          onChange={handleSliderChange} // ✅ Real-time update
          onAfterChange={handleSliderAfterChange} // ✅ Final update after user stops dragging
          trackStyle={{ backgroundColor: "#3eb4e7", height: 5 }}
          handleStyle={{ borderColor: "#3eb4e7", backgroundColor: "#3eb4e7" }}
        />
      </div>

      {/* Price Range Radio Buttons */}
      <div className="text-sm font-semibold mb-2">What is your price range?</div>
      <div className="space-y-2 flex flex-col">
        <Radio.Group
          onChange={handleRadioChange}
          value={value}
          style={style}
          options={priceRanges.map((range) => ({
            value: range.id,
            label: range.label,
          }))}
        />
      </div>
    </div>
  );
};

export default BudgetFilter;
