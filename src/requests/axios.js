import axious from "axios";

// base url to make requests to the api
const instance = axious.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
