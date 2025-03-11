import { Radio } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const discountOptions = [
  { label: "Upto ৳20,000", count: "9", value: [0, 20000] },
  { label: "Upto ৳50,000", count: "51", value: [0, 50000] },
  { label: "Above ৳1,00,000", count: "43", value: [100000, 10000000] },
  { label: "All Discounts", count: "420", value: [0, 10000000] },
];

const DiscountFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(null);

  const handleRadioChange = (e) => {
    setValue(e.target.value);

    const selectedRange = discountOptions.find(
      (range) => range.value === e.target.value
    );
    if (selectedRange) {
      searchParams.set("start_discount_price", selectedRange.value[0]);
      searchParams.set("end_discount_price", selectedRange.value[1]);
      setSearchParams(searchParams);
    }
  };

  return (
    <div>
      <Radio.Group
        onChange={handleRadioChange}
        value={value}
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        {discountOptions.map((range) => (
          <Radio key={range.value} value={range.value}>
            {range.label} ({range.count})
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default DiscountFilter;
