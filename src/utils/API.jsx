import axios from "axios";
import key from "../../key";

export const API_KEY = key;

export const no_avatar_url = "/assets/imgs/avatar.png";
export const no_poster_url = "/assets/imgs/no-poster.png";

export const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: "bearer put token here",
  },
});
