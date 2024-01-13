import axios, { AxiosError } from "axios";

export const Java = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: import.meta.env.VITE_YOUTUBE_KEY,
    maxResults: 30,
    playlistId: import.meta.env.VITE_YOUTUBE_JAVA,
  },
});

const controller = new AbortController();
export async function fetchData() {
  try {
    const { data } = await Java.get("/playlistItems", {
      signal: controller.signal,
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error("Error na requisição " + error);
    }
  }
}
