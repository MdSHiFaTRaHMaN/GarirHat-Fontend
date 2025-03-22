import LatestCars from "../similarcomponent/LatestCars";
import UpcomingCar from "../similarcomponent/UpcomingCar";
import CarVideo from "./CarVideo";
import UpNextVideos from "./UpnextVideos";

const CarVideosPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-2 flex flex-col lg:flex-row gap-6">
      {/* Left Section - Video Content */}
      <div className="w-full lg:w-9/12">
        <CarVideo />
        <UpNextVideos />
      </div>

      {/* Right Section - Sidebar (Latest Cars & Upcoming Cars) */}
      <div className="w-full lg:w-3/12 space-y-6">
        <LatestCars />
        <UpcomingCar />
      </div>
    </div>
  );
};

export default CarVideosPage;
