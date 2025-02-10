import { Tabs } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const CarOverview = () => {
  const handleTabChange = (key) => {
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Tabs */}
      <Tabs
        defaultActiveKey="1"
        className="mb-4 sticky top-0 bg-white z-40"
        onChange={handleTabChange}
      >
        <TabPane tab="OVERVIEW" key="overview" />
        <TabPane tab="FEATURES" key="features" />
        <TabPane tab="SPECIFICATIONS" key="specifications" />
        <TabPane tab="ADDON SERVICES" key="addon-services" />
        {/* <TabPane tab="RECOMMENDED USED CARS" key="Recommended-Used-Cars" /> */}
      </Tabs>

      {/* OVERVIEW */}
      <div className="bg-white mb-6" id="overview">
        <h2 className="text-xl font-semibold mb-4">Car Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          <p>
            📅 Registration Year:{" "}
            <span className="font-semibold">Dec 2024</span>
          </p>
          <p>
            🛡️ Insurance: <span className="font-semibold">Comprehensive</span>
          </p>
          <p>
            ⛽ Fuel Type: <span className="font-semibold">Petrol</span>
          </p>
          <p>
            🚗 Seats: <span className="font-semibold">5 Seats</span>
          </p>
          <p>
            📏 Kms Driven: <span className="font-semibold">3,406 Kms</span>
          </p>
          <p>
            🏢 RTO: <span className="font-semibold">Kolkata</span>
          </p>
          <p>
            👤 Ownership: <span className="font-semibold">First Owner</span>
          </p>
          <p>
            🔧 Engine Displacement:{" "}
            <span className="font-semibold">2998 cc</span>
          </p>
          <p>
            ⚙️ Transmission: <span className="font-semibold">Automatic</span>
          </p>
          <p>
            📅 Year of Manufacture: <span className="font-semibold">2024</span>
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-white mb-6" id="features">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p>
            <CheckCircleOutlined className="text-green-500 mr-2" /> 360 Degree
            Camera
          </p>
          <p>
            <CheckCircleOutlined className="text-green-500 mr-2" /> Memory
            Function For Seats
          </p>
          <p>
            <CheckCircleOutlined className="text-green-500 mr-2" /> Adjustable
            Headrest
          </p>
          <p>
            <CheckCircleOutlined className="text-green-500 mr-2" /> Panoramic
            Sunroof
          </p>
        </div>
        <p className="text-red-500 mt-2 cursor-pointer">View all Features ➤</p>
      </div>

      {/* SPECIFICATIONS */}
      <div className="bg-white" id="specifications">
        <h2 className="text-xl font-semibold mb-4">Specifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
          <p>
            🛠️ Engine: <span className="font-semibold">2998 cc</span>
          </p>
          <p>
            ⚡ Power: <span className="font-semibold">375.48 bhp</span>
          </p>
          <p>
            ⚙️ Transmission: <span className="font-semibold">Automatic</span>
          </p>
          <p>
            🚀 Top Speed: <span className="font-semibold">243 kmph</span>
          </p>
          <p>
            🔧 Drive Type: <span className="font-semibold">4WD</span>
          </p>
          <p>
            ⛽ Fuel: <span className="font-semibold">Petrol</span>
          </p>
        </div>
        <p className="text-red-500 mt-2 cursor-pointer">
          View all Specifications ➤
        </p>
      </div>
    </div>
  );
};

export default CarOverview;
