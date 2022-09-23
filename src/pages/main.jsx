import React from "react";
import { useNavigate } from "react-router-dom";
import ChannelTabs from "../components/Layout/ChannelTabs/ChannelTabs";
import SearchTabs from "../components/Layout/SearchTabs/SearchTabs";
import Videos from "../components/Videos/Videos";
import classes from './Main.module.css';

const Main = ({ videos, clickVideo, youtube }) => {
  const navigate = useNavigate();
  const showVideoHandler = async (video) => {
    navigate(`/player`);
    const channelInfo = await youtube.channel(video.snippet.channelId);
    clickVideo(video, channelInfo[0]);
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
