import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import ButtomBer from "../components/ButtomBer";


const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <ButtomBer />
    </div>
  );
};

export default Main;
