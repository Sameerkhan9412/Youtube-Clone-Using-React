import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux/es/hooks/useSelector";
const MainContainer = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  return (
    <div className={`col-span-7 py-2 max-w-[100vw] overflow-hidden mt-14 ${!isMenuOpen?"lg:col-span-7":"lg:col-span-5"}`}>
      <ButtonList/>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
