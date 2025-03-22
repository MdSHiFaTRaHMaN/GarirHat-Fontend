import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AllVehiclePage from "../pages/vehicle/AllVehiclePage";
import CarDetails from "../pages/cardetails/CarDetails";
// import NewsAndStories from "../pages/newsandstory/NewsAndStories";
// import ExpertReviews from "../pages/carexpertreview/ExpertReviews";
// import CarCollection from "../pages/carcollection/CarCollection";
import CarVideosPage from "../pages/carvideopage/CarVideosPage";
// import TipsandAdvice from "../pages/tipsandadvice/TipsandAdvice";
import CarReviewPage from "../pages/carreview/CarReviewPage";
import FavoritesCar from "../pages/FavoritesCar";
import VendorInfo from "../pages/vendorinfopage/VendorInfo";
import About from "../pages/setting/About";
import TermsandCondition from "../pages/setting/TermsandCondition";
import PrivacyPolicy from "../pages/setting/PrivacyPolicy";
import CorporatePolicies from "../pages/setting/CorporatePolicies";
import FAQs from "../pages/setting/FAQs";
import AutoSuggest from "../AutoSuggest";
import SearchReasult from "../pages/searchreasult/SearchReasult";
import ProfilePageLayout from "../pages/userprofilepage/ProfilePageLayout";
import ResultReviewPage from "../pages/carreview/ResultReviewPage";
import UserReviewForm from "../pages/carreview/UserReviewFrom";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ComingSoon from "../components/ComingSoon";
import ContactUs from "../pages/setting/contact/ContactUs";
import Feedback from "../pages/setting/Feedback";
import Auction from "../pages/setting/Auction";
import Careers from "../pages/setting/Careers";
import AdvertiseWithUs from "../pages/setting/AdvertiseWithUs";
import PartnerDealer from "../pages/setting/PartnerDealer";
import AddVideos from "../pages/carvideopage/AddVideos";
import SingleVideo from "../pages/carvideopage/SingleVideo";
import BakeWebsite from "../pages/setting/otherwebsite/BakeWebsite";
import Test from "../Test";
import Partshat from "../pages/setting/otherwebsite/Partshat";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: "/advanced-search",
        element: <AllVehiclePage />
      },
      {
        path: "/vehicles",
        element: <AllVehiclePage />
      },
      {
        path: "/:conditionParams",
        element: <AllVehiclePage />
      },
      {
        path: "/car-details/:vehicleID",
        element: <CarDetails />
      },
      {
        path: "/news-and-stories",
        // element: <NewsAndStories />
        element: <ComingSoon />
      },
      {
        path: "/car-expert-review",
        // element: <ExpertReviews />
        element: <ComingSoon />
      },
      {
        path: "/car-review",
        element: <CarReviewPage />
      },
      {
        path: "/user-review/:brandName/:ratingModelID",
        element: <UserReviewForm />
      },
      {
        path: "/car-collection",
        // element: <CarCollection />
        element: <ComingSoon />
      },
      {
        path: "/car-videos",
        element: <CarVideosPage />
      },
      {
        path: "/add-video",
        element: <PrivateRoute><AddVideos /></PrivateRoute> 
      },
      {
        path: "/single-video/:videoId",
        element: <SingleVideo />
      },
      {
        path: "/tips-and-advice",
        // element: <TipsandAdvice />,
        element: <ComingSoon />
      },
      {
        path: "/favorites-car",
        element: <FavoritesCar />
      },
      {
        path: "/vendor-info/:vendorId",
        element: <PrivateRoute><VendorInfo /></PrivateRoute> 
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
        path: "/refund-policy",
        element: <CorporatePolicies />
      },
      {
        path: "/faqs",
        element: <FAQs />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/feedback",
        element: <Feedback />
      },
      {
        path: "/auction",
        element: <Auction />
      },
      {
        path: "/careers",
        element: <Careers />
      },
      {
        path: "/advertise",
        element: <AdvertiseWithUs />
      },
      {
        path: "/partner-dealer",
        element: <PartnerDealer />
      },
      {
        path: "/upcoming",
        element: <ComingSoon />
      },
      {
        path: "/search",
        element: <SearchReasult />
      },
      {
        path: "/search-result/:selectedOption/:selectBrand",
        element: <SearchReasult />
      },
      {
        path: "/check",
        element: <AutoSuggest />
      },
      {
        path: "/user-profile",
        element: <ProfilePageLayout />
      },
      {
        path: "/search-review/:selectModel",
        element : <ResultReviewPage />
      },
      {
        path: "/bikehat",
        element: <BakeWebsite />
      },
      {
        path: "/partshat",
        element: <Partshat />
      },
      {
        path: "/test",
        element: <Test />
      }
       
    ],
  },
]);

export default Router;
