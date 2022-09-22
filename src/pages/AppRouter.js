import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Layout/Header/Header';
import Main from './Main';
import Player from './Player';

const AppRouter = ({ videos, onSearch }) => {
  const [video, setVideo] = useState();
  const setVideoHandler = (video) => setVideo(video);

  return (
      <BrowserRouter>
        <Header onSearch={onSearch} />
      <Routes>
        <Route path="/sootube" element={<Main videos={videos} setVideoHandler={setVideoHandler}/>} />
        <Route path="/player" element={<Player videos={videos} video={video} />} />
      </Routes>
      </BrowserRouter>
  )};

export default AppRouter;
