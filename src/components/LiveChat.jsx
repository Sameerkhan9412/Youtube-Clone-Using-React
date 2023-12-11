import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Slices/chatSlice";
import { generateRandomMsg, randomNameGenerater } from "../utils/helper";
import { FaAngleDown } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessagesList = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      // console.log("API POLLING IS NOW");
      dispatch(
        addMessage({
          name: randomNameGenerater(),
          message: generateRandomMsg(20),
        })
      );
    }, 500);
    return () => clearInterval(i);
  });
  return (
    <>
      <h1 className="border-2 p-2 rounded-lg flex items-center gap-2">Live Chat <FaAngleDown /></h1>
      <div
        className=" overflow-y-scroll h-[300px]  "
      >
        <div className="flex flex-col p-2">
          {chatMessagesList.map((data) => (
            <ChatMessage name={data.name} message={data.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full flex items-center gap-2 p-1 rounded-lg border-2 border-gray-400"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("On form submit", liveMessage);
          dispatch(
            addMessage({
              name: "sameer",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[90%] p-1"
          type="text"
          name=""
          id=""
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="text-2xl"><IoSend/></button>
      </form>
    </>
  );
};

export default LiveChat;
