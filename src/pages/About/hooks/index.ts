import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { myChannel } from "../../../services/playListItems";

interface Video {
    snippet: {
      publishedAt: string;
      position: number;
      id: number;
      videoOwnerChannelId: string;
      channelId: string;
      title: string;
      description: string;
      playlistId: string;
      resourceId: {
        videoId: string;
      };
      thumbnails: {
        default: {
          width: number;
          height: number;
        };
        maxres: {
          url: string;
          height: number;
          width: number;
        };
      };
    };
  }

export function useAbout() {
  const [apiData, setApiData] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const controller = new AbortController();
    async function fetchData() {
      try {
        const response = await myChannel.get("/playlistItems", {
          signal: controller.signal,
        });
        console.log(response.data.items);
        setApiData(response.data.items);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new Error("Error na requisição " + error);
        }
      }
    }
    fetchData();

    return () => {
      console.log("cancelando...");
      controller.abort();
      clearTimeout(timer);
    };
  }, []);


  return {
    loading,
    apiData,
  }
}
