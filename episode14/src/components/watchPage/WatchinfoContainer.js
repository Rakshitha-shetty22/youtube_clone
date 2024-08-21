import { useSearchParams } from "react-router-dom";
import useProfileicon from "../hook/useProfileicon";

const WatchinfoContainer = (props) => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const {data} = props; 
    const { snippet} = data;
    const { channelId } = snippet;
    
    //console.log(data);

    const profileIcon = useProfileicon({channelId}); 
   
      return videoId === data.id ? (
        <div>
          <h1 className="text-xl font-bold py-4">{data?.snippet?.title}</h1>
         <div className="flex"> 
          <img
            className="w-12 rounded-full pr-4"
            src={profileIcon?.items[0]?.snippet?.thumbnails?.default?.url}
            alt="profile"
          />
          <p className="font-bold">{data?.snippet?.channelTitle}</p>
          </div>
        </div>
      ) : null;
    }

export default WatchinfoContainer
