import React from "react";
import classes from "./Video.module.css";

const Video = ({ video, channelInfo }) => {
  return (
    <section className={classes.video}>
      <div className={classes.iframe}>
        <iframe
          title={video.id}
          id={video.id}
          type="text/html"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className={classes.info}>
        <h2>{video.snippet.title}</h2>
        <div className={classes.info_detail}>
          <img
            src={channelInfo.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <div>
            <div className={classes.channel_info}>
              <h3>{video.snippet.channelTitle}</h3>
              <span>{channelInfo.snippet.description}</span>
            </div>
            <pre>{video.snippet.description}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
