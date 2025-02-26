import { Checkbox } from "antd";

const FuelTypeFilter = () => {
    const populermodel = [
        { label: "Petrol", count: "23"},
        { label: "Hybrid", count: "53"},
        { label: "Diesel", count: "73"},
        { label: "CNG", count: "42"},
        { label: "Electric", count: "12"},
        { label: "LPG", count: "913"},
      ];
  return (
    <div>
      <div className="space-y-2">
        {populermodel.map((item, index) => (
          <label
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <Checkbox />
            <span className="flex-1 ml-2">{item.label}</span>
            <span className="">{item.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FuelTypeFilter;
