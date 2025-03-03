import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useAllBrand } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";

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
  const { allBrand, isLoading } = useAllBrand();

  return (
    <div className="w-full lg:w-10/12 mx-auto p-4 lg:p-0">
      <h2 className="text-xl font-bold mb-4">Popular Brands</h2>
      <Carousel responsive={responsive} arrows>
        {isLoading ? (
          <LoadingWhile />
        ) : (
          allBrand.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 shadow-md rounded m-2"
            >
              <img
                src={brand.image}
                alt={brand.brand_name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm font-semibold text-center">
                {brand.brand_name}
              </p>
            </div>
          ))
        )}
      </Carousel>
      <div className="text-center mt-6">
        <Link
          to="/new-car#carbrand"
          className="inline-block px-6 py-2 text-sm font-semibold text-white bg-ButtonColor rounded hover:bg-ButtonHover transition-all"
        >
          View All Brands &rarr;
        </Link>
      </div>
    </div>
  );
};

export default PopularBrands;
