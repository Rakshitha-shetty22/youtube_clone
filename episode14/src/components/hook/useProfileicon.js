import { useEffect, useState } from "react";
import { API_KEY } from "../../constants/const";

const useProfileicon = (props) =>{
    const {channelId} = props;

    const [profileinfo, setProfileinfo] = useState();

    const fetchData = async() => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`);
        const jsondata = await data.json();
        setProfileinfo(jsondata);
    }
    //console.log("use",profileinfo);
 
   
    useEffect(()=>fetchData,[channelId])

    return profileinfo;
}

export default useProfileicon;