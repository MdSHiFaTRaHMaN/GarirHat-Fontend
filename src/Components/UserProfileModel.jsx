import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Input, Modal, Switch, Spin, Image } from "antd";
import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { useUserProfile } from "../api/api";

const UserProfileModel = ({ isVisible, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, loading } = useContext(AuthContext);
  const [editUser, setEditUser] = useState(user);
  const { userProfile } = useUserProfile();
  const handleEdit = () => {
    setEditUser(user); // Ensure we get the latest user data
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <Modal open={isVisible} onCancel={onClose} footer={null} centered>
        <div className="flex justify-center py-10">
          <Spin size="large" />
        </div>
      </Modal>
    );
  }

  if (!user) {
    return null; // Prevents rendering issues
  }

  return (
    <Modal open={isVisible} onCancel={onClose} footer={null} centered>
      <Card className="max-w-md mx-auto mt-10" bordered>
        <div className="flex flex-col items-center text-center space-y-4">
          <Image size={100} src={userProfile?.profile_pic} />
          <h2 className="text-2xl font-bold">{userProfile?.name || "N/A"}</h2>
          <p className="text-gray-500 flex items-center">
            <MailOutlined className="mr-2" /> {userProfile?.email || "N/A"}
          </p>
          <p className="text-gray-500 flex items-center">
            <PhoneOutlined className="mr-2" /> {userProfile?.phone || "N/A"}
          </p>
          <p className="text-gray-500">
            Status:{" "}
            <span
              className={
                userProfile?.status ? "text-green-500" : "text-red-500"
              }
            >
              {userProfile?.status ? "Active" : "Inactive"}
            </span>
          </p>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={handleEdit}
            className="w-full"
          >
            Edit Profile
          </Button>
        </div>

        {/* Edit Modal */}
        <Modal
          title="Edit Profile"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
        >
          <div className="space-y-3">
            <Input
              placeholder="Name"
              value={editUser?.displayName || ""}
              onChange={(e) =>
                setEditUser({ ...editUser, displayName: e.target.value })
              }
              prefix={<UserOutlined />}
            />
            <Input
              placeholder="Email"
              value={editUser?.email || ""}
              onChange={(e) =>
                setEditUser({ ...editUser, email: e.target.value })
              }
              prefix={<MailOutlined />}
            />
            <Input
              placeholder="Phone"
              value={editUser?.phoneNumber || ""}
              onChange={(e) =>
                setEditUser({ ...editUser, phoneNumber: e.target.value })
              }
              prefix={<PhoneOutlined />}
            />
            <div className="flex items-center space-x-2">
              <span>Status:</span>
              <Switch
                checked={editUser?.emailVerified}
                onChange={(checked) =>
                  setEditUser({ ...editUser, emailVerified: checked })
                }
              />
            </div>
          </div>
        </Modal>
      </Card>
    </Modal>
  );
};

export default UserProfileModel;
