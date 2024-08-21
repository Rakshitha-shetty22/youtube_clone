import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_CAT } from "../../../constants/const";
import Buttons from "./Buttons";

const ButtonContainer = () => {
  const [buttonList, setButtonList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_CAT);
    const jsondata = await data.json();
    setButtonList(jsondata?.items);
  };

  useEffect(() => fetchData, []);
  return (
    <div
      className="flex"
      style={{ scrollbarWidth: "none" }}
    >
      {buttonList.map((i) => (
        <Buttons data={i} key={i.id} />
      ))}
    </div>
  );
};

export default ButtonContainer;
