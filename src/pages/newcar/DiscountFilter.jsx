import { Radio } from "antd";
import { useState, useCallback } from "react";

const DiscountFilter = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  // Discount options with labels and counts
  const discountOptions = [
    { label: "Upto ₹20,000", count: "9", value: "one" },
    { label: "Upto ₹50,000", count: "51", value: "two" },
    { label: "Above ₹1,00,000", count: "43", value: "three" },
    { label: "All Discounts", count: "420", value: "all" },
  ];

  // Memoized change handler to optimize re-renders
  const handleChange = useCallback((e) => {
    setSelectedValue(e.target.value);
  }, []);

  return (
    <div>
      <Radio.Group
        onChange={handleChange}
        value={selectedValue}
        className="space-y-2"
      >
        {discountOptions.map((item) => (
          <div
            key={item.value}
            className="flex justify-between items-center text-sm"
          >
            <Radio value={item.value} />
            <span className="flex-1 ml-2">{item.label}</span>
          </div>
        ))}
      </Radio.Group>
    </div>
  );
};

export default DiscountFilter;
