import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { JS_TS_RXJS } from "../../../Youtube/services/JavaScript/fetch-data-base-url";
import { ComputerScience } from "../../../Youtube/services/ComputerScience/fetch-data-base-url";
import { discreteMathematic } from "../../../Youtube/services/Math/fetch-data-url";
import { Java } from "../../../Youtube/services/Java/fetch-data-base-url";

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

const fetchData = async (apiClient: any, controller: AbortController) => {
  try {
    const { data } = await apiClient.get("/playlistItems", {
      signal: controller.signal,
    });
    return data.items;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error("Error na requisição " + error);
    }
    return [];
  }
};

export const useStudy = () => {
  const [apiDataJS_TS_RXJS, setApiDataJS_TS_RXJS] = useState<Video[]>([]);
  const [apiDataComputerScience, setApiDataComputerScience] = useState<Video[]>([]);
  const [apiDataDiscreteMathematic, setApiDataDiscreteMathematic] = useState<Video[]>([])
  const [apiDataJava, setApiDataJava] = useState<Video[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchDataAndSetData = async (apiClient: any, setData: React.Dispatch<React.SetStateAction<Video[]>>) => {
      try {
        const items = await fetchData(apiClient, controller);
        setData((prevData) => [...prevData, ...items]);
      } catch (error: unknown) {
        if(error instanceof AxiosError) {
          throw new Error("Error na requisição " + error);
        } 
      }
    };

    const fetchDataPromises = [
      fetchDataAndSetData(JS_TS_RXJS, setApiDataJS_TS_RXJS),
      fetchDataAndSetData(ComputerScience, setApiDataComputerScience),
      fetchDataAndSetData(discreteMathematic, setApiDataDiscreteMathematic),
      fetchDataAndSetData(Java, setApiDataJava),
    ];

    Promise.all(fetchDataPromises)
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000); 
      });

    return () => {
      console.log("cancelando...");
      controller.abort();
    };
  }, []);

  const combinedApiData = 
  [
    ...apiDataJS_TS_RXJS, 
    ...apiDataComputerScience, 
    ...apiDataDiscreteMathematic,
    ...apiDataJava
  ];

  const filteredStudy = combinedApiData.filter(
    (item: Video) =>
      search.length === 0 || item.snippet.title.toLowerCase().includes(search)
  );

  return {
    apiData: combinedApiData,
    loading,
    search,
    setSearch,
    filteredStudy,
  };
};