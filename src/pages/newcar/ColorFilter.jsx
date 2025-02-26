import { Checkbox } from "antd";

const colors = [
  { name: "White", color: "#ffffff", count: 69 },
  { name: "Silver", color: "#c0c0c0", count: 43 },
  { name: "Red", color: "#ff0000", count: 13 },
  { name: "Blue", color: "#0000ff", count: 11 },
  { name: "Brown", color: "#8b4513", count: 10 },
  { name: "Black", color: "#000000", count: 7 },
  { name: "Orange", color: "#ff8000", count: 2 },
  { name: "Green", color: "#008000", count: 2 },
  { name: "Maroon", color: "#800000", count: 2 },
  { name: "Yellow", color: "#FFFF00", count: 2 },
  { name: "Violet", color: "#8F00FF", count: 2 },
];

const ColorFilter = () => {

  return (
    <div className="">
        <div className="space-y-2">
          {colors.map((color, index) => (
            <div key={index} className="flex items-center gap-2">
              <Checkbox />
              <div
                className="w-4 h-4 border rounded"
                style={{ backgroundColor: color.color }}
              ></div>
              <span className="flex-1 text-gray-700">{color.name}</span>
              <span className="text-gray-500">{color.count}</span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ColorFilter;
