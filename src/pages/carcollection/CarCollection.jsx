import LatestCars from "../similarcomponent/LatestCars";
import PopulerCar from "../similarcomponent/PopulerCar";
import CollectionBannar from "./CollectionBannar";
import CollectionList from "./CollectionList";
import MostSearchCar from "./MostSearchCar";

const CarCollection = () => {
  return (
    <div>
      <CollectionBannar />
      <div className="grid lg:flex w-full lg:w-10/12 mx-auto p-5">
        <div className="w-full lg:w-8/12">
          <CollectionList />
        </div>
        <div className="w-full lg:w-4/12">
          <LatestCars />
          <PopulerCar />
        </div>
      </div>
      <MostSearchCar />
    </div>
  );
};

export default CarCollection;
