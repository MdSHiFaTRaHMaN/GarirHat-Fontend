import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import socket from "../socket";
import { useUserProfile } from "../api/api";

const Main = () => {
    const { userProfile } = useUserProfile();
    const userId = "u" + userProfile?.id;

  
  useEffect(() => {
    socket.emit("userConnected", userId);
  }, [userId]);

  const handleBeforeUnload = () => {
    if (userId) {
      socket.emit("disconnect", userId);
    }
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
