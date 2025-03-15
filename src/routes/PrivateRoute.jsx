import { useState } from "react";
import LoginModal from "../components/LoginModel";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(!token);

  if (!token) {
    return <LoginModal isVisible={showModal} onClose={() => setShowModal(false)} />;
  }

  return children;
};

export default PrivateRoute;
