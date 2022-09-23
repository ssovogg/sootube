import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Channel from "./Channel/Channel";
import Main from "./Main";
import Player from "./Player";

const AppRouter = ({ videos, onSearch, youtube }) => {
  const [video, setVideo] = useState();
  const [channelInfo, setChannelInfo] = useState();
  const setVideoHandler = (video, channelInfo) => {
    setVideo(video);
    setChannelInfo(channelInfo);
  };

  return (
    <BrowserRouter>
      <Header onSearch={onSearch} />
      <Routes>
        <Route
          path="/sootube"
          element={
            <Main
              videos={videos}
              setVideoHandler={setVideoHandler}
              youtube={youtube}
            />
          }
        />
        <Route
          path="/player"
          element={
            <Player
              videos={videos}
              video={video}
              channelInfo={channelInfo}
              youtube={youtube}
            />
          }
        />
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
