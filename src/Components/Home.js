import { VideoDB } from "../DB/videoDB";
import { useEffect } from "react";
import { useVideoDB } from "../DB/videoDB";
import { Link } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { ADD_TO_HISTORY } from "../Reducer/reducer";
export const Home = () => {
  const { videosData, dataDispatch ,loadVideos} = useData();
 console.log("Array of videos",videosData)
  return (
    <div>
      <h1 style={{"textAlign":"center"}}>CamTube</h1>
      {videosData ? (
        videosData.map((videoitem) => (
          <div className="main-container">
            <div
              className="card mid_width_card home-video-container"
              key={videoitem._id}
            >
              <Link
                onClick={() =>
                  dataDispatch({ type: ADD_TO_HISTORY, video: videoitem })
                }
                style={{ textDecoration: "none", color: "black" }}
                to={`/${videoitem._id}`}
              >
                <img
                  style={{height:"30vh", width: "100%"}}
                  src={videoitem.imgUrl}
                  alt="videoitem.name"
                />
                <h3>{videoitem.name}</h3>
                <span
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    position: "absolute",
                    bottom: "0px",
                    right: "0px"
                  }}
                >
                  Time:{videoitem.duration}
                </span>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div style={{textAlign:"center"}}>Loading...</div>
      )}
    </div>
  );
};
