import useDataFetchWithoutId from "../../hook/useDataFetchWithoutId";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  
  const fetchedData = useDataFetchWithoutId();

  return (
    <div className="flex flex-wrap ml-6 w-full mt-[95px]">
     {fetchedData.map((i) => {
          return (
            <Link to={"/watch?v=" + i.id} key={i.id} className="w-[25%]">
              <VideoCard data={i}/>
            </Link>
          );
        })}
    </div>
  );
};

export default VideoContainer;
