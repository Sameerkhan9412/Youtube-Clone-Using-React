import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Slices/chatSlice";
import { generateRandomMsg, randomNameGenerater } from "../utils/helper";

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
      <div
        className="border-2 border-black w-[500px] ml-10 bg-green-200 overflow-y-scroll h-[300px] flex flex-col-reverse"
      >
        <div>
          {chatMessagesList.map((data) => (
            <ChatMessage name={data.name} message={data.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
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
          className="w-[90%] p-2"
          type="text"
          name=""
          id=""
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="border border-black">send</button>
      </form>
    </>
  );
};

export default LiveChat;
