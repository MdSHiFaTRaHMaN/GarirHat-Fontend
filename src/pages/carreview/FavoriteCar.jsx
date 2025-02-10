import { Card, Rate, Select, Button } from "antd";
import { FaCar } from "react-icons/fa";
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
    <div className="p-6 w-full lg:w-10/12 mx-auto flex gap-3 border shadow-lg rounded-lg my-3">
      <div className="w-full lg:w-8/12">
        <h2 className="text-2xl font-bold mb-4">
          Rate and review your favorite car
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars.map((car, index) => (
            <Card key={index} className="shadow-md p-2 flex items-center">
              <Link to="/user-review" className="flex gap-2">
                <img
                  src={CarShadow}
                  width={70}
                  height={100}
                  alt=""
                  className="rounded-sm"
                />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{car}</h3>
                  <Rate className="text-xl" allowHalf defaultValue={3.5} />
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Select Your Car</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <Select
              className="w-full md:w-1/2 h-[45px]"
              placeholder="Select Brand"
            >
              <Option value="Kia">Kia</Option>
              <Option value="Skoda">Skoda</Option>
              <Option value="Mahindra">Mahindra</Option>
              <Option value="Toyota">Toyota</Option>
            </Select>
            <Select
              className="w-full md:w-1/2 h-[45px]"
              placeholder="Select Model"
            >
              {cars.map((car, index) => (
                <Option key={index} value={car}>
                  {car}
                </Option>
              ))}
            </Select>
            <Button
              type="primary"
              className="w-full md:w-auto bg-ButtonColor hover:bg-ButtonHover py-[22px]"
            >
              Rate and Review
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 w-full lg:w-4/12">
        <div className="p-3 border rounded-lg shadow-md ">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <LiaLightbulb className="text-yellow-500 text-2xl" /> Tips for a
            Good Review
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li>
              Tell us about your buying experience and why you shortlisted this
              car
            </li>
            <li>List out the pros and cons of your car</li>
            <li>Talk about the overall performance, mileage, comfort, etc.</li>
            <li>Share about after-sales service and costs involved</li>
            <li>Give a suitable title to your review</li>
            <li>Don’t use all caps and avoid sharing personal details</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCar;
