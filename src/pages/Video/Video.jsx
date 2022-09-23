import React from "react";
import classes from "./Video.module.css";

const Video = ({ video, channelInfo }) => {
  const { title, description, channelTitle } = video.snippet;
  const { url } = channelInfo.snippet.thumbnails.medium;

  return (
    <section className={classes.video}>
      <div className={classes.iframe}>
        <iframe
          id="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className={classes.info}>
        <h2>{title}</h2>
        <div className={classes.info_detail}>
          <img src={url} alt={title} />
          <div>
            <div className={classes.channel_info}>
              <h3>{channelTitle}</h3>
              <span>{channelInfo.snippet.description}</span>
            </div>
            <pre>{description}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
