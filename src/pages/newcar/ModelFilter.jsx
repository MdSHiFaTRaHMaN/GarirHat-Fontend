import { Checkbox } from "antd";

const ModelFilter = () => {
  const populermodel = [
    { label: "Maruti", count: 30 },
    { label: "Tata", count: 20 },
    { label: "Toyata", count: 50 },
    { label: "Mahindra", count: 30 },
    { label: "BMW", count: 40 },
  ];
  const Othermodel = [
    { label: "Adi", count: 30 },
    { label: "Honda", count: 80 },
    { label: "Roels Royes", count: 20 },
    { label: "Lemborginni", count: 50 },
    { label: "Mahindra", count: 30 },
    { label: "Palsur", count: 80 },
    { label: "Discover", count: 40 },
  ];
  return (
    <div>
      <div className="text-sm text-gray-400 mb-2">Popular</div>
      <div className="space-y-2">
        {populermodel.map((item, index) => (
          <label
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <Checkbox />
            <span className="flex-1 ml-2">{item.label}</span>
            <span className="text-gray-800">{item.count}</span>
          </label>
        ))}
      </div>
      <div className="text-sm text-gray-400 m-2">Other</div>
      <div className="space-y-2">
        {Othermodel.map((item, index) => (
          <label
            key={index}
            className="flex justify-between items-center text-sm"
          >
            <Checkbox />
            <span className="flex-1 ml-2">{item.label}</span>
            <span className="text-gray-800">{item.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ModelFilter;
