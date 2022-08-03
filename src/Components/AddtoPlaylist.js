import { useData } from "../Context/DataContext";
import { checkItem } from "./VideoDetails";
import { useState } from "react";
import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST, ADD_PLAYLIST } from "../Reducer/reducer";

const CreateNewPlaylist = ({ playList }) => {
  const [playlistName, setPlaylistName] = useState("");
  const { dataDispatch } = useData();
  return (
    <>
      <input
        onChange={(event) => setPlaylistName(event.target.value)}
        style={{ cursor: "pointer" }}
        placeholder={"enter playlist name"}
      ></input>
      <button
        onClick={() =>
          dataDispatch({ type: ADD_PLAYLIST, playlistName: `${playlistName}` })
        }
      >
        Add to playlist
      </button>
    </>
  );
};

export const AddToPlaylist = ({ show, setShow }) => {
  const { currentvideo, playlist, dataDispatch } = useData();
  const [showPlaylist, setshowPlaylist] = useState(false);
  const playList = playlist;
  console.log("Current video:", currentvideo);
  console.log(playlist);
  return (
    <div>
      <div className="modal-bg active">
        <div className="modal">
          Add to
          <button className="modal-close" onClick={() => setShow(!show)}>
            X
          </button>
          {playList.map((item) => (
            <label>
              <input
                key={item._id}
                type="checkbox"
                onClick={() => {
                  !checkItem(item.videos, currentvideo._id)
                    ? dataDispatch({
                        type: ADD_TO_PLAYLIST,
                        Currentvideo: currentvideo,
                        _id: item._id
                      })
                    : dataDispatch({
                        type: REMOVE_FROM_PLAYLIST,
                        Currentvideo: currentvideo,
                        _id: item._id
                      });
                }}
                id={item._id}
                checked={checkItem(item.videos, currentvideo._id)}
              />
              {item.name}
            </label>
          ))}
          {!showPlaylist && (
            <div
              style={{ display: "flex" }}
              onClick={() => setshowPlaylist(!showPlaylist)}
            >
              <div style={{ margin: "0rem 1rem", cursor: "pointer" }}>+</div>
              <div style={{ cursor: "pointer" }}>Create new playlist</div>
            </div>
          )}
          {showPlaylist && <CreateNewPlaylist playlist={playlist} />}
        </div>
      </div>
    </div>
  );
};
