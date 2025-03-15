import CityBackground from "../../assets/images/cityBackground.svg";
import { useAlDivition } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";
import { useNavigate, useSearchParams } from "react-router-dom";

const NearbyLocation = () => {
  const { alDivition, isLoading } = useAlDivition();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleLocation = (location) =>{
    console.log("Location", location)
    localStorage.setItem("selectedLocation", location);
    const newSearchParams = new URLSearchParams(searchParams); // Create a new instance
    const currentMakes = newSearchParams.getAll("make"); // Preserve previous makes

    // Avoid duplicates
    if (!currentMakes.includes(location)) {
      newSearchParams.append("make", location);
    }

    setSearchParams(newSearchParams); // ✅ Correct way to update search params

    navigate(`/advanced-search/?district=${location}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div
      className="w-full bg-gray-50 py-12 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${CityBackground})` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Get Trusted Used Cars Nearby
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {isLoading
            ? <LoadingWhile />
            : alDivition.map((location, index) => (
                <div
                  onClick={() => handleLocation(location.name)}
                  key={index}
                  className="flex flex-col items-center bg-white shadow-lg rounded overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  {/* Image Wrapper with Fixed Height */}
                  <div className="w-full h-40">
                    <img
                      src={location.logo}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Location Text */}
                  <div className="p-4 w-full text-center">
                    <p className="text-xl font-semibold text-gray-800">
                      {location.name}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyLocation;
