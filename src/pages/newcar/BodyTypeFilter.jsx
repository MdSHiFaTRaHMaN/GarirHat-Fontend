import Carbody from "../../assets/images/carbody.png"
import { Checkbox } from "antd";

const bodyTypes = [
  { label: "Hatchback", count: 791, img: Carbody },
  { label: "SUV", count: 397, img: Carbody },
  { label: "Sedan", count: 374, img: Carbody },
  { label: "MUV", count: 73, img: Carbody },
  { label: "Minivan", count: 4, img: Carbody },
  { label: "Pickup", count: 5, img: Carbody },
];

const BodyTypeFilter = () => {

  return (
    <div className="bg-white w-72">
      {/* Body Type List */}
      <div className="space-y-1">
        {bodyTypes.map((type, index) => (
          <label key={index} className="flex items-center space-x-3 cursor-pointer">
            <Checkbox />
            <img src={type.img} alt={type.label} className="w-16 h-12 object-cover" />
            <span className="flex-1">{type.label}</span>
            <span className="text-gray-500">{type.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BodyTypeFilter;
