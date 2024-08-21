import VideoContainer from "./videoContainer/index";
import ButtonContainer from "./buttonContainer";

function MainContainer() {
  return (
    <div className="pl-[195px] flex flex-col w-full">
      <div className="fixed top-[56px] left-[234px] right-0 z-10 bg-white">
           <ButtonContainer /> 
      </div>
      <div className="w-full">
      <VideoContainer />  
      </div>
    </div>
  );
}

export default MainContainer;
