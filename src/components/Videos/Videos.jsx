import React from "react";
import VideoList from "../VideoList/VideoList";
import classes from "./Videos.module.css";

const Videos = ({ videos, showVideo, youtube }) => {
  return (
  <ul className={classes.videos}>
    {videos.map((video) => (
      <VideoList key={video.etag} video={video} showVideo={showVideo} youtube={youtube} />
    ))}
  </ul>
)};

export default Videos;
