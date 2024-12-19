import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UsedCar from "../pages/usedcarpage/UsedCar";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SignUp></SignUp>
            },
            {
                path: '/usedcar',
                element: <UsedCar />
            }
            
            
        ]
    },
    
])

export default Router;