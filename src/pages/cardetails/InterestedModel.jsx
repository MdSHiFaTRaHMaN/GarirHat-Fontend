import { Modal, Input, Checkbox, Button, Form, message } from "antd";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import { API } from "../../api/api";

const InterestedModal = ({ isVisible, onClose, vechileId, vendorId }) => {
  const { user, loadingUser } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Prefill user data when 
  
  useEffect(() => {
    if (!loadingUser && user) {
      form.setFieldsValue({
        user_name: user?.displayName || "",
        email: user?.email || "",
        phone: user?.phoneNumber || "",
      });
    }
  }, [user, loadingUser]);
  

  // Handle form submission
  const onFinish = async (values) => {
    const userInfo = {
      vendor_id: vendorId,
      vehicle_id: vechileId,
      user_name: values.user_name,
      message: values.message,
      phone: values.phone,
      email: values.email,
    };
  
    try {
      setIsLoading(true);
      const response = await API.post("/interest/post", userInfo);
      if (response.status === 200) {
        message.success("Interest added successfully");
        form.resetFields();
        onClose(); // Close only after success
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={500}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-center mb-4">
        Request Information
      </h2>

      {/* Form */}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-3"
      >
        {/* Name */}
        <Form.Item
          label="Your Name"
          name="user_name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input className="py-3 rounded-md" placeholder="Enter your name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input className="py-3 rounded-md" placeholder="email@address.com" />
        </Form.Item>

        {/* Phone */}
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Phone number is required" }]}
        >
          <Input className="py-3 rounded-md" placeholder="555-555-5555" />
        </Form.Item>

        {/* Message */}
        <Form.Item label="Message (Optional)" name="message">
          <Input.TextArea
            rows={3}
            className="rounded-md"
            placeholder="I’m interested in this car and would like more details."
          />
        </Form.Item>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          <span className="text-sm">Email me new listings for my search</span>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button
            disabled={isLoading}
            loading={isLoading}
            htmlType="submit"
            className="w-full py-5 text-lg rounded-md bg-ButtonColor hover:!bg-ButtonHover !text-white font-semibold"
          >
            Send Interest
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InterestedModal;
