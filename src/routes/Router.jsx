import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import NewCarPage from "../pages/newcar/NewCarPage";
import CarDetails from "../pages/cardetails/CarDetails";
import NewsAndStories from "../pages/newsandstory/NewsAndStories";
import ExpertReviews from "../pages/carexpertreview/ExpertReviews";
import CarReviewPage from "../pages/carreview/CarReviewPage";
import UserReviewFrom from "../pages/UserReviewFrom";
import CarCollection from "../pages/carcollection/CarCollection";
import CarVideosPage from "../pages/carvideopage/CarVideosPage";
import TipsandAdvice from "../pages/tipsandadvice/TipsandAdvice";
import FavoritesCar from "../pages/FavoritesCar";
import UserProfile from "../pages/UserProfile";


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
      },
      {
        path: "/car-collection",
        element: <CarCollection />
      },
      {
        path: "/car-videos",
        element: <CarVideosPage />
      },
      {
        path: "/tips-and-advice",
        element: <TipsandAdvice />
      },
      {
        path: "/favorites-car",
        element: <FavoritesCar />
      },
      {
        path: "/user-profile",
        element: <UserProfile />
      }
    ],
  },
]);

export default Router;
