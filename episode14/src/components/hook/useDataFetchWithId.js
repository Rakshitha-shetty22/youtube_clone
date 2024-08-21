import { useState, useEffect } from 'react'
import { YOUTUBE_VIDEO_BASED_ON_ID } from "../../constants/const";

const useDataFetchWithId = (videoId) => {
    const [videoData, setVideoData] = useState([]);

    const fetchData = async () => {
      const data = await fetch( YOUTUBE_VIDEO_BASED_ON_ID + videoId);
      const jsondata = await data.json();
      setVideoData(jsondata?.items);
    };
  
    useEffect(() => fetchData, []);

   return videoData;
}

export default useDataFetchWithId
