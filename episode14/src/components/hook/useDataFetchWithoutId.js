import { useState, useEffect } from 'react'
import { YOUTUBE_VIDEO } from "../../constants/const";

const useDataFetchWithoutId = () => {
    const [videoData, setVideoData] = useState([]);

    const fetchData = async () => {
      const data = await fetch(YOUTUBE_VIDEO);
      const jsondata = await data.json();
      setVideoData(jsondata?.items);
    };
  
    useEffect(() => fetchData, []);

   return videoData;
}

export default useDataFetchWithoutId
