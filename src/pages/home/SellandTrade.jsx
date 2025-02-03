
import Img from "../../assets/images/trave.jpg";

const SellandTrade = () => {
  return (
    <div className="bg-white w-full lg:w-10/12 mx-auto py-12  px-6 lg:px-16">
      {/* CTA Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="rounded-lg overflow-hidden">
          <img src={Img} alt="User browsing" className="w-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center justify-center text-center h-full">
          <h3 className="text-5xl font-semibold text-gray-800 mb-4">
            Looking to do more online?
          </h3>
          <p className="text-gray-600 mb-6">
            Finance, reserve, or even buy 100% online.
          </p>
          <button className="p-3 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600">
            Lern More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellandTrade;
