import { Tabs } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import Messenger from "./Messenger";
import UserProfile from "./UserProfile";
import { MdReviews } from "react-icons/md";
import MyReviews from "./MyReviews";
import { FaVideo } from "react-icons/fa";
import VideoReviews from "./VideoReviews";
import { useState, useEffect } from "react";

// For better responsiveness, we'll use state to manage the tab position dynamically
const ProfilePageLayout = () => {
  const [tabPosition, setTabPosition] = useState("left");

  // Adjust tab position based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setTabPosition("top"); // Stack tabs vertically on smaller screens
      } else {
        setTabPosition("left"); // Keep tabs on the left on larger screens
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
          <FaVideo /> Video Reviews
        </span>
      ),
      key: "4",
      children: <VideoReviews />,
    },
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto my-6">
      {/* Dynamically set the tab position based on screen size */}
      <Tabs tabPosition={tabPosition} items={tabItems} />
    </div>
  );
};

export default ProfilePageLayout;
