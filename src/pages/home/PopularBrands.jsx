import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Brand from "../../assets/images/toyato.png"

const brands = [
  { name: "Maruti", logo: Brand},
  { name: "Tata", logo: Brand},
  { name: "Kia", logo: Brand},
  { name: "Toyota", logo: Brand},
  { name: "Hyundai", logo: Brand},
  { name: "Mahindra", logo: Brand},
  { name: "Roels Royels", logo: Brand},
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularBrands = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto p-4 lg:p-0">
      <h2 className="text-xl font-bold mb-4">Popular Brands</h2>
      <Carousel responsive={responsive} arrows>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-50 shadow-md rounded m-2"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-sm font-semibold text-center">{brand.name}</p>
          </div>
        ))}
      </Carousel>
      <div className="text-center mt-4">
        <a href="/all-brands" className="text-orange-500 font-semibold">
          View All Brands &rarr;
        </a>
      </div>
    </div>
  );
};

export default PopularBrands;
