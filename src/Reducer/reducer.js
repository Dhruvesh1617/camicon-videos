import { v4 } from "uuid";
export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const SAVE_VIDEO = "SAVE_VIDEO";
export const UNSAVED_VIDEO = "UNSAVED_VIDEO";
export const LIKED_VIDEO = "LIKED_VIDEO";
export const NOT_LIKED_VIDEO = "NOT_LIKED_VIDEO";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const reducerfunction = (
  state,
  { type, video, Currentvideo, playlistName, id }
) => {
  switch (type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: state.history.concat(video),
        currentvideo: video
      };
    case SAVE_VIDEO:
      return { ...state, savedvideo: state.savedvideo.concat(video) };
    case UNSAVED_VIDEO:
      return {
        ...state,
        savedvideo: state.savedvideo.filter((video) => video.id !== id)
      };
    case LIKED_VIDEO:
      return { ...state, likedvideo: state.likedvideo.concat(video) };
    case NOT_LIKED_VIDEO:
      return {
        ...state,
        likedvideo: state.likedvideo.filter((video) => video.id !== id)
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.concat({
          id: v4(),
          name: playlistName,
          videos: []
        })
      };
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item.id === id
            ? { ...item, videos: [...item.videos, Currentvideo] }
            : item
        )
      };
    case REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item.id === id
            ? {
                ...item,
                videos: item.videos.filter((vid) => vid.id !== Currentvideo.id)
              }
            : item
        )
      };
    default:
      return state;
  }
};
