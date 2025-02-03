import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer.jsx";


const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
