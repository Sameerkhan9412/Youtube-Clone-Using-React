import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Slices/chatSlice";
import { generateRandomMsg, randomNameGenerater } from "../utils/helper";
import { FaAngleDown } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [showChat, setShowChat] = useState(true);
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

  const toggleChat = () => {
    setShowChat(!showChat);
    console.log(showChat);
  };

  return (
    <>
      <h1 className="border-2 p-2 border-b-0 rounded-md rounded-b-none flex items-center gap-2">
        Live Chat <FaAngleDown />
      </h1>
      <div className={`${showChat?"h-[340px]":"h-0"} overflow-hidden`}>
        <div
          className={`overflow-y-scroll custom-scrollbar1 border-2 border-b-0 h-[300px]`}
        >
          <div className="flex flex-col p-2">
            {chatMessagesList.map((data) => (
              <ChatMessage name={data.name} message={data.message} />
            ))}
          </div>
        </div>
        <form
          className="w-full flex items-center gap-2 p-1 border-2 border-b-0"
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
            className="w-[90%] p-1 rounded-md outline-none"
            type="text"
            name=""
            id=""
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            placeholder="Live Chat ..."
          />
          <button className="text-2xl">
            <IoSend />
          </button>
        </form>
      </div>
      <button
        className="p-2 w-full rounded-md border-2 rounded-t-none font-bold"
        onClick={() => toggleChat()}
      >
        {showChat ? "Hide Chat" : "Show Chat"}
      </button>
    </>
  );
};

export default LiveChat;
