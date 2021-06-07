import logo from './logo.svg';
import './App.css';
import "./styles.css";
import { Home } from "./Components/Home"
import { VideoDetails } from "./Components/VideoDetails";
import { SavedVideo } from "./Components/Savedvideo";
import { LikedVideo } from "./Components/LikedVideo";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { History } from "./Components/History";
import {PlayList} from "./Components/playlist";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:videoID" element={<VideoDetails />} />
        <Route path="/saved" element={<SavedVideo />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<LikedVideo />} />
        <Route path="/playlist-videos" element={<PlayList/>}/>
        <Route path="/playlist-videos/:videoID" element={<VideoDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
