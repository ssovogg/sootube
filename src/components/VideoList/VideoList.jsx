import React from "react";
import classes from "./VideoList.module.css";

const VideoList = ({ video, showVideo }) => {
  const onClick = () => showVideo(video);
  return (
  <li className={classes["video-list"]} onClick={onClick}>
    <div className={classes.img}>
      <img src={video.snippet.thumbnails.high.url} alt="d" />
    </div>
    <div className={classes.info}>
      <h2>{video.snippet.title}</h2>
      <span>{video.snippet.channelTitle}</span>
      <span>{video.snippet.publishedAt}</span>
    </div>
  </li>
)};

export default VideoList;
