import { useState } from "react";
import { Slider, Input } from "antd";
import CalculatorImg from "../../assets/images/calculatebyemi.png";
import EMIBackupModel from "./EMIBackupModel";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const EMICalculator = ({price}) => {
  const [loanAmount, setLoanAmount] = useState(price);
  const [duration, setDuration] = useState(4);
  const [interestRate, setInterestRate] = useState(14.5);

  // EMI Calculation Formula
  const calculateEMI = (P, r, n) => {
    r = r / 12 / 100; // Monthly Interest Rate
    return Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  };

  const emi = calculateEMI(loanAmount, interestRate, duration * 12);
  const [isModalOpen, setIsModalOpen] = useState([false, false]);

// Toggle Modal 
  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  return (
    <div className="flex justify-center items-center p-5 bg-gray-50 border rounded">
      <div className="p-2 lg:p-8 w-full">
        {/* Header Section */}
        <h2 className="text-2xl font-bold text-gray-900">Loan Calculator</h2>

        {/* Loan Amount */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Loan Amount</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500 text-sm">৳ 0</span>
            <span className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 font-semibold">
              ৳{(loanAmount / 100000).toFixed(2)} Lakh
            </span>
            <span className="text-gray-500 text-sm">৳ {price}</span>
          </div> 
          <Slider
            min={0}
            max={price}
            step={1000}
            value={loanAmount}
            onChange={(value) => setLoanAmount(value)}
            trackStyle={{ backgroundColor: "#3eb4e7" }}
            handleStyle={{ borderColor: "#3eb4e7" }}
          />
        </div>

        {/* Duration Selection */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Duration in years
          </h3>
          <div className="flex gap-3 mt-3">
            {[1, 2, 3, 4, 5, 6].map((year) => (
              <button
                key={year}
                onClick={() => setDuration(year)}
                className={`w-12 h-12 flex justify-center items-center rounded-full font-semibold ${
                  duration === year
                    ? "bg-ButtonColor text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Interest Rate */}
        <div className="mt-6 text-gray-700">
          <Slider
            min={1}
            max={30}
            step={1}
            value={interestRate}
            onChange={setInterestRate}
            trackStyle={[{ backgroundColor: "#3eb4e7" }]}
            handleStyle={[{ borderColor: "#3eb4e7" }]}
          />
          <Input
            className="py-2 !rounded"
            type="number"
            placeholder="Enter Custom Rate of Interest"
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value <= 30) {
                setInterestRate(value);
              }
            }}
            value={interestRate}
            min={1}
            max={30}
          />
          Rate of interest <span className="font-bold">@ {interestRate}%</span>{" "}
          for {duration} Years
        </div>

        {/* EMI Calculation */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Your Monthly EMI</p>
            <h3 className="text-2xl font-bold flex items-center">
              <FaBangladeshiTakaSign className="mr-1" /> {emi.toLocaleString()} TK 
            </h3>
          </div>
          <button
            onClick={() => toggleModal(0, true)}
            className="text-blue-500 font-semibold"
          >
            View Breakup
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs mt-2">
          *Interest rate and loan amount offered may vary subject to customer
          risk profile
        </p>

        {/* Call to Action */}
        {/* <div className="mt-6">
          <Button className="w-full bg-ButtonColor hover:!bg-ButtonHover text-white hover:!text-white font-semibold py-5 rounded-lg">
            Interested in Loan
          </Button>
        </div> */}
      </div>
      <div className="hidden lg:block">
        <img src={CalculatorImg} alt="CalculatorImg" />
      </div>
      <EMIBackupModel isModalOpen={isModalOpen} toggleModal={toggleModal}  price={price} />
    </div>
  );
};

export default EMICalculator;
