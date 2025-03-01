import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useAllBrand } from "../api/api";

const AutoSuggest = () => {
  const { allBrand, isLoading } = useAllBrand();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) {
      const filteredSuggestions = allBrand.filter((brand) =>
        brand.brand_name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full border px-4 py-3 w-1/2 relative">
        <select className="bg-gray-100 text-gray-600 text-sm outline-none">
          <option value="all" className="p-3">All</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        <span className="w-[1px] h-[20px] bg-gray-800"></span>
        <FiSearch className="text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search for a car brand"
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-transparent flex-grow px-2 text-sm outline-none"
        />
      </div>

      {/* Suggestion List */}
      {suggestions.length > 0 && (
        <ul className="absolute bg-white shadow-lg rounded-md w-1/2 mt-1 overflow-hidden z-50">
          {suggestions.map((brand, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3 text-gray-700"
              onClick={() => handleSuggestionClick(brand.brand_name)}
            >
              {brand.image && (
                <img src={brand.image} alt={brand.brand_name} className="w-6 h-6 object-contain" />
              )}
              {brand.brand_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggest;
