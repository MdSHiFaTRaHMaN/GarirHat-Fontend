import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import NewCarPage from "../pages/newcar/NewCarPage";
import CarDetails from "../pages/cardetails/CarDetails";
import NewsAndStories from "../pages/newsandstory/NewsAndStories";
import ExpertReviews from "../pages/carexpertreview/ExpertReviews";
import CarReviewPage from "../pages/carreview/CarReviewPage";
import UserReviewFrom from "../pages/UserReviewFrom";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/new-car",
        element: <NewCarPage />
      },
      {
        path: "/car-details",
        element: <CarDetails />
      },
      {
        path: "/news-and-stories",
        element: <NewsAndStories />
      },
      {
        path: "/car-expert-review",
        element: <ExpertReviews />
      },
      {
        path: "/car-review",
        element: <CarReviewPage />
      },
      {
        path: "/user-review",
        element: <UserReviewFrom />
      }
    ],
  },
]);

export default Router;
