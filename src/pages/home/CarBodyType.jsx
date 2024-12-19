import Slider from "react-slick";
import Car from "../../assets/images/black car.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarBodyType = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-5">Car Body Types</h2>
      <div className="slider-container px-5">
        <Slider {...settings}>
          {[...Array(9)].map((_, index) => (
            <div key={index} className="px-2">
              <div className="bg-gray-100 p-10">
                <img
                  src={Car}
                  alt={`Car ${index + 1}`}
                  className="w-full h-28 object-cover"
                />
                <h1 className="text-xl font-semibold text-center">
                  Rolls Royel
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarBodyType;
