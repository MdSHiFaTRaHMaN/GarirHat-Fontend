import { useParams } from "react-router-dom";
import { useMyVideos } from "../../api/api";
import LoadingWhile from "../../components/LoadingWhile";

const SingleVideo = () => {
  const { videoId } = useParams();
  const { myVideos, isLoading } = useMyVideos(videoId);

  if (isLoading) {
    return <LoadingWhile />;
  }

  return (
    <div className="w-full lg:w-10/12 mx-auto p-2">
      <div className="mt-6 bg-white ">
        <iframe
          className="w-full h-[200px] lg:h-[545px] rounded"
          src={myVideos.embedUrl}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="my-4">
          <h2 className="text-lg font-semibold">
            {myVideos.make} {myVideos.model} {myVideos.trim}
          </h2>
          <h4>Year: {myVideos.year} </h4>
          <h4>
            Video Upload Date:{" "}
            {new Date(myVideos.created_at).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
