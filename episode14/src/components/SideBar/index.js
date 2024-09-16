import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import shortsIcon from "../../assests/shorts.png";
import subscriptionIcon from "../../assests/subscription.png";
import historyIcon from "../../assests/history.png";
import playlistIcon from "../../assests/playlist.png";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import liveIcon from "../../assests/live.png";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import sportsIcon from "../../assests/sports.png";
import SideBarCard from "./SideBarCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const ismenuopen = useSelector((store) => store.app.ismenuopen);
  return (
      <div className="w-[11%]">
        {ismenuopen && (
          <div className="fixed top-[58px] w-[11%] z-50 bg-white">
         <Link to="/"><SideBarCard icon={<HomeOutlinedIcon />} label="Home" /></Link> 
            <SideBarCard
              icon={<img src={shortsIcon} alt="Shorts Icon" />}
              label="Shorts"
            />
            <SideBarCard
              icon={<img src={subscriptionIcon} alt="Subscriptions Icon" />}
              label="Subscriptions"
            />
            <hr className="w-[100%] border-t-2 border-gray-300 my-4" />
            <SideBarCard
              icon={<img src={historyIcon} alt="History Icon" />}
              label="History"
            />
            <SideBarCard
              icon={<img src={playlistIcon} alt="History Icon" />}
              label="Playlists"
            />
            <SideBarCard icon={<AccessTimeSharpIcon />} label="Watch later" />
            <SideBarCard icon={<ThumbUpOutlinedIcon />} label="Liked videos" />
            <hr className="w-[100%] border-t-2 border-gray-300 my-4" />
            <SideBarCard
              icon={<WhatshotOutlinedIcon />}
              label="Trending"
              heading="Explore"
            />
            <SideBarCard icon={<ShoppingBagOutlinedIcon />} label="Shopping" />
            <SideBarCard icon={<MusicNoteOutlinedIcon />} label="Music" />
            <SideBarCard icon={<LiveTvOutlinedIcon />} label="Films" />
        <Link to="live"><SideBarCard
              icon={<img src={liveIcon} alt="History Icon" />}
              label="Live"
            /></Link>
            <SideBarCard icon={<SportsEsportsOutlinedIcon />} label="Gaming" />
            <SideBarCard icon={<FeedOutlinedIcon />} label="News" />
            <SideBarCard
              icon={<img src={sportsIcon} alt="sports Icon" />}
              label="Sports"
            />
          </div>
        ) }
      </div>
  )
}

export default SideBar
