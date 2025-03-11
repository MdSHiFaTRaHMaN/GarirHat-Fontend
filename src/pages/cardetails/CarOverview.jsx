import { BsCardChecklist, BsFuelPumpDieselFill } from "react-icons/bs";
import {
  FaAudioDescription,
  FaCalendarAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              {" "}
              <FaRegCalendarAlt className="text-white text-xl" />
            </span>
            Registration Year:{" "}
            <span className="font-semibold">
              {singleVechile.registration_year || "N/A"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              <BsFuelPumpDieselFill className="text-white text-xl" />
            </span>
            Fuel Type:{" "}
            <span className="font-semibold">
              {singleVechile.fuel_type || "N/A"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              <MdAirlineSeatReclineNormal className="text-white text-xl" />
            </span>
            Seats:{" "}
            <span className="font-semibold">
              {singleVechile.seating_capacity || "N/A"} Seats
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              <GiCarDoor className="text-white text-xl" />
            </span>
            Doors:{" "}
            <span className="font-semibold">
              {singleVechile.doors || "N/A"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              <BsCardChecklist className="text-white text-xl" />
            </span>
            RTO:{" "}
            <span className="font-semibold">{singleVechile.rtn || "N/A"}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              <FaUserLarge className="text-white text-xl" />
            </span>
            Ownership:{" "}
            <span className="font-semibold">
              {singleVechile.vehicle_condition || "N/A"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              <TbSettingsSpark className="text-white text-xl" />
            </span>
            Engine:
            <span className="font-semibold">
              {" "}
              {singleVechile.engine_capacity_cc || "N/A"} cc
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              <FaCalendarAlt className="text-white text-xl" />
            </span>
            Year :{" "}
            <span className="font-semibold">
              {singleVechile.year_of_manufacture}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className=" bg-TextColor rounded-full p-1.5">
              <RiSettings2Fill className="text-white text-xl" />
            </span>
            Transmission:{" "}
            <span className="font-semibold">
              {singleVechile.transmission || "N/A"}
            </span>
          </p>
        </div>
        <div className="mt-4">
          <h2 className="flex flex-wrap items-start gap-2">
            {/* Icon */}
            <span className="bg-TextColor rounded-full p-2 flex-shrink-0">
              <FaAudioDescription className="text-white text-xl" />
            </span>

            {/* Description Text */}
            <div className="flex-1 break-words">
              <span className="font-semibold">Description:</span>
              <p className="text-gray-700 mt-1">
                {singleVechile.description || "N/A"}
              </p>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;
