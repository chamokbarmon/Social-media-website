import React from "react";
import Banar from "../../Banar/Banar";
import ChatBox from "../ChatBox/ChatBox";
import FirstmediaSection from "../Media/FirstmediaSection";
import Post from "../Media/Post/Post";

const Home = () => {
  return (
    <div>
      <Banar></Banar>
      <Post />
      <FirstmediaSection />
      <ChatBox />
    </div>
  );
};

export default Home;
