import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChannelTabs from "../components/Layout/ChannelTabs/ChannelTabs";
import SearchTabs from "../components/Layout/SearchTabs/SearchTabs";
import Videos from "../components/Videos/Videos";
import classes from './Main.module.css';

const Main = ({ videos, setVideoHandler }) => {
  const navigate = useNavigate();
  const showVideoHandler = (video) => {
    navigate(`/player`);
    setVideoHandler(video);
  };

  return (
    <>
      <SearchTabs />
      <div className={classes.main}>
        <ChannelTabs />
        <Videos videos={videos} showVideo={showVideoHandler} />
      </div>
    </>
  );
};

export default Main;
