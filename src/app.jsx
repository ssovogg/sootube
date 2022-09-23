import { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import Header from "./components/Layout/Header/Header";
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
  }, []);

  return (
    <>
      <AppRouter videos={videos} onSearch={search} />
    </>
  );
}

export default App;
