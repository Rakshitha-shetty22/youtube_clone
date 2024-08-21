import { useEffect, useState } from "react";
import { YOUTUBE_LIVE_API } from "../../../../constants/const";
import VideoCard from "../VideoCard";
import { Link } from "react-router-dom";

const LiveVideoContainer = () => {
  const [liveData, setLiveData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_LIVE_API);
    const jsondata = await data.json();
    setLiveData(jsondata?.items);
  };

  useEffect(() => fetchData, []);


  return (
    <div className="flex flex-wrap ml-6 w-full mt-[95px] pl-[195px]">
      {liveData.map((i) => {
        return(<Link to={"/watch?v=" + i.id.videoId} key={i.id} className="w-[25%]">
          <VideoCard data={i}/>
        </Link>) 
      })} 
    </div>
  );
};

export default LiveVideoContainer;
