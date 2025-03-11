import { Button, Divider } from "antd";
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import { FaPlay, FaYoutube } from "react-icons/fa";
import Youtube from "../../assets/images/youtubet.jpg";
import { IoVideocam } from "react-icons/io5";

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
const VideoReviews = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Cars Video Reviews</h1>
        <Button className="bg-ButtonColor hover:!bg-ButtonHover !text-white font-semibold">
          <IoVideocam /> Add Video Review
        </Button>
      </div>
      <div className="mt-6 bg-white grid lg:flex gap-5 ">
        <iframe
          className="w-full h-[295px] rounded-lg"
          src="https://www.youtube.com/embed/QEZry7fdej0?si=9XIXPCkdv7KHRq6v"
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Video Info */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            The XEV 9e is Mahindra at its best! | First Drive Review |
            PowerDrift
          </h2>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <FaYoutube className="text-red-600 mr-1" />
            <span className="mr-2">GarirHat</span> •
            <span className="ml-2">6.4K Views • 3 days ago</span>
          </div>
          <Divider />
          <div className="mt-3 flex items-center justify-between text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <AiOutlineLike className="mr-1" /> 4.8K Likes
              </span>
              <span className="flex items-center">
                <AiOutlineComment className="mr-1" /> 34 Comments
              </span>
            </div>
          </div>
          <div>
            <Divider />
          </div>
        </div>
      </div>
      <div className="p-4 bg-white w-full">
        <h2 className="text-lg font-semibold mb-4">More Reviews</h2>
        <div className="grid lg:grid-cols-2 gap-4">
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
    </div>
  );
};

export default VideoReviews;
