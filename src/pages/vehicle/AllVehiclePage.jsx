import MobileView from "./MobileView";
import ShowAllCar from "./ShowAllCar";
import Sidebar from "./Sidebar";

const AllVehiclePage = () => {
  return (
    <div className="w-full lg:w-11/12 mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 p-1 -top-3 sticky z-30">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="bg-white py-0.5 shadow-md block lg:hidden">
            <MobileView />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <ShowAllCar />
        </div>
      </div>
    </div>
  );
};

export default AllVehiclePage;
