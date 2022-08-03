

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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:videoID" element={<VideoDetails />} />
        <Route path="/saved" element={<SavedVideo />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<LikedVideo />} />
        <Route path="/playlist-videos" element={<PlayList/>}/>
        <Route path="/playlist-videos/:videoID" element={<VideoDetails/>}/>
        <Route path="/users/login" element={<Login/>}/>
        <Route path="/users/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
