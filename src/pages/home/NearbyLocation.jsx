import CityBackground from "../../assets/images/cityBackground.svg";
import Dhaka from "../../assets/images/dhakacity2.jpeg";
import Barishal from "../../assets/images/barishalcity2.png";
import Khulna from "../../assets/images/khulnacity.jpg";
import Maymoysing from "../../assets/images/maymoysingcity.jpg";
import Rangpur from "../../assets/images/rangpur.jpg";
import Sylhet from "../../assets/images/Sylhetcity.jpg";
import Chattogram from "../../assets/images/chittagongcity.jpg";
import Rajshahi from "../../assets/images/Rajshahicity.jpg";

const locations = [
  { name: "Barishal", image: Barishal },
  { name: "Dhaka", image: Dhaka },
  { name: "Chittagong", image: Chattogram },
  { name: "Rajshahi", image: Rajshahi },
  { name: "Khulna", image: Khulna },
  { name: "Sylhet", image: Sylhet },
  { name: "Rangpur", image: Rangpur },
  { name: "Mymensingh", image: Maymoysing },
];

const NearbyLocation = () => {
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
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {/* Image Wrapper with Fixed Height */}
              <div className="w-full h-40">
                <img
                  src={location.image}
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
