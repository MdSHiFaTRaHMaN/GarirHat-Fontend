import { Card, Modal, Tabs } from "antd";
import { useTheme } from "antd-style";
import { useState } from "react";

const EMIBackupModel = ({ isModalOpen, toggleModal }) => {
  const [activeTab, setActiveTab] = useState("breakup");
  const token = useTheme();
  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    // body: {
    //   boxShadow: 'inset 0 0 5px #999',
    //   borderRadius: 5,
    // },
    mask: {
      backdropFilter: "blur(10px)",
    },
    footer: {
      borderTop: "1px solid #333",
    },
    content: {
      boxShadow: "0 0 30px #999",
    },
  };

  const tabItems = [
    {
      key: "breakup",
      label: "BREAKUP",
      children: (
        <Card className="p-4 shadow-md rounded-xl">
          <h2 className="text-lg font-semibold">Your monthly EMI</h2>
          <p className="text-2xl font-bold">৳1,33,905</p>
          <p className="text-sm text-gray-500">
            Rate of interest @ 14.5%* for 4 Years
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-green-500">Down payment</span>
              <span>৳5,39,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-500">Loan amount</span>
              <span>৳48,55,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-500">Interest amount</span>
              <span>৳15,71,940</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Payable amount</span>
              <span>৳69,66,940</span>
            </div>
          </div>
        </Card>
      ),
    },
    {
      key: "year-wise",
      label: "YEAR-WISE",
      children: (
        <Card className="p-4 shadow-md rounded-xl">
          <h2 className="text-lg font-semibold">Year-wise EMI calculator</h2>
          <p className="text-sm text-gray-500">For Loan amount • ৳48,55,500</p>
          <table className="w-full mt-4 border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Tenure</th>
                <th className="p-2 border">Interest Amt.</th>
                <th className="p-2 border">EMI</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tenure: "5 Years", interest: "৳19,99,020", emi: "৳1,14,242" },
                {
                  tenure: "4 Years",
                  interest: "৳15,71,940",
                  emi: "৳1,33,905",
                  popular: true,
                },
                { tenure: "3 Years", interest: "৳11,61,252", emi: "৳1,67,132" },
                { tenure: "2 Years", interest: "৳7,67,124", emi: "৳2,34,276" },
                { tenure: "1 Year", interest: "৳3,89,760", emi: "৳4,37,105" },
              ].map((item, index) => (
                <tr key={index} className="border">
                  <td className="p-2 border flex items-center gap-2">
                    {item.tenure}{" "}
                    {item.popular && (
                      <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded">
                        Popular
                      </span>
                    )}
                  </td>
                  <td className="p-2 border">{item.interest}</td>
                  <td className="p-2 border">{item.emi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ),
    },
  ];

  return (
    <Modal
      title="EMI Breakdown"
      open={isModalOpen[0]}
      onOk={() => toggleModal(0, false)}
      onCancel={() => toggleModal(0, false)}
      footer={null}
      styles={modalStyles}
    >
      <div className="max-w-md mx-auto p-2">
        <h1 className="text-2xl font-bold mb-2">Loan Breakup</h1>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={tabItems}
          centered
        />
      </div>
    </Modal>
  );
};

export default EMIBackupModel;
