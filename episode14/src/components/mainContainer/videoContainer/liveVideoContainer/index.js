import { useEffect, useState } from "react";
import { YOUTUBE_LIVE_API } from "../../../../constants/const";
import VideoCard from "../VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "../../../shimmer/Shimmer";
import { useSelector } from "react-redux";

const LiveVideoContainer = () => {
  const [liveData, setLiveData] = useState([]);
  const ismenuopen = useSelector((store) => store.app.ismenuopen);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_LIVE_API);
    const jsondata = await data.json();
    setLiveData(jsondata?.items);
  };

  useEffect(() => fetchData, []);

  return (
    <div className={`flex flex-wrap ml-6 w-full mt-[30px] ${ ismenuopen? 'pl-[195px]' : 'pl-[40px]'}`}>
      {liveData ? <Shimmer /> : liveData.map((i) => {
        return (
          <Link to={"/watch?v=" + i.id.videoId} key={i.id} className="w-[25%]">
            <VideoCard data={i} />
          </Link>
        );
      })}
    </div>
  );
};

export default LiveVideoContainer;
