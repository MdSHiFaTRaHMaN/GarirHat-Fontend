import React, { useState } from "react";
import { Input, Select, Switch, Button } from "antd";
import { BiDollar } from "react-icons/bi";

const { Option } = Select;

const BudgetEstimator = () => {
  const [downPayment, setDownPayment] = useState(2350);
  const [loanTerm, setLoanTerm] = useState("72 months");
  const [creditScore, setCreditScore] = useState("700-749");
  const [includeTradeIn, setIncludeTradeIn] = useState(false);
  const [isTradeIn, setIsTradeIn] = useState(false);

  return (
    <div className="bg-white py-12 px-6 lg:px-16">
      {/* Title Section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Summary Section */}
        <div className="flex flex-col items-center justify-center p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Estimate your budget
          </h2>
          <p className="text-gray-600 mb-8">
            Then get personalized rates with no impact on your credit score
          </p>
        </div>
        {/* Inputs Section */}
        <div>
          <div className="flex gap-5">
            {/* Down Payment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Est. down payment
              </label>
              <Input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                prefix="$"
                className="w-full border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Loan Term */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loan term
              </label>
              <Select
                value={loanTerm}
                onChange={(value) => setLoanTerm(value)}
                className="w-full"
              >
                <Option value="36 months">36 months</Option>
                <Option value="48 months">48 months</Option>
                <Option value="60 months">60 months</Option>
                <Option value="72 months">72 months</Option>
              </Select>
            </div>

            {/* Credit Score */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Credit score
              </label>
              <Select
                value={creditScore}
                onChange={(value) => setCreditScore(value)}
                className="w-full"
              >
                <Option value="600-649">600-649</Option>
                <Option value="650-699">650-699</Option>
                <Option value="700-749">700-749</Option>
                <Option value="750+">750+</Option>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Est. down payment
              </label>
              <Input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                prefix="$"
                className="w-full border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col p-6">
            <div className="flex items-center gap-4">
              {/* Switch */}
              <Switch
                checked={isTradeIn}
                onChange={(checked) => setIsTradeIn(checked)}
                checkedChildren="ON"
                unCheckedChildren="OFF"
              />
              <h4>Include trade-in</h4>

              {/* Conditional Input Field */}
              {isTradeIn && (
                <Input
                  size="large"
                  prefix={<BiDollar />}
                  placeholder="Enter amount"
                  className="w-[120px]"
                />
              )}
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">$25,012</h3>
            <p className="text-gray-600 text-sm mb-4">
              with <span className="font-medium">9.84% APR</span>
            </p>
            <p className="text-sm text-gray-600">
              Not ready to pre-qualify?
              <a href="#" className="text-blue-500 underline">
                Shop by estimated budget
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetEstimator;
