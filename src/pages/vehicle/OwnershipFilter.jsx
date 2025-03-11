import { Checkbox } from "antd";

const OwnershipFilter = () => {
    const populermodel = [
        { label: "First Owner", count: 30  },
        { label: "Second Owner", count: 60 },
        { label: "Third Owner and More", count: 70 },
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
            <span className="text-gray-500">{item.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default OwnershipFilter;
