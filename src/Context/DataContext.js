import { createContext, useContext, useReducer } from "react";
import { reducerfunction } from "../Reducer/reducer";
const DataContext = createContext();

const datalist = {
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

export const DataProvider = ({ children }) => {
  const [
    { history, currentvideo, savedvideo, playlist, likedvideo },
    dispatch
  ] = useReducer(reducerfunction, datalist);
  return (
    <DataContext.Provider
      value={{
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
