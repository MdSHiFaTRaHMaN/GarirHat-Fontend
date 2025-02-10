import { Checkbox } from "antd";

const TransmissionFilter = () => {
    const populermodel = [
        { label: "Menual", count: "23"},
        { label: "Automatic", count: "43"},
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

export default TransmissionFilter;
