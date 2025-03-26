import { Card, Modal, Tabs } from "antd";
import { useTheme } from "antd-style";
import { useState } from "react";

const EMIBackupModel = ({ isModalOpen, toggleModal, price }) => {
  const [activeTab, setActiveTab] = useState("breakup");
  const token = useTheme();

  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
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
          <p className="text-2xl font-bold">৳{price.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Rate of interest @ 14.5%* for 4 Years</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-green-500">Down payment</span>
              <span>৳{(price * 0.1).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-500">Loan amount</span>
              <span>৳{(price * 0.9).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-500">Interest amount</span>
              <span>৳{(price * 0.3).toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Payable amount</span>
              <span>৳{(price * 1.2).toLocaleString()}</span>
            </div>
          </div>
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
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} centered />
      </div>
    </Modal>
  );
};

export default EMIBackupModel;
