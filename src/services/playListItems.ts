import axios from "axios";

export const playListItems = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: "AIzaSyAg9dnZDlLJ3owFV12bbbfLbb2TSWsCToU",
    maxResults: 20,
    playlistId: "PLzILwKck99iYq60c9s_RcPLwMQkoXSMyP"
  },
});


export const myChannel = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: "AIzaSyAg9dnZDlLJ3owFV12bbbfLbb2TSWsCToU",
    maxResults: 20,
    playlistId: "PLHBpVy19b0HB3LTxdPuAjIX-vnDMAMUCn"
  },
});

