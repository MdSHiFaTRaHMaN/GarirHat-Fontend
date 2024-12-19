import Carousel from "react-multi-carousel";
import CarLogo from "../../assets/images/carlogo.png";

const PopulerCar = () => {
  const populerCar = [
    {
      name: "Tesla Model S",
      image: CarLogo,
    },
    {
      name: "Toyota Camry",
      image: CarLogo,
    },
    {
      name: "Ford Mustang",
      image: CarLogo,
    },
    {
      name: "BMW 3 Series",
      image: CarLogo,
    },
    {
      name: "Honda Accord",
      image: CarLogo,
    },
    {
      name: "Audi A4",
      image: CarLogo,
    },
    {
      name: "Chevrolet Corvette",
      image: CarLogo,
    },
    {
      name: "Porsche 911",
      image: CarLogo,
    },
    {
      name: "Mercedes-Benz",
      image: CarLogo,
    },
    {
      name: "Lexus RX",
      image: CarLogo,
    },
  ];

  return (
    <div className="w-full lg:w-11/12 mx-auto">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="px-4"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {populerCar.map((carCompany, index) => (
          <div
          key={index}
          className="flex hover:text-white flex-col items-center p-2 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
        >
          <img
            className="object-cover w-32 h-32 p-2"
            src={carCompany.image}
            alt={carCompany.name}
          />
          <p className="mt-2 text-2xl font-semibold h-11 ">{carCompany.name}</p>
        </div>
        
        ))}
      </Carousel>
    </div>
  );
};

export default PopulerCar;
