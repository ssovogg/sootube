import { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import AppRouter from "./pages/AppRouter";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube //
      .search(query)
      .then(videos => setVideos(videos));
  };
  useEffect(() => {
    youtube //
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <AppRouter videos={videos} onSearch={search} youtube={youtube} />
    </>
  );
}

export default App;
