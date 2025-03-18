import { Modal, Checkbox, Input, Button, message } from "antd";
import { useState } from "react";

const ReportAdModal = ({ isVisible, onClose }) => {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [comment, setComment] = useState("");

  const reasons = [
    "Listing is not genuine",
    "Seller is not contactable",
    "Photos are not visible",
    "Car details do not match",
    "Car is sold",
    "Others",
  ];

  const handleCheckboxChange = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  };

  const resetForm = () => {
    setSelectedReasons([]);
    setComment("");
  };

  const handleSubmit = () => {
    message.success("Thank You for Report", 1, () => {
      onClose();
      resetForm();
    });
  };

  return (
    <Modal open={isVisible} onCancel={onClose} footer={null} centered width={500}>
      <h2 className="text-xl font-semibold mb-4">Report the issue with this listing</h2>
      <div className="grid grid-cols-1 space-y-4">
        {reasons.map((reason) => (
          <Checkbox 
            key={reason} 
            checked={selectedReasons.includes(reason)}
            onChange={() => handleCheckboxChange(reason)}
          >
            {reason}
          </Checkbox>
        ))}
        <Input.TextArea
          placeholder="Please type here"
          maxLength={100}
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-2"
        />
        <Button
          block
          onClick={handleSubmit}
          disabled={selectedReasons.length === 0 && !comment}
          className="mt-3 bg-ButtonColor text-white font-semibold py-5"
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default ReportAdModal;
