
const TipsandAdviceCard = ({ news }) => {
  return (
    <div className="flex flex-col sm:flex-row border rounded-lg shadow-md p-4">
      {/* Image Section */}
      <div className="w-full sm:w-1/3">
        <img
          src={news.image}
          alt="News"
          className="w-full h-40 sm:h-32 object-cover rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="sm:ml-4 flex-1">
        <h2 className="text-lg font-semibold text-gray-900">{news.title}</h2>
        <p className="text-gray-600 mt-1">{news.description}</p>

        {/* Author and Date */}
        <div className="flex items-center mt-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
            {news.author[0]}
          </div>
          <div className="ml-2 text-sm text-gray-500">
            <p>{news.author}</p>
            <p>{news.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsandAdviceCard;
