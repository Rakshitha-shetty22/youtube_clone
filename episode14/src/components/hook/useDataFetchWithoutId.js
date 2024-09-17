import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO } from "../../constants/const";

const useDataFetchWithoutId = () => {
  const [videoData, setVideoData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch(YOUTUBE_VIDEO);
    const jsondata = await data.json();
    setShowShimmer(false);
    setVideoData((i) => [...i, ...jsondata?.items]);
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollWidth)
      fetchData();
  };
  return { videoData, showShimmer };
};

export default useDataFetchWithoutId;
