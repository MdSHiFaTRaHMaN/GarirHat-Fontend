import { useState } from "react";
import { Collapse } from "antd";
import { CgOptions } from "react-icons/cg";
import { FaMinus, FaPlus } from "react-icons/fa";
import BudgetFilter from "./BudgetFilter";
import ModelFilter from "./ModelFilter";
import ModelYearFilter from "./ModelYearFilter";
import KilometerFilter from "./KilometerFilter";
import BodyTypeFilter from "./BodyTypeFilter";
import TransmissionFilter from "./TransmissionFilter";
import OwnershipFilter from "./OwnershipFilter";
import PremiumSellersFilter from "./PremiumSellersFilter";
import SitesFilter from "./SitesFilter";
import DiscountFilter from "./DiscountFilter";
import ColorFilter from "./ColorFilter";

const Sidebar = () => {
  const [activeKeys, setActiveKeys] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11"
  ]); // Default all open
  const [isCollapsed, setIsCollapsed] = useState(false); // Track collapse state

  const toggleCollapse = () => {
    if (isCollapsed) {
      setActiveKeys(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]); // Open all
    } else {
      setActiveKeys([]); // Close all
    }
    setIsCollapsed(!isCollapsed); // Toggle state
  };

  return (
    <>
      <div>
        <button
          onClick={toggleCollapse}
          className="border rounded-lg p-3 w-full font-semibold text-lg flex justify-center items-center gap-3"
        >
          <CgOptions />
          {isCollapsed ? "Expand all filters" : "Collapse all filters"}{" "}
          {/* Toggle text */}
        </button>
      </div>

      <Collapse
        className="my-3"
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "1",
            label: <span className="font-semibold text-[18px]">Budget</span>,
            children: <BudgetFilter />,
          },
        ]}
      />

      <Collapse
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "2",
            label: (
              <span className="font-semibold text-[18px]">Brand & Model</span>
            ),
            children: <ModelFilter />,
          },
        ]}
      />
      <Collapse
        className="my-3"
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "3",
            label: (
              <span className="font-semibold text-[18px]">Model Year</span>
            ),
            children: <ModelYearFilter />,
          },
        ]}
      />
      <Collapse
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "4",
            label: (
              <span className="font-semibold text-[18px]">
                Kilometer Driven
              </span>
            ),
            children: <KilometerFilter />,
          },
        ]}
      />
      <Collapse
        className="my-3"
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "5",
            label: <span className="font-semibold text-[18px]">Body Type</span>,
            children: <BodyTypeFilter />,
          },
        ]}
      />
      <Collapse
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "6",
            label: (
              <span className="font-semibold text-[18px]">Transmission</span>
            ),
            children: <TransmissionFilter />,
          },
        ]}
      />
      <Collapse
        className="my-3"
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "7",
            label: <span className="font-semibold text-[18px]">Ownership</span>,
            children: <OwnershipFilter />,
          },
        ]}
      />
      <Collapse
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "8",
            label: (
              <span className="font-semibold text-[18px]">Premium Sellers</span>
            ),
            children: <PremiumSellersFilter />,
          },
        ]}
      />
      <Collapse
        className="my-3"
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "9",
            label: <span className="font-semibold text-[18px]">Seats</span>,
            children: <SitesFilter />,
          },
        ]}
      />
      <Collapse
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "10",
            label: <span className="font-semibold text-[18px]">Discount</span>,
            children: <DiscountFilter />,
          },
        ]}
      />
      <Collapse
        className="my-3"
        activeKey={activeKeys}
        onChange={setActiveKeys}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
        items={[
          {
            key: "11",
            label: <span className="font-semibold text-[18px]">Colors</span>,
            children: <ColorFilter />,
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
