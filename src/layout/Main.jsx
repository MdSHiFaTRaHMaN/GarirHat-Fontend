import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import PopupModel from "./PopupModel";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* <PopupModel /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
