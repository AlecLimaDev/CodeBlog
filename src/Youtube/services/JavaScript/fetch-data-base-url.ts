import axios, { AxiosError } from "axios";

export const JS_TS_RXJS = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: import.meta.env.VITE_YOUTUBE_KEY,
    maxResults: 20,
    playlistId: import.meta.env.VITE_YOUTUBE_JS_TS_RXJS,
  },
});

const controller = new AbortController();
export async function fetchData() {
  try {
    const { data } = await JS_TS_RXJS.get("/playlistItems", {
      signal: controller.signal,
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error("Error na requisição " + error);
    }
  }
}
