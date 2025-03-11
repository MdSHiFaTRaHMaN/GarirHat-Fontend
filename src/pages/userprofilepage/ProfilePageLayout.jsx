import { Tabs } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import Messenger from "./Messenger";
import UserProfile from "./UserProfile";
import { MdReviews } from "react-icons/md";
import MyReviews from "./MyReviews";
import { FaVideo } from "react-icons/fa";
import VideoReviews from "./VideoReviews";

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
    {
      label: (
        <span className="flex items-center gap-1">
          <MdReviews /> My Reviews
        </span>
      ),
      key: "3",
      children: <MyReviews />,
    },
    {
      label: (
        <span className="flex items-center gap-1">
          <FaVideo /> Videos Reviews
        </span>
      ),
      key: "4",
      children: <VideoReviews />,
    },
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto my-6">
      <Tabs tabPosition="left" items={tabItems} />
    </div>
  );
};

export default ProfilePageLayout;
