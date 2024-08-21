import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../../constants/const";

const useObtainChatid = () => {
    const [chatId,setChatId] = useState()
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    const fetchData = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${API_KEY}`);
        const jsondata = await data.json();
        setChatId(jsondata?.items[0]?.liveStreamingDetails?.activeLiveChatId);
    }

    useEffect(()=> fetchData,[])

  return chatId;
}

export default useObtainChatid;