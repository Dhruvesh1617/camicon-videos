import { useData } from "../Context/DataContext";
import { ADD_TO_HISTORY } from "../Reducer/reducer";
import { Link } from "react-router-dom";
export const PlayList = () => {
  const { playlist, dataDispatch } = useData();
  console.log(playlist);
  return (
    <>
    Playlist
      {playlist.map(({ id, name, videos }) => (
        <div key={id}>
          <h2>{name}</h2>
          <div>
            {videos.map(
              ({ id, name, imageURL, videoURL, duration, details }) => (
                <Link
                  to={`/playlist-videos/${id}`}
                  onClick={() =>
                    dataDispatch({
                      type: ADD_TO_HISTORY,
                      video: { id, name, imageURL, videoURL, duration, details }
                    })
                  }
                >
                  <div>
                    <img src={imageURL} alt={name} />
                    <span>{duration}</span>
                    <p>{name}</p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
};
