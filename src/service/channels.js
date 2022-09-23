class Channels {
  constructor() {
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  channelOne = (channelId) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
}
