import { Checkbox, Collapse } from "antd";
import { useState } from "react";
import { useBrandandModel } from "../../api/api";
import OthersBrand from "./OthersBrand";
import { useSearchParams } from "react-router-dom";

const ModelFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { modelandBrand, isLoading } = useBrandandModel();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [activeKeys, setActiveKeys] = useState(["0"]);

  const handleBrandChange = (e, makeValue) => {
    const isChecked = e.target.checked;
    const currentMakes = searchParams.getAll("make"); // 🔹 আগের make গুলো রাখবে

    const updatedMakes = isChecked
      ? [...currentMakes, makeValue] // 🔹 নতুন make যোগ করা
      : currentMakes.filter((m) => m !== makeValue); // 🔹 আনচেক করলে সরানো হবে

    setSelectedBrands(updatedMakes);

    searchParams.delete("make");
    updatedMakes.forEach((m) => searchParams.append("make", m));

    setSearchParams(searchParams); // ✅ নতুন make সেট করা
  };

  const handleModelChange = (e, modelValue) => {
    const isChecked = e.target.checked;
    const currentModels = searchParams.getAll("model"); // 🔹 আগের model গুলো রাখবে

    const updatedModels = isChecked
      ? [...currentModels, modelValue] // 🔹 নতুন model যোগ করা
      : currentModels.filter((m) => m !== modelValue); // 🔹 আনচেক করলে সরানো হবে

    setSelectedModels(updatedModels);
    searchParams.delete("model");
    updatedModels.forEach((m) => searchParams.append("model", m));

    setSearchParams(searchParams); // ✅ নতুন model সেট করা
  };

  if (isLoading) {
    return <div>Loading..</div>;
  }

  const items = modelandBrand.data.map((item) => ({
    key: String(item.id),
    label: (
      <div className="flex items-center gap-3 hover:bg-gray-50 rounded-lg transition-all">
        <Checkbox
          onChange={(e) => handleBrandChange(e, item.brand_name)}
          checked={selectedBrands.includes(item.brand_name)}
          onClick={(e) => e.stopPropagation()}
        />
        <span className="font-medium text-gray-800 ml-2">
          {item.brand_name}
        </span>
      </div>
    ),
    children: (
      <div className="p-1 space-y-2">
        {item.models.map((model) => (
          <div
            key={model.id}
            className="flex items-center gap-2 hover:bg-gray-100 rounded-md transition-all"
          >
            <Checkbox
              onChange={(e) => handleModelChange(e, model.model_name)}
              checked={selectedModels.includes(model.model_name)} // ✅ চেক করা আছে কিনা তা চেক করা হচ্ছে
              onClick={(e) => e.stopPropagation()}
            />
            <span className="text-gray-700">{model.model_name}</span>
          </div>
        ))}
      </div>
    ),
    extra: (
      <span className="text-md font-semibold text-gray-500">
        {item.models.length}
      </span>
    ),
  }));

  return (
    <div className="w-full bg-white">
      <Collapse
        expandIconPosition="end"
        collapsible="icon"
        bordered={false}
        items={items}
        className="bg-white"
      />

      <Collapse
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        ghost
        collapsible="icon"
        items={[
          {
            key: "1",
            label: <span className="text-TextColor">Others Brands</span>,
            children: <OthersBrand />,
          },
        ]}
      />
    </div>
  );
};

export default ModelFilter;
