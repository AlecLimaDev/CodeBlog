import axios from "axios";

export const playListItems = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: import.meta.env.VITE_YOUTUBE_KEY,
    maxResults: 20,
    playlistId: import.meta.env.VITE_YOUTUBE_PLAYLISTITEMS
  },
});


export const myChannel = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: import.meta.env.VITE_YOUTUBE_KEY,
    maxResults: 20,
    playlistId: import.meta.env.VITE_YOUTUBE_MYPLAYLIST
  },
});

