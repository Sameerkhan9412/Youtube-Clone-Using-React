import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux/es/hooks/useSelector";
const MainContainer = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  return (
    // <div className="col-span-7 p-2 max-w-[100vw] overflow-hidden">
    <div className={`${!isMenuOpen?"col-span-7":"col-span-5"} p-2 max-w-[100vw] overflow-hidden`}>
      <ButtonList/>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
