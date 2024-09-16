import { useSelector } from "react-redux";
import useDataFetchWithoutId from "../../hook/useDataFetchWithoutId";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "../../shimmer/Shimmer";

const VideoContainer = () => {
  const fetchedData = useDataFetchWithoutId();
  const ismenuopen = useSelector((store) => store.app.ismenuopen);
 
  if (!fetchedData || fetchedData.length === 0) {
    return <Shimmer />;
  }
  
  return (
    <div className="flex flex-wrap ml-6 w-full mt-[95px]">
     {fetchedData.map((i) => {
          return (
            <Link to={"/watch?v=" + i.id} key={i.id} className={`${ismenuopen ?'w-[25%]' : 'w-[20%]'}`}>
              <VideoCard data={i}/>
            </Link>
          );
        })}
    </div>
  );
};

export default VideoContainer;
