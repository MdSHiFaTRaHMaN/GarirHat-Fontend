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
import OTPLogin from "../components/OTPLogin";
import VendorInfo from "../pages/vendorinfopage/VendorInfo";
import About from "../pages/setting/About";
import TermsandCondition from "../pages/setting/TermsandCondition";
import PrivacyPolicy from "../pages/setting/PrivacyPolicy";
import CorporatePolicies from "../pages/setting/CorporatePolicies";
import Investors from "../pages/setting/Investors";
import FAQs from "../pages/setting/FAQs";


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
        path: "/used-car",
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
        path: "/vendor-info",
        element: <VendorInfo />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/term&condition",
        element: <TermsandCondition />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/corporate-policies",
        element: <CorporatePolicies />
      },
      {
        path: "/investors",
        element: <Investors />
      },
      {
        path: "/faqs",
        element: <FAQs />
      },
      {
        path: "/otp",
        element: <OTPLogin />
      },
    ],
  },
]);

export default Router;
