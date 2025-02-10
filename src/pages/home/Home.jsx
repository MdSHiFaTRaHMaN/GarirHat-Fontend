import CarCompare from "./CarCompare";
import CarNews from "./CarNews";
import CarStorics from "./CarStorics";
import ElectricCars from "./ElectricCars";
import Header from "./Header";
import MostSearchCar from "./MostSearchCar";
import NearbyLocation from "./NearbyLocation";
import PopularBrands from "./PopularBrands";
import TrustedUsedCars from "./TrustedUsedCars";
import UpcomingCar from "./UpcomingCar";


const Home = () => {
    return (
        <div>
            <Header />
            <MostSearchCar />
            <ElectricCars />
            <UpcomingCar />
            <TrustedUsedCars />
            <PopularBrands />
            <CarStorics />
            <CarCompare />
            <NearbyLocation />
            <CarNews />
        </div>
    );
};

export default Home;