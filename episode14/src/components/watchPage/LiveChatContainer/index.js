import { useEffect, useState } from "react";
import { API_KEY } from "../../../constants/const";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../common/redux/liveMessage";

const LiveChatContainer = (props) => {
  const { data } = props;
  const { chatId } = data;
  const [liveChat, setLiveChat] = useState([]);

  const dispatch = useDispatch();

  const chat = useSelector((e)=>e.messages.messages)

  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${chatId}&part=snippet,authorDetails&key=${API_KEY}`
    );
    const jsonData = await data.json();
    setLiveChat(jsonData?.items);
   
  };

 useEffect(()=>{
    const timer = setInterval(()=>fetchData(),2000)
    return ()=> {
        clearInterval(timer);
    }
},[chatId])

useEffect(() => {
  liveChat.map((i) => {
    dispatch(addData(i));
  });
}, [liveChat]);           //used redux to to maintain the no. of chat...

console.log(chat);

return (
  <div className="overflow-y-scroll h-[40rem] flex flex-col-reverse">
    {chat.map((i) => (
      <LiveChat data={i} key={i.id} />
    ))}
  </div>
);
};

export default LiveChatContainer;