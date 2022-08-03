import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { reducerfunction } from "../Reducer/reducer";
import { datalist,REGISTER_USER,SET_VIDEOS} from "../Reducer/reducer";
const DataContext = createContext();



export const DataProvider = ({ children }) => {
  const [
    { videosData,history, currentvideo, savedvideo, playlist, likedvideo },
    dispatch
  ] = useReducer(reducerfunction, datalist);

  const loadVideos=async()=>
  {
    try{
      const {data:videoItems}=await axios.get("https://camtubetest.herokuapp.com/videos")
          dispatch({type:SET_VIDEOS,payload:videoItems.videos})
      console.log("videos",videoItems?.videoseos)
    }
    catch(err)
    {
      console.log(err)
    }
  }

  const registerUser=async(username,email,password,navigate,state)=>
  {
    try{
      const {data}=await axios.post("https://camtubetest.herokuapp.com/users/register",{username,email,password})
      console.log(data)
      navigate(state?.from?state.from:"/")
      dispatch({type:REGISTER_USER,payload:data})
      console.log(state.from)
    }
    catch(err)
    {
      console.log(err)
    }

  }

  return (
    <DataContext.Provider
      value={{
        loadVideos,
        registerUser,
        videosData,
        history,
        currentvideo,
        playlist,
        savedvideo,
        likedvideo,
        dataDispatch: dispatch
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
