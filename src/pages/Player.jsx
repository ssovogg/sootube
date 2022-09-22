import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import classes from "./Player.module.css";
import Videos from "../components/Videos/Videos";
import Video from "./Video/Video";
import SearchTabs from "../components/Layout/SearchTabs/SearchTabs";

const Player = ({ video, videos }) => {
  const [newVideo, setNewVideo] = useState(video);
  const channelId = video.snippet.channelId
  const [channelInfo, setChannelInfo] = useState();
  const showVideoHandler = (video) => {
    setNewVideo(video);
  };
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8`, requestOptions)
      .then(response => response.json())
      .then(result => setChannelInfo(result.items[0]))
      .catch(error => console.log('error', error));
  },[])

  return (
    <div className={classes.player}>
      <Video video={newVideo} channelInfo={channelInfo} />
      <section className={classes.videos}>
        <SearchTabs />
        <Videos videos={videos} showVideo={showVideoHandler} />
      </section>
    </div>
  );
};

export default Player;
