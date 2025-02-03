import { Outlet } from "react-router-dom";
import ButtomBer from "../components/ButtomBer";
import Topbar from "../components/Topbar";


const Main = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
      <ButtomBer />
    </div>
  );
};

export default Main;
