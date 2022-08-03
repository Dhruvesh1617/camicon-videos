import axios from "axios";
import { useEffect, useState } from "react";

export const useVideoDB = () => {
  const [videoDB, setVideoDB] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      try {
        const videoData = await axios.get(
          "https://camtubetest.herokuapp.com/videos"
        );
        console.log(videoData.data.videos);
        setVideoDB(videoData.data.videos);
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  }, []);
  return videoDB;
};
