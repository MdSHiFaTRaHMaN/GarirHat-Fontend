import ShowAllCar from "./ShowAllCar";
import Sidebar from "./Sidebar";

const AllVehiclePage = () => {
  return (
    <div className="w-full lg:w-11/12 mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 p-1">
          <Sidebar />
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
