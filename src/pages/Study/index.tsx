import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { playListItems } from "../../services/playListItems";
import { Container, IFrame } from "./style";
import Loading from "../../components/Loading";

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

const Study = () => {
  const [apiData, setApiData] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const controller = new AbortController();
    async function fetchData() {
      try {
        const response = await playListItems.get("/playlistItems", {
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

  return (
    <>
      <Container>
        {loading && <Loading />}
        {!loading && (
          <>
            {apiData.length > 0 ? (
              apiData.map((video: Video, index) => (
                <section key={index}>
                  <IFrame
                    title="PlayListItem"
                    src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <h3>{video.snippet.title}</h3>
                </section>
              ))
            ) : (
              <div>
                {apiData.map((video: Video) => (
                  <p>{video.snippet.id}</p>
                ))}
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Study;
