import { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import Header from "./components/Layout/Header/Header";
import AppRouter from "./pages/AppRouter";

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const onSearch = (query) => setQuery(query);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, [query]);
  return (
    <>
      {/* <Header onSearch={onSearch} /> */}
      <AppRouter videos={videos} onSearch={onSearch}/>
    </>
  );
}

export default App;
