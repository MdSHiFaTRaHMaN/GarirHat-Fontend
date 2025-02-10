import { useState } from "react";
import { Slider, Checkbox } from "antd";
import { TbCurrencyTaka } from "react-icons/tb";

const priceRanges = [
  { label: "Under '2 Lakh", count: 30 },
  { label: "2 - 3 Lakh", count: 20 },
  { label: "3 - 5 Lakh", count: 50 },
  { label: "5 - 8 Lakh", count: 30 },
  { label: "8 - 10 Lakh", count: 80 },
  { label: "Above 10 Lakh", count: 40 },
];

const BudgetFilter = () => {
  const [budget, setBudget] = useState([0, 50000000]); // Min & Max

  return (
    <div className="">
      {/* Header */}
        <div>
          {/* Budget Slider */}
          <div className="mb-4">
            <div className="flex justify-between text-sm font-semibold text-orange-600">
              <span className="flex items-center"><TbCurrencyTaka />{budget[0].toLocaleString()}</span>
              <span className="flex items-center"><TbCurrencyTaka />{budget[1].toLocaleString()}</span>
            </div>
            <Slider
              range
              min={0}
              max={50000000}
              step={100000}
              defaultValue={budget}
              onChange={(value) => setBudget(value)}
              trackStyle={{ backgroundColor: "#f25c27", height: 5 }}
              handleStyle={{
                borderColor: "#f25c27",
                backgroundColor: "#f25c27",
              }}
            />
          </div>

          {/* Price Range Checkboxes */}
          <div className="text-sm font-semibold mb-2">What is your price range?</div>
          <div className="space-y-2">
            {priceRanges.map((item, index) => (
              <label key={index} className="flex justify-between items-center text-sm">
                <Checkbox />
                <span className="flex-1 ml-2 flex items-center"><TbCurrencyTaka />{item.label}</span>
                <span className="text-gray-500">{item.count}</span>
              </label>
            ))}
          </div>
        </div>
    </div>
  );
};

export default BudgetFilter;
