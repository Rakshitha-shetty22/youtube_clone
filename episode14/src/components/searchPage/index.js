import { useNavigate } from "react-router-dom";
import useSearchvideo from "../hook/useSearchvideo";

const SearchPage = () => {
  const searchResult = useSearchvideo();

  const navigate = useNavigate();

  const handlenavigation = (videoId) => {
    navigate(`/watch?v=${videoId}`);
    console.log("hi", videoId);
  };

  return (
    <div className="pl-[450px] pt-[35px]">
      {searchResult?.length > 0 ? (
        searchResult.map((video) => (
          <div
            key={video.id.videoId}
            className="flex  mt-8"
            onClick={() => handlenavigation(video.id.videoId)}
          >
            <div className="w-4/12">
              <img
                className="rounded-xl"
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
            </div>
            <div className="flex flex-col pl-4 pt-2 w-8/12 ">
            <h3 className="">{video.snippet.title}</h3>
            <h3 className="text-gray-500 pt-2">{video.snippet.channelTitle}</h3>
            <h3 className="text-gray-500 pt-2 text-xs">{video.snippet.description}</h3>
            </div>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchPage;
