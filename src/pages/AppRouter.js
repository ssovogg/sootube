import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Player from './Player';

const AppRouter = ({ videos }) => (
      <BrowserRouter>
      <Routes>
        <Route path="/sootube" element={<Main videos={videos} />} />
        <Route path="/player" element={<Player />} />
      </Routes>
      </BrowserRouter>
  );

export default AppRouter;
