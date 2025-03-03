import { Button, Card } from "antd";
import Carousel from "react-multi-carousel";
import CarImage from "../../assets/images/UpcomingImage.jpg";
import { useVehiclewithoutCondition } from "../../api/api";
import { Link } from "react-router-dom";

const ShowReviewCar = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const { vehiclewithoutCondition } = useVehiclewithoutCondition();

  return (
    <div className="container w-full lg:w-10/12 mx-auto p-3 border rounded my-3">
      <h2 className="text-2xl font-bold">New Car User Reviews</h2>
      <p className="text-gray-600">
        Read genuine reviews from car buyers and owners to know the pros and
        cons of new cars...
      </p>
      <Carousel responsive={responsive} className="mt-5">
        {vehiclewithoutCondition.map((vehicle) => (
          <Card key={vehicle.id} className="p-3 shadow rounded m-3">
            <img
              src={vehicle.thumbnail_image || CarImage}
              alt={vehicle.model}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-3">
              <h4 className="font-bold text-lg">
                {vehicle.year_of_manufacture} {vehicle.make} {vehicle.model}
              </h4>
              <h3 className="font-semibold ">
                {vehicle.mileage}kms » {vehicle.fuel_type} » {vehicle.transmission}
              </h3>
              <p className="text-gray-500 text-sm">{vehicle.content}</p>
              <Link to={`/car-details/${vehicle.id}#review`}>
                <Button className="bg-ButtonColor hover:!bg-ButtonHover !text-white  font-semibold mt-2">
                  Show Review
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default ShowReviewCar;
