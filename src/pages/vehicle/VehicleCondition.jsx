import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const vehicleCondition = [
  { label: "New", count: "23" },
  { label: "Used", count: "53" },
  { label: "Re-Condition", count: "73" },
  { label: "Pre-Own", count: "42" },
];

const VehicleCondition = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCondition, setSelectedCondition] = useState([]);


  const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const vehicle_condition = params.getAll("vehicle_condition");



  // ✅ ইউআরএল থেকে আগের vehicle_condition ভ্যালু রিড করে স্টেটে সেট করা
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const vehicle_condition = params.getAll("vehicle_condition");
    setSelectedCondition(vehicle_condition);
  }, [location.search]);


















  const handleChange = (e, conditionValue) => {
    const isChecked = e.target.checked;
    console.log("ischecked", isChecked, conditionValue)
    const currentCondition = Array.from(new Set(searchParams.getAll("vehicle_condition"))); // 🔹 ডুপ্লিকেট রিমুভ

    const updatedCondition = isChecked
      ? [...currentCondition, conditionValue]
      : currentCondition.filter((m) => m !== conditionValue);

      if (updatedCondition.length === 0) {
        searchParams.delete("vehicle_condition");
      } else {
        searchParams.delete("vehicle_condition");
        updatedCondition.forEach((m) => searchParams.append("vehicle_condition", m));
      }
  
      setSearchParams(searchParams);

    setSelectedCondition(updatedCondition);

    // ✅ যদি কোনো `vehicle_condition` না থাকে, তাহলে URL থেকে এটি মুছে ফেলবে
    // if (updatedCondition.length === 0) {
    //   searchParams.delete("vehicle_condition");
    // } else {
    //   searchParams.delete("vehicle_condition");
    //   updatedCondition.forEach((m) => searchParams.append("vehicle_condition", m));
    // }

    // setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="space-y-2">
        {vehicleCondition.map((condition, index) => (
          <label key={index} className="flex justify-between items-center text-sm">
            <Checkbox
              onChange={(e) => handleChange(e, condition.label)}
              checked={selectedCondition.includes(condition.label)} // ✅ আগেই চেক করা থাকবে
              onClick={(e) => e.stopPropagation()}
            />
            <span className="flex-1 ml-2">{condition.label}</span>
            <span className="">{condition.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VehicleCondition;
