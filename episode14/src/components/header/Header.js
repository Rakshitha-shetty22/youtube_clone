import MenuIcon from "../../assests/menu.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import { togglemenu } from "../../common/redux/slice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../../constants/const";
import SuggestedtextContainer from "./SuggestedtextContainer";
import { cacheResult } from "../../common/redux/search";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [text, setText] = useState("");
  const [getsuggested, setGetsuggested] = useState([]);
  const [showSuggestion, getshowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchlist = useSelector((store) => store.searchStore.searchlist);

  const handleClick = () => {
    dispatch(togglemenu());
  };
  //console.log(searchlist);


  const fetchData = async () => {
    // console.log("API - " , text);
    const data = await fetch(YOUTUBE_SEARCH_API + text);
    const jsondata = await data.json();
    setGetsuggested(jsondata[1]);
    dispatch(
      cacheResult({
        [text]: jsondata[1],
      })
    );
  };
console.log("ss",getsuggested);

  useEffect(() => {
    //make the api call after evry key press
    //but if the difference btwn 2 api call is less that 200ms then decline the api call -- debouncing
    if (searchlist[text])
      setGetsuggested(
        searchlist[text]
      ); //if its already present show that itself
    else {
      const timer = setTimeout(() => fetchData(), 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [text]);
  
  const handleSuggestionClick = (suggestedText) => {
    setText(suggestedText); 
    navigate(`/search?q=${suggestedText}`); 
    getshowSuggestion(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex w-full justify-between py-2 px-4">
        <div className="flex w-full justify-between">
          <div className="flex justify-between items-center">
            <button className="cursor-pointer" onClick={handleClick}>
              <img
                src={MenuIcon}
                alt="menu"
                className="h-[20px] w-[25px] ml-[12px] mr-[20px]"
              />
            </button>
            <div className="flex items-center">
              <YouTubeIcon
                className="text-red-500"
                style={{ fontSize: "35px" }}
              />
              <div className="flex items-center">
                <h2 className="font-bold text-xl font-sans">YouTube</h2>
                <h6 className="pl-1 h-10 text-start font-light text-sm">IN</h6>
              </div>
            </div>
          </div>

          <div className="w-5/12 relative flex">
            <input
              type="text"
              className="border border-gray-300 rounded-e-full rounded-s-full py-[7px] w-[80%] pl-4 focus:border-blue-500 outline-none"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => getshowSuggestion(true)}
              //onBlur={() => getshowSuggestion(false)} //out from focus
            />

            <div className="absolute flex flex-col top-[40px] w-[80%] shadow-lg">
              {text &&
                showSuggestion &&
                getsuggested.map((i) => {
                  return (
            <SuggestedtextContainer key={i}
                      data={i}
                      click={() => handleSuggestionClick(i)}
                    /> 
                  );
                })}
            </div>

            <div className="bg-gray-50 w-14 absolute right-[120px] h-[40px] rounded-e-full flex items-center justify-center border border-gray-300">
              <button>
                <SearchSharpIcon />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between w-[5%]">
            <NotificationsNoneOutlinedIcon style={{ fontSize: "30px" }} />
            <AccountCircleOutlinedIcon style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
