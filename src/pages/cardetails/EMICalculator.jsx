import { useState } from "react";
import { Slider, Button } from "antd";
import CalculatorImg from "../../assets/images/emicalculator.png"
import EMIBackupModel from "./EMIBackupModel";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(9000000);
  const [duration, setDuration] = useState(4);
  const interestRate = 14.5;

  // EMI Calculation Formula
  const calculateEMI = (P, r, n) => {
    r = r / 12 / 100; // Monthly Interest Rate
    return Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  };

  const emi = calculateEMI(loanAmount, interestRate, duration * 12);

  const [isModalOpen, setIsModalOpen] = useState([false, false]);

  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  return (
    <div className="flex justify-center items-center p-5 bg-gray-50 border shadow-lg rounded-lg">
      <div className="p-2 lg:p-8 w-full">
        {/* Header Section */}
        <h2 className="text-2xl font-bold text-gray-900">EMI Calculator</h2>
        <p className="text-gray-500 text-sm mt-1">
          Avail up to 100% of the car value in finance at attractive interest rates
        </p>

        {/* Loan Amount */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Loan Amount</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500 text-sm">৳ 0</span>
            <span className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 font-semibold">
            ৳{(loanAmount / 100000).toFixed(2)} Lakh
            </span>
            <span className="text-gray-500 text-sm">৳ 89,99,999</span>
          </div>
          <Slider
            min={0}
            max={8999999}
            step={100000}
            value={loanAmount}
            onChange={(value) => setLoanAmount(value)}
            trackStyle={{ backgroundColor: "#3eb4e7" }}
            handleStyle={{ borderColor: "#3eb4e7" }}
          />
        </div>

        {/* Duration Selection */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Duration in years</h3>
          <div className="flex gap-3 mt-3">
            {[1, 2, 3, 4, 5].map((year) => (
              <button
                key={year}
                onClick={() => setDuration(year)}
                className={`w-12 h-12 flex justify-center items-center rounded-full font-semibold ${
                  duration === year ? "bg-ButtonColor text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Interest Rate */}
        <div className="mt-6 text-gray-700">
          Rate of interest <span className="font-bold">@ {interestRate}%</span> for {duration} Years
        </div>

        {/* EMI Calculation */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Your Monthly EMI</p>
            <h3 className="text-2xl font-bold flex items-center">
              <FaBangladeshiTakaSign  className="mr-1" /> {emi.toLocaleString()}
            </h3>
          </div>
          <button onClick={() => toggleModal(0, true)} className="text-blue-500 font-semibold">View Breakup</button>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs mt-2">
          *Interest rate and loan amount offered may vary subject to customer risk profile
        </p>

        {/* Call to Action */}
        <div className="mt-6">
          <Button className="w-full bg-ButtonColor hover:!bg-ButtonHover text-white hover:!text-white font-semibold py-5 rounded-lg">
            Interested in Loan
          </Button>
        </div>

        {/* Customer Count */}
        <p className="text-gray-500 text-sm text-center mt-4">550+ customers availed the facility</p>
      </div>
      <div>
        <img src={CalculatorImg} alt="CalculatorImg" />
      </div>
      <EMIBackupModel isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default EMICalculator;
