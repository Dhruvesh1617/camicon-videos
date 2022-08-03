import { useData } from "../Context/DataContext";
import { ADD_TO_HISTORY } from "../Reducer/reducer";
import { Link } from "react-router-dom";
export const PlayList = () => {
  const { playlist, dataDispatch } = useData();
  console.log(playlist);
  return (
    <>
    <h1 style={{textAlign:"center"}}>Playlist</h1>
      {playlist.map(({_id, name, videos }) => (
        <div key={_id}  className="main-container">
          <h2>{name}</h2>
          <div>
            {videos.map(
              ({_id, name, imgUrl, videoUrl, duration, details }) => (
                <Link
                  to={`/playlist-videos/${_id}`}
                  onClick={() =>
                    dataDispatch({
                      type: ADD_TO_HISTORY,
                      video: {_id, name, imgUrl, videoUrl, duration, details }
                    })
                  }
                >
               <div className="main-container">
          <div key={_id} className="Card mid-width-card home-video-container">
            <Link to={`/${_id}`}>
              <img src={imgUrl}  style={{ height: "30vh", width: "100%" }} alt="liked-video" />
              <h2>{name}</h2>
              <span
                style={{  backgroundColor: "black",
                color: "white",position: "absolute", bottom: "115px", right: "60px" }}
              >
              {duration}
              </span>
            </Link>
          </div>
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
