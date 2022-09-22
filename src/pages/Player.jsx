import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import classes from "./Player.module.css";
import Videos from "../components/Videos/Videos";
import Video from "./Video/Video";
import SearchTabs from "../components/Layout/SearchTabs/SearchTabs";

const Player = ({ video, videos }) => {
  const [newVideo, setNewVideo] = useState();
  const showVideoHandler = (video) => {
    setNewVideo(video);
  };

  return (
    <div className={classes.player}>
      <Video video={!newVideo ? video : newVideo} />
      <section className={classes.videos}>
        <SearchTabs />
        <Videos videos={videos} showVideo={showVideoHandler} />
      </section>
    </div>
  );
};

export default Player;
