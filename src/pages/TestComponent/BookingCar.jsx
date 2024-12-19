import { DatePicker, TimePicker } from "antd";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { LuSearchCheck } from "react-icons/lu";

const BookingCar = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onTimeChange = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <div className="bg-gray-100 py-7">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-full lg:w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 justify-around gap-4 items-center">
          {/* Pickup Location */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-700" />
              Pickup Location
            </label>
            <p className="text-gray-700 font-medium block">
              847 Delaware Avenue, San Francisco, CA
            </p>
            {/* <button className="mt-2 text-blue-700 text-sm font-semibold hover:underline">
              I want to deliver in a different place
            </button> */}
          </div>

          {/* Pickup Date */}
          <div className="flex justify-center flex-col">
            <label className="text-sm text-gray-500 mb-1 flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-700" />
              Pickup Date
            </label>
            <DatePicker onChange={onChange} />
          </div>

          {/* Pickup Time */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1 flex items-center">
              <FaClock className="mr-2 text-blue-700" />
              Pickup Time
            </label>
            <TimePicker onChange={onTimeChange} />
          </div>

          {/* Return Date */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1 flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-700" />
              Return Date
            </label>
            <DatePicker onChange={onChange} />
          </div>

          {/* Return Time */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1 flex items-center">
              <FaClock className="mr-2 text-blue-700" />
              Return Time
            </label>
            <TimePicker onChange={onTimeChange} />
          </div>
          {/* Search Button */}
          <div className="flex justify-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-3 rounded flex items-center">
              <LuSearchCheck  className="text-3xl text-orange-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCar;
