import { useState } from "react";
import { Select, InputNumber, Switch, Button, Tooltip } from "antd";
import { CarOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Car from "../../assets/images/match-carimage.png";

const MatchCar = () => {
  const [downPayment, setDownPayment] = useState(3000);
  const [monthlyPayment, setMonthlyPayment] = useState(500);
  const [tradeIn, setTradeIn] = useState(false);
  const [tradeInAmount, setTradeInAmount] = useState(0);
  const [creditScore, setCreditScore] = useState("670 - 739");
  const [carType, setCarType] = useState("Used car");

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col md:flex-row  p-6 w-full lg:w-11/12 mx-auto">
        <div className="flex-1 flex justify-center">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Know your buying power{" "}
              <Tooltip
                placement="bottom"
                title={
                  <span>
                    The accuracy of the Buying Power calculator may vary
                    depending on the vehicle chosen. It calculates average total
                    and monthly amounts by combining multiple lenders and
                    vehicle types with financing term lengths. This calculator
                    is a self-help tool. The information is provided for
                    illustrative purposes only, and is not an offer to lend.
                    Consumer must qualify for credit from lender/dealer. See
                    your dealer/lender for details, including any actual offers,
                    if any, that may be available to you.
                  </span>
                }
              >
                <InfoCircleOutlined className="text-lg" />
              </Tooltip>
            </h2>
            <p className="text-gray-600 mb-4">
              How much car can you afford? Find out, then see vehicles that
              match your budget.
            </p>
            <img
              src={Car} // Replace with actual image path
              alt="Car"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex-1 bg-white p-6 rounded">
          <h3 className="text-6xl font-bold mb-4 text-center font-mono">
            $27,595
          </h3>
          <p className="text-gray-800 mb-4 text-center font-semibold">
            Est. buying power
            <br />
            <span className="text-lg font-normal text-gray-700">
              Based on 8.11% APR
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Looking for</label>
              <Select
                value={carType}
                className="w-full rounded"
                style={{ height: "45px" }}
                onChange={setCarType}
              >
                <Select.Option value="Used car">Used car</Select.Option>
                <Select.Option value="New car">New car</Select.Option>
              </Select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Down payment</label>
              <InputNumber
                className="w-full py-1.5"
                value={downPayment}
                min={0}
                onChange={setDownPayment}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Credit score</label>
              <Select
                value={creditScore}
                className="w-full"
                style={{ height: "45px" }}
                onChange={setCreditScore}
              >
                <Select.Option value="670 - 739">670 - 739</Select.Option>
                <Select.Option value="740 - 850">740 - 850</Select.Option>
                <Select.Option value="580 - 669">580 - 669</Select.Option>
              </Select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Monthly payment
              </label>
              <InputNumber
                className="w-full py-1.5"
                value={monthlyPayment}
                min={0}
                onChange={setMonthlyPayment}
              />
            </div>
            <div className="col-span-2 flex items-center gap-2">
              <Switch checked={tradeIn} onChange={setTradeIn} />
              <span className="text-gray-700">Include trade-in</span>
            </div>
            {tradeIn && (
              <div className="col-span-2">
                <label className="block text-gray-700 mb-1">
                  Trade-in amount
                </label>
                <InputNumber
                  className="w-full py-1.5"
                  value={tradeInAmount}
                  min={0}
                  onChange={setTradeInAmount}
                />
              </div>
            )}
          </div>
          <button
            className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 bg-black hover:bg-gray-800 text-white rounded-full "
          >
            <CarOutlined /> See your matches
          </button>
        </div>
      </div>
    </section>
  );
};

export default MatchCar;
