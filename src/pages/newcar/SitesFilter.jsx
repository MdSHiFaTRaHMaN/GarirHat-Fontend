import { Checkbox } from "antd";

const SitesFilter = () => {
    const populermodel = [
        { label: "4 Seater", count: 30  },
        { label: "5 Seater", count: 60 },
        { label: "6 Seater", count: 70 },
        { label: "7 Seater", count: 20 },
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

export default SitesFilter;
