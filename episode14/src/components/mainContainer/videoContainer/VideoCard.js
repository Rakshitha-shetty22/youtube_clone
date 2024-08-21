import useProfileicon from "../../hook/useProfileicon";

const VideoCard = (props) => {
  const { data } = props;
  const { snippet, statistics } = data;
  const { channelId } = snippet;

  const profileIcon = useProfileicon({ channelId });
  //console.log("p", profileIcon);

  return (
    <div className="mr-8 w-[92%] mt-8 ">
      <img
        className="w-[370px] rounded-xl"
        src={snippet?.thumbnails?.medium?.url}
        alt="videoimage"
      />
      <div className="flex w-full">
        <div className="pt-2 pl-3 w-2/12 pr-3">
          <img
            className="w-10 rounded-full"
            src={profileIcon?.items[0]?.snippet?.thumbnails?.default?.url}
            alt="profile"
          />
        </div>

        <div className="w-10/12">
          <h5 className="font-semibold pt-2">{snippet?.title}</h5>
          <p className="text-[#606060] font-normal pt-1 text-[15px]">
            {snippet?.channelTitle}
          </p>
          <p className="text-[#606060] font-normal text-[15px]">
            {statistics?.viewCount} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
