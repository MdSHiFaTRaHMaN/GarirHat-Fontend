import { Radio } from "antd";
import { useState } from "react";

const PremiumSellersFilter = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const populermodel = [
    { label: "Spinny", count: "30", value: "spinny" },
    { label: "Cars24", count: "45", value: "cars24" },
  ];

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={handleChange} value={selectedValue} className="space-y-2">
        {populermodel.map((item) => (
          <div key={item.value} className="flex justify-between items-center text-sm">
            <Radio value={item.value} />
            <span className="flex-1 ml-2">{item.label}</span>
            <span>{item.count}</span>
          </div>
        ))}
      </Radio.Group>
    </div>
  );
};

export default PremiumSellersFilter;
