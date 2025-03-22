import { useAllVideos } from "../../api/api";
import { Link, useLocation } from "react-router-dom";
const UpNextVideos = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const makeName = params.get("make");
  const modelName = params.get("model");

  const make = makeName ? makeName : "";
  const model = modelName ? modelName : "";

  const { allVideos } = useAllVideos(make, model);

  return (
    <div className="bg-white w-full">
      <h2 className="text-lg font-semibold mb-4">More Videos</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {allVideos.slice(0, 6).map((video, index) => (
          <Link to={`/single-video/${video.id}`} key={index}>
            <div className="flex items-center space-x-4 p-2 border rounded-lg shadow-md">
              <div className="relative w-36 h-24 bg-gray-100 d">
                <iframe
                  className="w-full h-full rounded-lg pointer-events-none"
                  src={video.embedUrl}
                  title="YouTube Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col justify-between text-sm">
                <h3 className="font-semibold text-gray-800 leading-tight">
                  {video.year} {video.make} {video.model} {video.trim}
                </h3>
                <p className="text-gray-600">
                  {new Date(video.created_at).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpNextVideos;
