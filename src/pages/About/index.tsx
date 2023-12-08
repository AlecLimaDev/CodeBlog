import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { myChannel } from "../../services/playListItems";
import * as Styles from "./style";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { IFrame } from "../Study/style";

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

const About = () => {
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

  return (
    <>
      <Styles.About>
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
        <Link to="/posts/create" className="btn">
          Criar post
        </Link>
      </Styles.About>
    </>
  );
};

export default About;
