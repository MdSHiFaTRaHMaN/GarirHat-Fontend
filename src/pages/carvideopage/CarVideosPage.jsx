import LatestCars from "../similarcomponent/LatestCars";
import UpcomingCar from "../similarcomponent/UpcomingCar";
import CarVideo from "./CarVideo";
import UpNextVideos from "./UpnextVideos";

const CarVideosPage = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto p-5 flex">
      <div className="w-full lg:w-9/12">
        <CarVideo />
        <UpNextVideos />
      </div>
      <div className="w-full lg:w-3/12">
        <LatestCars />
        <UpcomingCar />
      </div>
    </div>
  );
};

export default CarVideosPage;
