import axios, { AxiosError } from "axios";

export const DataStructure = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: import.meta.env.VITE_YOUTUBE_FILA,
    maxResults: 34,
    playlistId: import.meta.env.VITE_YOUTUBE_DATASTRUCTURE,
  },
});

const controller = new AbortController();
export async function fetchData() {
  try {
    const { data } = await DataStructure.get("/playlistItems", {
      signal: controller.signal,
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error("Error na requisição " + error);
    }
  }
}
