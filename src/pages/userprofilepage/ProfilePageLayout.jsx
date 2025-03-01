import { Tabs } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import Messenger from "./Messenger";
import UserProfile from "./UserProfile";

const ProfilePageLayout = () => {
  const tabItems = [
    {
      label: (
        <span>
          <UserOutlined /> Profile
        </span>
      ),
      key: "1",
      children: <UserProfile />,
    },
    {
      label: (
        <span>
          <MessageOutlined /> Messenger
        </span>
      ),
      key: "2",
      children: <Messenger />,
    },
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto my-6">
      <Tabs tabPosition="left" items={tabItems} />
    </div>
  );
};

export default ProfilePageLayout;
