import { Tabs } from "antd";
import { UserOutlined, MessageOutlined, VideoCameraFilled } from "@ant-design/icons";
import UserProfile from "./UserProfile";
import { MdReviews } from "react-icons/md";
import MyReviews from "./MyReviews";
import { useState, useEffect } from "react";
import Messages from "./messages/Messages";
import VideoReviews from "./VideoReviews";

const ProfilePageLayout = () => {
  const [tabPosition, setTabPosition] = useState("left");

  // Adjust tab position based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTabPosition("top"); 
      } else {
        setTabPosition("left"); 
      }
    };

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for tab position
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      children: <Messages />,
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
          <VideoCameraFilled /> Videos
        </span>
      ),
      key: "4",
      children: <VideoReviews />
    }
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto m-6">
      {/* Dynamically set the tab position based on screen size */}
      <Tabs tabPosition={tabPosition} items={tabItems} className="ml-2" />
    </div>
  );
};

export default ProfilePageLayout;
