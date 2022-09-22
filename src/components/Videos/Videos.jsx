import React from "react";
import VideoList from "../VideoList/VideoList";
import classes from "./Videos.module.css";

const Videos = ({ videos, showVideo }) => {
  return (
  <ul className={classes.videos}>
    {videos.map((video) => (
      <VideoList key={video.etag} video={video} showVideo={showVideo}/>
    ))}
  </ul>
)};

export default Videos;
