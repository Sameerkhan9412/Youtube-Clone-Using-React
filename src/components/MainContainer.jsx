import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  // const catList=["All","programming","computer","suhail","arbaz","sameer"];
  const catList = [
    { name: "All", link: "" },
    { name: "computer", link: "" },
    { name: "programming", link: "" },
    { name: "suhail", link: "" },
    { name: "sameer", link: "" },
    { name: "arbaz", link: "" },
  ];

  return (
    <div className="col-span-10 flex flex-col ">
      <div className="flex my-2 mx-4">
        {catList.map((item) => (
          <ButtonList name={item.name} link={item.link} />
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
