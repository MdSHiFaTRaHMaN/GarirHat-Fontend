import { useEffect, useState } from "react";
import { FaCaretDown, FaTimes } from "react-icons/fa";
import BudgetFilter from "./BudgetFilter";
import ColorFilter from "./ColorFilter";
import ModelFilter from "./ModelFilter";
import ModelYearFilter from "./ModelYearFilter";
import VehicleCondition from "./VehicleCondition";
import KilometerFilter from "./KilometerFilter";
import BodyTypeFilter from "./BodyTypeFilter";
import FuelTypeFilter from "./FuelTypeFilter";
import TransmissionFilter from "./TransmissionFilter";
import SitesFilter from "./SitesFilter";
import DiscountFilter from "./DiscountFilter";
import Logo from "../../assets/images/garirhatfinallogo.png";
import { Link } from "react-router-dom";

const MobileView = () => {
  const [showLogo, setShowLogo] = useState(false);

  // Object to control which filter is open
  const [openFilter, setOpenFilter] = useState(null);

  // Function to toggle a specific filter
  const toggleFilter = (filter) => {
    setOpenFilter(openFilter === filter ? null : filter);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 116) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-2 relative">
      {/* Filter Buttons */}
      {/* Logo Section */}
      {/* <div className="flex justify-center items-center space-x-2 border-b">
        <Link to="/">
          {showLogo && (
            <img
              src={Logo}
              alt="Logo"
              width={170}
              className="transition-opacity duration-500 ease-in-out opacity-100 mb-9"
            />
          )}
        </Link>
      </div> */}
      <div className="flex gap-2 overflow-x-auto bg-white mt-1">
        <button
          onClick={() => toggleFilter("budget")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Budget <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("vehicle_condition")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Vehicle Conditon <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("model_filter")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Brand + Model <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("year")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Model Year <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("kelometer")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Kilometer Driven <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("body_type")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Body Type <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("fuel_type")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Fuel Type Filter <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("transmission")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Transmission <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("seats")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Seats Filter <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("discount")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Discount <FaCaretDown />
        </button>
        <button
          onClick={() => toggleFilter("colors")}
          className="border border-TextColor flex items-center text-sm px-4 py-2 rounded text-black font-medium whitespace-nowrap"
        >
          Colors Filter <FaCaretDown />
        </button>
      </div>

      {/* Budget Filter */}
      {openFilter === "budget" && (
        <div className="bg-blue-100 p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Choose your budget</h3>
          <BudgetFilter />
        </div>
      )}

      {/* Vehicle Filter */}
      {openFilter === "vehicle_condition" && (
        <div className="bg-blue-100 p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Vehicle Condition</h3>
          <VehicleCondition />
        </div>
      )}

      {/* model Filter */}
      {openFilter === "model_filter" && (
        <div className="border border-TextColor p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Brand & Model</h3>
          <ModelFilter />
        </div>
      )}

      {/* Year Filter */}
      {openFilter === "year" && (
        <div className="border border-TextColor p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Choose Year</h3>
          <ModelYearFilter />
        </div>
      )}
      {/* Kilometer Filter */}
      {openFilter === "kelometer" && (
        <div className="border border-TextColor p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Kilometer Driven</h3>
          <KilometerFilter />
        </div>
      )}
      {/* Body Type Filter */}
      {openFilter === "body_type" && (
        <div className="border border-TextColor p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Choose Body Type</h3>
          <BodyTypeFilter />
        </div>
      )}
      {/* FuelTypeFilter Filter */}
      {openFilter === "fuel_type" && (
        <div className="bg-blue-100 p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Choose Fuel Type</h3>
          <FuelTypeFilter />
        </div>
      )}
      {/* Transmission Filter */}
      {openFilter === "transmission" && (
        <div className="bg-blue-100 p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Choose Transmission</h3>
          <TransmissionFilter />
        </div>
      )}
      {/* seats Filter */}
      {openFilter === "seats" && (
        <div className="bg-blue-100 p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Choose Seats</h3>
          <SitesFilter />
        </div>
      )}
      {/* Color Filter */}
      {openFilter === "discount" && (
        <div className="bg-blue-100 p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Discount</h3>
          <DiscountFilter />
        </div>
      )}
      {/* Color Filter */}
      {openFilter === "colors" && (
        <div className="bg-blue-100 p-4 mt-4 rounded-lg relative">
          <button
            onClick={() => setOpenFilter(null)}
            className="absolute top-2 right-2 text-black"
          >
            <FaTimes />
          </button>
          <h3 className="font-semibold text-lg">Color</h3>
          <ColorFilter />
        </div>
      )}
    </div>
  );
};

export default MobileView;
