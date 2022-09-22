import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchTabs from "../components/Layout/SearchTabs/SearchTabs";
import Videos from "../components/Videos/Videos";

const Main = ({ videos, setVideoHandler }) => {
  const navigate = useNavigate();
  const showVideoHandler = (video) => {
    navigate(`/player`);
    setVideoHandler(video);
  };

  return (
    <>
      <SearchTabs />
      <Videos videos={videos} showVideo={showVideoHandler} />
    </>
  );
};

export default Main;
