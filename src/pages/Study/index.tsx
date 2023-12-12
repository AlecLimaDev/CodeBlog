import { Container, IFrame } from "./style";
import Loading from "../../components/Loading";
import { useStudy } from "./hooks/useStudy";

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
  const { apiData, loading } = useStudy();

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
