import VideoContainer from "./videoContainer/index";
import ButtonContainer from "./buttonContainer";
import { useSelector } from "react-redux";

function MainContainer() {
  const ismenuopen = useSelector((store) => store.app.ismenuopen);
  return (
    <div className={`flex flex-col w-full ${ ismenuopen? 'pl-[195px]' : 'pl-[40px]'}`}>
      <div className={`fixed top-[56px] pb-3 z-10 bg-white  ${ismenuopen? 'left-[234px] w-[86%]' : 'left-[80px] w-[95%]'}`}>
        <ButtonContainer />
      </div>
      <div className="w-full">
        <VideoContainer />
      </div>
    </div>
  );
}

export default MainContainer;
