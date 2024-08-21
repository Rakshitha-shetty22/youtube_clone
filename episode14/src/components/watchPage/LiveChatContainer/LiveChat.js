const LiveChat = (props) => {
    const {data} = props;
//    console.log("hh",data);
    
  return (
    <div className="flex  mt-4">
      <img className="rounded-full w-8 h-8 px-2" src={data?.authorDetails?.profileImageUrl} alt="profilephoto"/> 
      <h4  className="text-[12px] px-2">
        <span className="text-slate-500 whitespace-nowrap pr-2">{data?.authorDetails?.displayName}</span>{data?.snippet?.textMessageDetails?.messageText} </h4>
    </div> 
  )
}

export default LiveChat
