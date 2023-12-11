import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { myChannel } from "../../services/playListItems";
import * as Styles from "./style";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { IFrame } from "../Study/style";
import { useAbout } from "./hooks/useAbout";

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
  const { apiData, loading } = useAbout();
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
