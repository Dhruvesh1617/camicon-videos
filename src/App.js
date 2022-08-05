

import "./styles.css";
import "./App.css";
import { Home } from "./Components/Home"
import { VideoDetails } from "./Components/VideoDetails";
import { SavedVideo } from "./Components/Savedvideo";
import { LikedVideo } from "./Components/LikedVideo";
import { Routes, Route } from "react-router-dom";
import Navbar  from "./Components/Navbar";
import { History } from "./Components/History";
import {PlayList} from "./Components/playlist";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useData } from "./Context/DataContext";
import { PrivateRoute} from "./Components/privateRoute/PrivateRoute"
import {useEffect} from "react"
function App() {
  const {loadVideos}=useData();
 

  useEffect(() => {
   let isMounted=true;
    if(isMounted)
    {
      loadVideos()
    }

    return () => {
      isMounted=false
    }
  }, [])
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <PrivateRoute  path="/:videoID" element={<VideoDetails />} />
        <PrivateRoute path="/saved" element={<SavedVideo />} />
        <PrivateRoute path="/history" element={<History />} />
        <PrivateRoute path="/liked" element={<LikedVideo />} />
        <PrivateRoute path="/playlist-videos" element={<PlayList/>}/>
        <PrivateRoute path="/playlist-videos/:videoID" element={<VideoDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
