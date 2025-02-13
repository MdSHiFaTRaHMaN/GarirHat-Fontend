import { Card, Pagination } from "antd";
import { FaPlay } from "react-icons/fa";
import Youtube from "../../assets/images/youtubet.jpg";

const videos = [
  {
    title: "Mahindra XEV 9e First Drive Impressions | Surprisingly...",
    thumbnail: Youtube,
    views: "11.8K Views",
    daysAgo: "3 days ago",
    channel: "ZigWheels",
  },
  {
    title: "MG Windsor EV Variants Explained: Base Model vs Mid...",
    thumbnail: Youtube,
    views: "4.6K Views",
    daysAgo: "4 days ago",
    channel: "GarirHat",
  },
  {
    title: "Tata Curvv vs Hyundai Creta: Traditional Or Unique?",
    thumbnail: Youtube,
    views: "112K Views",
    daysAgo: "28 days ago",
    channel: "GarirHat",
  },
  {
    title: "2024 Honda Amaze Review: Perfect Sedan For Small Family...",
    thumbnail: Youtube,
    views: "74K Views",
    daysAgo: "1 month ago",
    channel: "GarirHat",
  },
  {
    title: "Tata Curvv vs Hyundai Creta: Traditional Or Unique?",
    thumbnail: Youtube,
    views: "112K Views",
    daysAgo: "28 days ago",
    channel: "GarirHat",
  },
  {
    title: "2024 Honda Amaze Review: Perfect Sedan For Small Family...",
    thumbnail: Youtube,
    views: "74K Views",
    daysAgo: "1 month ago",
    channel: "GarirHat",
  },
  {
    title: "Tata Curvv vs Hyundai Creta: Traditional Or Unique?",
    thumbnail: Youtube,
    views: "112K Views",
    daysAgo: "28 days ago",
    channel: "GarirHat",
  },
  {
    title: "2024 Honda Amaze Review: Perfect Sedan For Small Family...",
    thumbnail: Youtube,
    views: "74K Views",
    daysAgo: "1 month ago",
    channel: "GarirHat",
  },
];

const UpNextVideos = () => {
  return (
    <div className="p-4 bg-white w-full">
      <h2 className="text-lg font-semibold mb-4">Up Next</h2>
      <div className="grid grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-2 border rounded-lg shadow-md"
          >
            <div className="relative w-36 h-24">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md">
                <FaPlay className="text-white text-lg" />
              </div>
            </div>
            <div className="flex flex-col justify-between text-sm">
              <h3 className="font-semibold text-gray-800 leading-tight">
                {video.title}
              </h3>
              <p className="text-gray-500">{video.channel}</p>
              <p className="text-gray-400">
                {video.views} • {video.daysAgo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpNextVideos;
