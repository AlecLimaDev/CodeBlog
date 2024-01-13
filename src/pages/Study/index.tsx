import { useState } from "react";
import { Container, IFrame } from "./style";
import Loading from "../../components/Loading";
import { useStudy } from "./hooks/useStudy";
import { SearchInput } from "../../components/Input/SearchInput/index";

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
  const { apiData, loading, search, setSearch, filteredStudy } = useStudy();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudy.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Container>
        <SearchInput
          placeholder="Buscar..."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {loading && <Loading />}
        {!loading && (
          <>
            {currentItems.length > 0 ? (
              currentItems.map((video: Video, index) => (
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
                {apiData
                  .slice(indexOfFirstItem, indexOfLastItem)
                  .map((video: Video) => (
                    <p key={video.snippet.id}>{video.snippet.id}</p>
                  ))}
              </div>
            )}
            <div>
              {Array.from({
                length: Math.ceil(filteredStudy.length / itemsPerPage),
              }).map((_, index) => (
                <button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Study;
