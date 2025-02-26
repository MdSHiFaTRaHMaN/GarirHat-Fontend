import { useContext, useState } from "react";
import { Modal, Input, Button, Form } from "antd";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { UserOutlined } from "@ant-design/icons";
import { AuthContext } from "../authprovider/AuthProvider";

const LoginModal = ({ isVisible, onClose }) => {
  const [showOtp, setShowOtp] = useState(false); // State to track OTP input visibility

  const onFinish = (values) => {
    console.log("Success:", values.username);
    setShowOtp(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const {handleGoogle} = useContext(AuthContext);

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      closable={true}
    >
      <h2 className="text-center text-2xl font-semibold">Log in or sign up</h2>
      <p className="text-gray-800 text-center my-3">
        Continue with email or your Facebook or Google account.
      </p>

      {/* Login Form */}
      {!showOtp ? (
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-4"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Email or Phone Number!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-500 mr-2" />}
              placeholder="Enter Email or Phone Number"
              className="h-12"
            />
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full bg-ButtonColor hover:bg-ButtonHover h-12 font-semibold text-white rounded-md"
            >
              Send OTP
            </button>
          </Form.Item>
        </Form>
      ) : (
        //nput OTP section)
        <Form
          name="otp"
          initialValues={{ remember: true }}
          onFinish={(values) => console.log("OTP Submitted:", values)}
          className="space-y-4"
        >
          <Form.Item
            name="otp"
            rules={[{ required: true, message: "Enter OTP" }]}
            className="flex justify-center"
          >
            <Input.OTP placeholder="Enter OTP" className="h-12" separator={(index) => (index === 2 ? '-' : undefined)}/>
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full bg-ButtonColor hover:bg-ButtonHover font-semibold h-12 text-white rounded-md"
            >
              Verify Now
            </button>
          </Form.Item>
        </Form>
      )}

      {/* Divider */}
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google Login */}
      <Button onClick={handleGoogle} className="w-full flex items-center justify-center border bg-gray-200 shadow-md border-gray-300 text-lg p-5 rounded-md hover:bg-gray-100 gap-2">
        <FcGoogle size={22} />
        Continue with Google
      </Button>

      {/* Facebook Login */}
      <Button className="w-full flex items-center justify-center bg-gray-200 shadow-md border border-gray-300 text-lg p-5 rounded-md hover:bg-gray-100 mt-3 gap-2">
        <FaFacebook className="text-blue-600" size={22} />
        Continue with Facebook
      </Button>
    </Modal>
  );
};

export default LoginModal;
