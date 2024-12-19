import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarImg from "../../assets/images/blue car.png";

const CarReview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const items = [
    {
      description: "2024 GMC Acadia Review and Video",
      rating: "4.9/10",
      image: CarImg,
    },
    {
      description: "2024 GMC Acadia Review and Video",
      rating: "4.9/10",
      image: CarImg,
    },
    {
      description: "2024 GMC Acadia Review and Video",
      rating: "4.9/10",
      image: CarImg,
    },
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Research and Reviews
      </h1>
      <h3 className="text-2xl font-semibold ml-4">Car reviews</h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable
        infinite
        itemClass="px-4"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item shadow-lg py-4 bg-white rounded-md my-3"
          >
            <img
              src={item.image}
              alt="image"
              className="w-full h-48 object-cover rounded px-0 bg-gray-100"
            />
            <div className="px-4">
              <h3 className="text-lg">Export Rating: {item.rating}</h3>
              <h3 className="text-lg font-bold mt-2">{item.description}</h3>
            </div>
          </div>
        ))}
      </Carousel>
      <h3 className="text-2xl font-semibold m-4">Buying guides</h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable
        infinite
        itemClass="px-4"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item shadow-lg py-4 bg-white rounded-md my-3"
          >
            <img
              src={item.image}
              alt="image"
              className="w-full h-48 object-cover rounded px-0 bg-gray-100"
            />
            <div className="px-4">
              <h3 className="text-lg">Export Rating: {item.rating}</h3>
              <h3 className="text-lg font-bold mt-2">{item.description}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarReview;
