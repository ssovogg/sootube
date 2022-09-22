import React from "react";
import classes from "./Video.module.css";

const Video = ({ video }) => (
  <section className={classes.video}>
    <div className={classes.iframe}>
      <iframe
        id="ytplayer"
        type="text/html"
        // width="720" 8 9
        // height="405" 8 5
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0"
        allowfullscreen
      />
    </div>
    <div className={classes.video_info}>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre>{video.snippet.description}</pre>
    </div>
  </section>
);

export default Video;
