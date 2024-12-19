import CarAbout from './CarAbout';
import Bannar from './Bannar';
import WhySellWithUs from './WhySellWithUs';
import BudgetEstimator from './BudgetEstimator';
import CarModel from './CarModel';
import CarShowcase from './CarShowcase';
import CarBodyType from './CarBodyType';
import CarReview from './CarReview';
import PopulerCar from './PopulerCar';

const Home = () => {
    return (
        <div>
            <Bannar />
            <BudgetEstimator />
            <CarShowcase />
            <CarBodyType />
            <WhySellWithUs />
            <CarReview />
            <PopulerCar />
            <CarAbout />
            <CarModel />

        </div>
    );
};

export default Home;