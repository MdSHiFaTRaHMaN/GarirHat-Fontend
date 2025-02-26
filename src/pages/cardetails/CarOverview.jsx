import { BsCardChecklist, BsFuelPumpDieselFill } from "react-icons/bs";
import { FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { RiSettings2Fill } from "react-icons/ri";
import { TbSettingsSpark } from "react-icons/tb";

const CarOverview = ({ singleVechile }) => {
  return (
    <div className="p-6 bg-white border rounded">
      {/* OVERVIEW */}
      <div className="bg-white mb-6" id="overview">
        <h2 className="text-xl font-semibold mb-4">Car Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          <p className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-TextColor" /> Registration Year:{" "}
            <span className="font-semibold">
              {singleVechile.registration_year || "N/A"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <BsFuelPumpDieselFill className="text-TextColor" />
            Fuel Type:{" "}
            <span className="font-semibold">
              {singleVechile.fuel_type || "N/A"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <MdAirlineSeatReclineNormal className="text-TextColor" /> Seats:{" "}
            <span className="font-semibold">
              {singleVechile.seating_capacity || "N/A"} Seats
            </span>
          </p>
          <p className="flex items-center gap-2">
            <GiCarDoor  className="text-TextColor" />
            Doors:{" "}
            <span className="font-semibold">
              {singleVechile.doors || "N/A"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <BsCardChecklist className="text-TextColor" />
            RTO:{" "}
            <span className="font-semibold">{singleVechile.rtn || "N/A"}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaUserLarge className="text-TextColor" />
            Ownership:{" "}
            <span className="font-semibold">
              {singleVechile.vehicle_condition || "N/A"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <TbSettingsSpark className="text-TextColor" />
            Engine:
            <span className="font-semibold">
              {" "}
              {singleVechile.engine_capacity_cc || "N/A"} cc
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-TextColor" />
            Year of Manufacture:{" "}
            <span className="font-semibold">
              {singleVechile.year_of_manufacture}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <RiSettings2Fill className="text-TextColor" />
            Transmission:{" "}
            <span className="font-semibold">
              {singleVechile.transmission || "N/A"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;
