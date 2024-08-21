import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closemenu } from "../../common/redux/slice";
import WatchinfoContainer from "./WatchinfoContainer";
import useDataFetchWithId from "../hook/useDataFetchWithId";
import useObtainChatid from "../hook/useObtainChatid";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const fetchedData = useDataFetchWithId(videoId);

  const chatId = useObtainChatid();

  dispatch(closemenu());
  console.log("jj",chatId);

  return (
    <div className="pt-10 pl-[210px]">
      <div className="flex w-full">
        <iframe
          width="1200"
          height="700"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg w-9/12"
        ></iframe>

        {chatId && <div className="ml-3 border border-gray-200 w-3/12 rounded-xl">
          <h1 className="pl-7 py-4 border-b-2">Live chat</h1>
          <LiveChatContainer data ={{chatId}}/>                    {/*double flower bracket*/}
        </div> }
      </div>

      <div>
        {fetchedData.map((i) => {
          return <WatchinfoContainer data={i} key={i.id} />;
        })}
      </div>
    </div>
  );
};

export default WatchPage;
