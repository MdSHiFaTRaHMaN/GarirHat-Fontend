import Bannar from './Bannar';
import BuyOnline from './BuyOnline';
import CarBrands from './CarBrands';
import CarReview from './CarReview';
import CarType from './CarType';
import MatchCar from './MatchCar';
import SellandTrade from './SellandTrade';
import WhyGarirHat from './WhyGarirHat';


const Home = () => {
    return (
        <div>
            <Bannar />
            <BuyOnline />
            <MatchCar />
            <WhyGarirHat />
            <CarBrands />
            <SellandTrade />
            <CarType />
            <CarReview />
        </div>
    );
};

export default Home;