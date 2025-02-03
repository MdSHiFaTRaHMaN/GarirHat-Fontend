import { Modal, Input, Button, Form } from "antd";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const LoginModal = ({ isVisible, onClose }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      open={isVisible}
      onCancel={onClose} 
      footer={null}
      centered
      closable={true} // নিশ্চিত করুন যে এটি true
    >
      <h2 className="text-center text-2xl font-semibold">Log in or sign up</h2>
      <p className="text-gray-800 text-center my-3">
        Continue with email or your Facebook or Google account.
      </p>

      {/* Login Form */}
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="space-y-4"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<UserOutlined className="text-gray-500 mr-2" />}
            placeholder="Username"
            className="h-12"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-500 mr-2" />}
            placeholder="Password"
            className="h-12"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 h-12 text-white rounded-md"
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      {/* Divider */}
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google Login */}
      <Button
        className="w-full flex items-center justify-center border border-gray-300 text-lg p-5 rounded-md hover:bg-gray-100 gap-2"
      >
        <FcGoogle size={22} />
        Continue with Google
      </Button>

      {/* Facebook Login */}
      <Button
        className="w-full flex items-center justify-center border border-gray-300 text-lg p-5 rounded-md hover:bg-gray-100 mt-3 gap-2"
      >
        <FaFacebook className="text-blue-600" size={22} />
        Continue with Facebook
      </Button>
    </Modal>
  );
};

export default LoginModal;
