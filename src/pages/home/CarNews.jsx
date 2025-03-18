import News1 from "../../assets/images/news1.png";
import News2 from "../../assets/images/news2.png";
import News3 from "../../assets/images/news3.jpg";
import News4 from "../../assets/images/news4.jpg";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    title:
      "In Terms Of Brand New Car Price In Bangladesh, Which Brand Or Model Is The Best For You? +",
    description:
      "A typical passenger car is designed to get you from point A to point B. But now the car market offers a wide range of cars that differs in not only the layout of the dashboard and placement of the controls but also the engine design.",
    author: "Mitsubishi ",
    date: "Feb 05, 2025",
    image: News1,
  },
  {
    title: "Things to consider before buying your first car.",
    description:
      "Deciding to buy a car is one of the first steps to making your commute easier. With an increasing number of models to choose from, it becomes quite a challenge to pick the right one. How do you know which car is the best for you? Here are a few tips to keep in mind when buying a car, whether reconditioned or brand new.",
    author: "The Daily Star",
    date: "Feb 01, 2025",
    image: News2,
  },
  {
    title: "Honda Amaze Prices Hiked For The First Time, New Prices Star...",
    description:
      "The new prices of the Honda Amaze range from Rs 8.10 lakh to Rs 11.20 lakh (ex-showroom, pan-Bangladesh).",
    author: "News Today",
    date: "Feb 24, 2025",
    image: News3,
  },
  {
    title: "Mahindra BE 6 and XEV 9e Full Variant-wise Prices Out",
    description:
      "Along with revealing the Pack Two prices, Mahindra has introduced Pack One Above variant for the BE 6 and Pack Three Sel...",
    author: "Mahindra",
    date: "Feb 05, 2025",
    image: News4,
  },
];

const CarNews = () => {
  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          News to help choose your car
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="flex bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-1/3 object-cover"
              />
              <div className="flex flex-col p-4 w-2/3">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 my-2 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center mt-auto text-sm text-gray-400">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-600 font-bold rounded-full mr-2">
                      {article.author[0]}
                    </span>
                    {article.author}
                  </div>
                  <span className="ml-auto">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/news-and-stories"
            className="inline-block px-6 py-2 text-sm font-semibold text-white bg-ButtonColor rounded hover:bg-ButtonHover transition-all"
          >
            View All Latest News &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarNews;
