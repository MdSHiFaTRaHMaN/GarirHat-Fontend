import { Card } from "antd";
import Carousel from "react-multi-carousel";
import CarImage from "../../assets/images/car-review-iamge.png"

const ReviewPage = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const reviews = [
    {
      id: 1,
      image: CarImage,
      author: "Naman Kumar",
      date: "Feb 09, 2025",
      car: "Mahindra Scorpio N",
      title: "Overall Value For Money Car",
      content:
        "Overall value for money car drives it around 50 thousand km till now any fully satisfied with what i...",
      link: "#",
    },
    {
      id: 2,
      image: CarImage,
      author: "Tushar Singh",
      date: "Feb 09, 2025",
      car: "Toyota Fortuner",
      title: "Fortuner Genuine Review",
      content:
        "A very good car with all possibilities. As the brand Toyota represents themselves for the reliability...",
      link: "#",
    },
    {
      id: 3,
      image: CarImage,
      author: "Kuldeep Sahu",
      date: "Feb 08, 2025",
      car: "Skoda Kylag",
      title: "I Love This Car I Love It",
      content:
        "One of the best car I see in my life and this is a best car to buy low class family and maintain cos...",
      link: "#",
    },
    {
      id: 4,
      image: CarImage,
      author: "Ishan Anand",
      date: "Feb 08, 2025",
      car: "Kia Syros",
      title: "Best In Segment.. Go For It",
      content:
        "Its an amazing buy if you are looking for a family car, best in comfort and feature loaded high perf...",
      link: "#",
    },
  ];
  return (
    <div className="container w-full lg:w-10/12 mx-auto p-3 border shadow-md rounded-lg my-3">
      <h2 className="text-2xl font-bold">New Car User Reviews</h2>
      <p className="text-gray-600">
        Read genuine reviews from car buyers and owners to know the pros and
        cons of new cars...
      </p>
      <Carousel responsive={responsive} className="mt-5">
        {reviews.map((review) => (
          <Card key={review.id} className="p-1 shadow-lg rounded-lg m-3">
            <img
              src={review.image}
              alt={review.car}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-3">
              <h4 className="font-semibold">{review.car}</h4>
              <h3 className="font-bold text-lg">{review.title}</h3>
              <p className="text-gray-500 text-sm">{review.content}</p>
              <a href={review.link} className="text-blue-500">
                Read More
              </a>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewPage;
