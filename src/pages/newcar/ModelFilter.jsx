import { Checkbox, Collapse } from "antd";
import { useState } from "react";
import { useBrandandModel } from "../../api/api";
import OthersBrand from "./OthersBrand";


const ModelFilter = () => {
  const { modelandBrand,  isLoading } = useBrandandModel();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  const [activeKeys, setActiveKeys] = useState([
    "0"
  ]);


  // Handle Brand Selection
  const handleBrandChange = (e, brand) => {
    const isChecked = e.target.checked;
    setSelectedBrands((prev) =>
      isChecked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  // Handle Model Selection
  const handleModelChange = (e, brand, model) => {
    const isChecked = e.target.checked;
    const newSelection = { brand, model };

    setSelectedModels((prev) =>
      isChecked
        ? [...prev, newSelection]
        : prev.filter((item) => item.model !== model)
    );
  };

  if(isLoading){
    return <div>Loading..</div>
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
              onChange={(e) =>
                handleModelChange(e, item.brand_name, model.model_name)
              }
              checked={selectedModels.some((m) => m.model === model.model_name)}
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
            label: (
              <span className="text-TextColor">Others Brands</span>
            ),
            children: <OthersBrand />,
          },
        ]}
      />

     
    </div>
  );
};

export default ModelFilter;
