import React from "react";
import { useState } from "react";
import SearchTabs from "../components/Layout/SearchTabs/SearchTabs";
import Videos from "../components/Videos/Videos";

const Main = ({ videos }) => {
  const [showVideoMode, setShowVideoMode] = useState(false);
  const showVideoHandler = (video) => {
    // setVideo(video);
    setShowVideoMode(true);
  };

  return (
    <>
      <SearchTabs />
      <Videos videos={videos} showVideo={showVideoHandler} />
    </>
  );
};

export default Main;
