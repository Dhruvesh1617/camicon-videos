import { v4 } from "uuid";
export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const SAVE_VIDEO = "SAVE_VIDEO";
export const UNSAVED_VIDEO = "UNSAVED_VIDEO";
export const LIKED_VIDEO = "LIKED_VIDEO";
export const NOT_LIKED_VIDEO = "NOT_LIKED_VIDEO";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const SET_VIDEOS="SET_VIDEOS";
export const REGISTER_USER="REGISTER_USER";

export const datalist = {
  user:{},
  isAuthenticated:false,
  videosData:[],
  history: [],
  currentvideo: [],
  savedvideo: [],
  likedvideo: [],
  playlist: [
    {
      id: "default",
      name: "default",
      videos: []
    }
  ]
};

export const reducerfunction = (
  state,
  { type, payload,video, Currentvideo, playlistName,_id }
) => {
  switch (type) {

    case SET_VIDEOS:
        return {...state,videosData:payload}

    case REGISTER_USER:
        localStorage.setItem("token",payload.token)
        localStorage.setItem("isAuthenticated",true)
        return {...state,
              user:payload?.user,
              isAuthenticated:true,
            }
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
        savedvideo: state.savedvideo.filter((video) => video._id !==_id)
      };
    case LIKED_VIDEO:
      return { ...state, likedvideo: state.likedvideo.concat(video) };
    case NOT_LIKED_VIDEO:
      return {
        ...state,
        likedvideo: state.likedvideo.filter((video) => video._id !==_id)
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.concat({
         _id: v4(),
          name: playlistName,
          videos: []
        })
      };
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item._id ===_id
            ? { ...item, videos:item.videos.concat(Currentvideo) }
            : item
        )
      };
    case REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item._id ===_id
            ? {
                ...item,
                videos: item.videos.filter((vid) => vid._id !== Currentvideo._id)
              }
            : item
        )
      };
    default:
      return state;
  }
};
