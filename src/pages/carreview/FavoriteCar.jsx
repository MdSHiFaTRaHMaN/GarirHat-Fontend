import { Card, Rate, Select, Button } from "antd";
import { LiaLightbulb } from "react-icons/lia";
import CarShadow from "../../assets/images/car-review-iamge.png";
import { Link } from "react-router-dom";

const { Option } = Select;

const cars = [
  "Kia Syros",
  "Skoda Kylq",
  "Mahindra",
  "Toyota",
  "Mahindra",
  "Tata Punch",
  "Hyundai Creta",
  "Maruti Dzire",
  "Hyundai Creta",
  "Maruti Ertiga",
  "Hyundai Creta",
];

const FavoriteCar = () => {
  return (
    <div className="p-6 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 border shadow-lg rounded-lg my-3">
      {/* Left Section */}
      <div className="w-full lg:w-8/12">
        <h2 className="text-2xl font-bold mb-4">Rate and review your favorite car</h2>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars.map((car, index) => (
            <Card key={index} className="shadow-md p-3 flex items-center">
              <Link to="/user-review" className="flex gap-2 items-center">
                <img src={CarShadow} width={70} height={100} alt={car} className="rounded-sm" />
                <div>
                  <h3 className="font-semibold text-lg">{car}</h3>
                  <Rate className="text-xl text-TextColor" allowHalf defaultValue={3.5} />
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Car Selection */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Select Your Car</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <Select className="w-full md:w-1/2 h-[45px]" placeholder="Select Brand">
              <Option value="Kia">Kia</Option>
              <Option value="Skoda">Skoda</Option>
              <Option value="Mahindra">Mahindra</Option>
              <Option value="Toyota">Toyota</Option>
            </Select>
            <Select className="w-full md:w-1/2 h-[45px]" placeholder="Select Model">
              {cars.map((car, index) => (
                <Option key={index} value={car}>
                  {car}
                </Option>
              ))}
            </Select>
            <Button type="primary" className="w-full md:w-auto bg-ButtonColor hover:!bg-ButtonHover font-semibold py-[22px]">
              Rate and Review
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section (Review Tips) */}
      <div className="w-full lg:w-4/12">
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <LiaLightbulb className="text-TextColor text-2xl" /> Tips for a Good Review
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-3 text-sm sm:text-base">
            <li>Tell us about your buying experience and why you chose this car.</li>
            <li>List out the pros and cons.</li>
            <li>Talk about performance, mileage, comfort, etc.</li>
            <li>Share after-sales service experience.</li>
            <li>Give a meaningful title to your review.</li>
            <li>Avoid using all caps and sharing personal details.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCar;
