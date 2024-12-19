import { useState } from "react";
import { Select, Space } from "antd";
import { RiArrowUpDownLine } from "react-icons/ri";

const FilterCar = () => {
  // Options for the filters
  const gearTypes = ["Automatic", "Manual"];
  const fuelTypes = ["Petrol", "Diesel", "Electric"];
  const brands = ["Toyota", "BMW", "Tesla", "Audi"];
  const vehicleClasses = ["Sedan", "SUV", "Hatchback", "Truck"];
  const rentalCompanies = ["Hertz", "Avis", "Enterprise", "Sixt"];

  // State for the filters
  const [selectedGearType, setSelectedGearType] = useState(gearTypes[0]);
  const [selectedFuelType, setSelectedFuelType] = useState(fuelTypes[0]);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [sortOption, setSortOption] = useState(null);
  const [selectedVehicleClass, setSelectedVehicleClass] = useState(
    vehicleClasses[0]
  );
  const [selectedRentalCompany, setSelectedRentalCompany] = useState(
    rentalCompanies[0]
  );

  const sortOptions = [
    { label: "Price (Low to High)", value: "priceLowToHigh" },
    { label: "Price (High to Low)", value: "priceHighToLow" },
    { label: "Rating", value: "rating" },
    { label: "Popularity", value: "popularity" },
  ];
  const handleClearFilters = () => {
    setSelectedGearType(gearTypes[0]);
    setSelectedFuelType(fuelTypes[0]);
    setSelectedBrand(brands[0]);
    setSelectedVehicleClass(vehicleClasses[0]);
    setSelectedRentalCompany(rentalCompanies[0]);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6 max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-between">
      {/* Filter Inputs */}
      <Space wrap>
        <Select
          value={selectedGearType}
          onChange={(value) => setSelectedGearType(value)}
          options={gearTypes.map((type) => ({ label: type, value: type }))}
          className="w-32"
          placeholder="Gear Type"
        />
        <Select
          value={selectedFuelType}
          onChange={(value) => setSelectedFuelType(value)}
          options={fuelTypes.map((type) => ({ label: type, value: type }))}
          className="w-32"
          placeholder="Fuel Type"
        />
        <Select
          value={selectedBrand}
          onChange={(value) => setSelectedBrand(value)}
          options={brands.map((brand) => ({ label: brand, value: brand }))}
          className="w-32"
          placeholder="Brands"
        />
        <Select
          value={selectedVehicleClass}
          onChange={(value) => setSelectedVehicleClass(value)}
          options={vehicleClasses.map((type) => ({
            label: type,
            value: type,
          }))}
          className="w-32"
          placeholder="Vehicle Class"
        />
        <Select
          value={selectedRentalCompany}
          onChange={(value) => setSelectedRentalCompany(value)}
          options={rentalCompanies.map((company) => ({
            label: company,
            value: company,
          }))}
          className="w-40"
          placeholder="Rental Companies"
        />
        <button
          className="px-4 py-1 bg-gray-100 text-gray-700 border rounded-md hover:bg-gray-200"
          onClick={handleClearFilters}
        >
          Clear All Filters
        </button>
      </Space>

      {/* Sort Button */}
      <div className="flex items-center gap-2 px-4 py-2">
        <RiArrowUpDownLine className="text-gray-700" />
        <Select
          value={sortOption}
          onChange={(value) => setSortOption(value)}
          options={sortOptions}
          placeholder="Sort by"
          className="w-48"
        />
      </div>
    </div>
  );
};

export default FilterCar;
